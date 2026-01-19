import { ShoppingBag, Star, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";

// interface ProductProps {
//   name: string;
//   price: number;
//   image: string;
//   description: string;
//   badge?: string;
// }

// const products: ProductProps[] = [
//   {
//     name: "Dominion Root Logo Tee",
//     price: 29.99,
//     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
//     description: "Premium cotton t-shirt with the iconic Dominion Root logo.",
//     badge: "Best Seller",
//   },
//   {
//     name: "Spartan Hoodie",
//     price: 59.99,
//     image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
//     description: "Comfortable hoodie with Halo-inspired Spartan design.",
//   },
//   {
//     name: "Gaming Cap",
//     price: 24.99,
//     image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
//     description: "Adjustable cap with embroidered logo.",
//   },
//   {
//     name: "Energy Shield Poster",
//     price: 19.99,
//     image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=400&h=400&fit=crop",
//     description: "High-quality print of exclusive artwork.",
//   },
//   {
//     name: "Collector's Mousepad",
//     price: 34.99,
//     image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
//     description: "Extended gaming mousepad with custom design.",
//     badge: "New",
//   },
//   {
//     name: "Sticker Pack",
//     price: 12.99,
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
//     description: "Set of 10 vinyl stickers featuring channel art.",
//   },
// ];

// function ProductCard({ product }: { product: ProductProps }) {
//   return (
//     <div className="group relative glass-card rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50">
//       {product.badge && (
//         <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-body font-semibold uppercase tracking-wider">
//           {product.badge}
//         </div>
//       )}

//       {/* Image */}
//       <div className="relative aspect-square overflow-hidden bg-secondary">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Quick add button */}
//         <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
//           <Button variant="halo" className="w-full">
//             <ShoppingBag className="w-4 h-4" />
//             Add to Cart
//           </Button>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="p-4">
//         <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
//           {product.name}
//         </h3>
//         <p className="font-body text-sm text-muted-foreground mt-1 line-clamp-2">
//           {product.description}
//         </p>
//         <div className="mt-3 flex items-center justify-between">
//           <span className="font-display font-bold text-xl text-primary">
//             ${product.price.toFixed(2)}
//           </span>
//           <div className="flex items-center gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-4 h-4 fill-accent text-accent" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const Merch = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header
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

      {/* Features */}
      {/* <section className="py-8 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary" />
              <span className="font-body text-muted-foreground">Free Shipping $50+</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-body text-muted-foreground">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-primary" />
              <span className="font-body text-muted-foreground">Premium Quality</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Products Grid */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section> */}

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
