interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export function generateICSFile(event: CalendarEvent): string {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Dominion Root//Events//EN',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(event.startDate)}`,
    `DTEND:${formatDate(event.endDate)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
}

export function downloadICSFile(event: CalendarEvent, filename: string = 'event.ics'): void {
  const icsContent = generateICSFile(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

export function parseEventDateTime(dateStr: string, timeStr: string): { start: Date; end: Date } {
  // Parse the date
  const eventDate = new Date(dateStr);
  
  // Check for time range with dash (e.g., "1:00 PM - 8:00 PM EST")
  const rangeMatch = timeStr.match(/(\d+):?(\d+)?\s*(AM|PM)?\s*-\s*(\d+):?(\d+)?\s*(AM|PM)/i);
  
  if (rangeMatch) {
    // Start time
    let startHours = parseInt(rangeMatch[1]);
    const startMinutes = rangeMatch[2] ? parseInt(rangeMatch[2]) : 0;
    const startMeridiem = rangeMatch[3]?.toUpperCase();
    
    // End time
    let endHours = parseInt(rangeMatch[4]);
    const endMinutes = rangeMatch[5] ? parseInt(rangeMatch[5]) : 0;
    const endMeridiem = rangeMatch[6]?.toUpperCase();
    
    // Convert start time to 24-hour format
    if (startMeridiem === 'PM' && startHours !== 12) {
      startHours += 12;
    } else if (startMeridiem === 'AM' && startHours === 12) {
      startHours = 0;
    }
    
    // Convert end time to 24-hour format
    if (endMeridiem === 'PM' && endHours !== 12) {
      endHours += 12;
    } else if (endMeridiem === 'AM' && endHours === 12) {
      endHours = 0;
    }
    
    const startDate = new Date(eventDate);
    startDate.setHours(startHours, startMinutes, 0, 0);
    
    const endDate = new Date(eventDate);
    endDate.setHours(endHours, endMinutes, 0, 0);
    
    return { start: startDate, end: endDate };
  }
  
  // Single time (e.g., "12:00 PM EST")
  const timeMatch = timeStr.match(/(\d+):?(\d+)?\s*(AM|PM)?/i);
  
  if (!timeMatch) {
    // Default to start of day if time can't be parsed
    return {
      start: eventDate,
      end: new Date(eventDate.getTime() + 2 * 60 * 60 * 1000) // 2 hours later
    };
  }
  
  let hours = parseInt(timeMatch[1]);
  const minutes = timeMatch[2] ? parseInt(timeMatch[2]) : 0;
  const meridiem = timeMatch[3]?.toUpperCase();
  
  // Convert to 24-hour format
  if (meridiem === 'PM' && hours !== 12) {
    hours += 12;
  } else if (meridiem === 'AM' && hours === 12) {
    hours = 0;
  }
  
  const startDate = new Date(eventDate);
  startDate.setHours(hours, minutes, 0, 0);
  
  // Default to 2 hours if no end time specified
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
  
  return { start: startDate, end: endDate };
}