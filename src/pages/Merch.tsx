import { ShoppingBag, Star, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";



const Merch = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-halo opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
              Official <span className="text-primary text-glow-cyan">Merch</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Rep the Dominion Root brand with exclusive gear and collectibles.
            </p>
          </div>
        </div>
      </section>



      {/* Coming Soon Notice */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-card rounded-lg p-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">
              Store Coming <span className="text-primary">Soon</span>
            </h3>
            <p className="font-body text-muted-foreground mb-4">
              Dominion Root merch is on the way. Stay tuned for the official launch of exclusive gear, collectibles, and more!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Merch;
