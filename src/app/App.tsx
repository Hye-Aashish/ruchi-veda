import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ShoppingCart,
  MessageCircle,
  Star,
  Check,
  Zap,
  Battery,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Leaf,
  Sparkles,
  Heart,
  Award,
  Truck,
  Clock,
  Users,
  Package,
  BadgeCheck,
  Flame,
  ArrowRight,
  MapPin,
  Thermometer,
  Play
} from 'lucide-react';

import { CountdownTimer } from './components/CountdownTimer';
import { StickyBottomCTA } from './components/StickyBottomCTA';

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedVariant, setSelectedVariant] = useState(1);

  const variants = {
    1: { price: 18.75, original: 25.00, label: "PACK OF ONE" },
    2: { price: 33.75, original: 45.00, label: "PACK OF TWO" },
    3: { price: 48.75, original: 65.00, label: "PACK OF THREE" }
  };

  const handleBuyNow = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAmazon = () => {
    const amazonUrl = 'https://www.amazon.com/dp/B0CKZ7N7H5'; // US store
    window.open(amazonUrl, '_blank');
  };

  const benefits = [
    // ... no changes to benefits ...
    {
      title: "Natural Energy Boost",
      description: "Feel revitalized with 800mg of pure Moringa power. Sustained energy without the caffeine crash.",
      icon: Zap
    },
    {
      title: "Immune Support",
      description: "Packed with 46 potent antioxidants and Vitamin C to strengthen your body's natural defenses.",
      icon: ShieldCheck
    },
    {
      title: "Metabolic Balance",
      description: "Rich in essential amino acids and iron to support healthy metabolism and weight management.",
      icon: Activity
    },
    {
      title: "Digestive Health",
      description: "Natural fiber and anti-inflammatory properties to soothe your gut and improve nutrient absorption.",
      icon: Leaf
    },
    {
      title: "Mental Clarity",
      description: "Vitamin B complex and magnesium to reduce brain fog and support cognitive focus.",
      icon: Sparkles
    },
    {
      title: "Youthful Radiance",
      description: "High Vitamin E and antioxidants to combat oxidative stress for glowing skin and hair.",
      icon: Heart
    }
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md text-primary py-4 px-6 border-b border-primary/5">
        <div className="container mx-auto flex items-center justify-between">
          <img src="/logo.png" alt="Ruchi Veda Logo" className="h-10 md:h-12 w-auto" />
          <nav className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#overview" className="hover:text-secondary transition-colors">Overview</a>
            <a href="#quality" className="hover:text-secondary transition-colors">Quality</a>
            <a href="#reviews" className="hover:text-secondary transition-colors">Reviews</a>
          </nav>
          <div className="flex items-center gap-6">
            {/* Cart Icon Removed */}
          </div>
        </div>
      </header>

      {/* Hero Section - Product Page Style */}
      <section id="overview" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Product Images */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2.5rem] overflow-hidden bg-muted relative group border border-border"
              >
                <div className="absolute top-6 left-6 z-10">
                   <div className="bg-secondary text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                      Save 33% Only Today
                   </div>
                </div>
                <img 
                  src="https://cdn.shopify.com/s/files/1/0949/0074/8588/files/1000213190.jpg?v=1763560311" 
                  alt="Moringa Drumstick Tablets" 
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-muted border border-border overflow-hidden cursor-pointer hover:border-primary transition-all">
                    <img src="https://cdn.shopify.com/s/files/1/0949/0074/8588/files/1000213190.jpg?v=1763560311" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Details & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col pt-4"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">3,247 Verified Reviews</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 tracking-tighter leading-tight font-heading uppercase">
                Moringa Drumstick Tablet 180
              </h1>
              <p className="text-xl text-muted-foreground font-medium mb-8 leading-tight italic">
                Nutrient Rich Miracle Green Superfood
              </p>

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="flex flex-col">
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Standard</span>
                  <p className="text-2xl text-muted-foreground/30 line-through font-bold">${variants[selectedVariant as keyof typeof variants].original.toFixed(2)}</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="flex flex-col">
                  <span className="text-xs font-black text-secondary uppercase tracking-widest mb-1">Sale Exclusive</span>
                  <p className="text-5xl font-black text-primary">${variants[selectedVariant as keyof typeof variants].price.toFixed(2)}</p>
                </div>
              </div>

              {/* Variant Selection Removed */}

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                     <Package className="w-5 h-5 text-primary" />
                   </div>
                   <p className="text-sm font-bold text-primary">800mg of Pure Moringa power per tablet</p>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                     <Flame className="w-5 h-5 text-secondary" />
                   </div>
                   <p className="text-sm font-bold text-primary">Natural Energy Boost - No Caffeine, No Crash</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-12">
                {/* Add To Bag Removed */}
                <button
                  onClick={handleAmazon}
                  className="w-full h-20 bg-[#FFD814] hover:bg-[#F7CA00] text-black border border-[#FCD200] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                    alt="Amazon" 
                    className="h-5 mt-1" 
                  />
                  <span>BUY ON AMAZON</span>
                </button>
              </div>

              <div className="p-8 bg-muted rounded-[2rem] border border-border text-center">
                 <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Quality Guaranteed</p>
                 <div className="flex justify-center gap-10">
                    <div className="flex flex-col items-center gap-2">
                       <Leaf className="w-6 h-6 text-emerald-600" />
                       <span className="text-[10px] font-black uppercase text-muted-foreground">100% Organic</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <Zap className="w-6 h-6 text-secondary" />
                       <span className="text-[10px] font-black uppercase text-muted-foreground">Vegan Cap</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <BadgeCheck className="w-6 h-6 text-primary" />
                       <span className="text-[10px] font-black uppercase text-muted-foreground">3rd Party Lab</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reels Section - Social Proof Carousel */}
      <section id="reels" className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Life at Ruchi Veda</span>
               </div>
               <h2 className="text-3xl font-black text-primary tracking-tighter font-heading uppercase">Moringa Reels</h2>
            </div>
            <div className="flex gap-2">
               <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ArrowRight className="w-4 h-4 rotate-180" />
               </button>
               <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6 snap-x">
             {[
               { img: "/reel_thumbnail_1_1775644656916.png", tag: "Recipe" },
               { img: "/reel_thumbnail_2_1775644681425.png", tag: "Expert" },
               { img: "/reel_thumbnail_1_1775644656916.png", tag: "Review" },
               { img: "/reel_thumbnail_2_1775644681425.png", tag: "How To" },
               { img: "/reel_thumbnail_1_1775644656916.png", tag: "Farming" },
               { img: "/reel_thumbnail_2_1775644681425.png", tag: "Results" }
             ].map((reel, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.02 }}
                 className="flex-none w-[260px] aspect-[9/16] rounded-[2.5rem] overflow-hidden relative group cursor-pointer snap-start shadow-xl shadow-primary/5 border border-border"
               >
                 <img src={reel.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Reel Thumbnail" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                 
                 <div className="absolute top-6 left-6">
                   <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
                      <p className="text-[10px] font-black uppercase text-white tracking-widest">{reel.tag}</p>
                   </div>
                 </div>

                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                       <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                    </div>
                 </div>

                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => <div key={j} className="w-2 h-2 rounded-full bg-secondary" />)}
                       </div>
                    </div>
                    <p className="text-white font-bold text-sm leading-tight italic">Click to watch story</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Values Section - High Impact Story */}
      <section id="quality" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter font-heading uppercase">
              From Real Farms.<br />
              <span className="text-secondary italic lowercase">Not factories.</span>
            </h2>
            <p className="text-xl text-emerald-100/60 max-w-2xl mx-auto mb-20">
              We grow our own Moringa in Western India. No brokers, no shortcuts, just pure plant power harvested at peak potency.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Direct Sourced", desc: "Private farms mean total quality control from seed to tablet.", icon: MapPin },
              { title: "Sun & Air Dried", desc: "Gentle traditional drying preserves delicate heat-sensitive enzymes.", icon: Thermometer },
              { title: "Tested Purity", desc: "Verified by 3rd party labs for heavy metals and contaminants.", icon: ShieldCheck }
            ].map((item, i) => (
              <motion.div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mb-8 border border-white/20 backdrop-blur-sm">
                   <item.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight font-heading">{item.title}</h3>
                <p className="text-emerald-100/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Trust Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-[3rem] p-12 md:p-16 border-border overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 hidden lg:block opacity-10">
               <Package className="w-64 h-64 text-primary rotate-12" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-border">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                      alt="Amazon" 
                      className="h-6"
                    />
                  </div>
                  <div className="h-6 w-px bg-border" />
                  <div className="flex gap-1 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tighter leading-tight font-heading uppercase">
                  Trusted By <br />
                  <span className="text-secondary italic">Thousands On Amazon.</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  "The highest quality Moringa I've found on Amazon. The packaging is premium and the results are real. My energy levels have doubled."
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.open('https://amazon.com', '_blank')}
                    className="h-16 px-10 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all active:scale-[0.98] shadow-xl flex items-center justify-center gap-3"
                  >
                    View On Amazon
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/50 border border-white/80">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                       <ShieldCheck className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-primary tracking-widest leading-none mb-1">Status</p>
                       <p className="text-xs font-bold text-muted-foreground">#1 Best Seller</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="aspect-square rounded-[2rem] bg-white p-2 border border-border shadow-sm group hover:border-secondary transition-all">
                      <div className="w-full h-full rounded-[1.5rem] bg-muted overflow-hidden">
                        <img 
                          src={`https://cdn.shopify.com/s/files/1/0949/0074/8588/files/1000213190.jpg?v=1763560311`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          alt="Product Review"
                        />
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all">
             <div className="flex items-center gap-3">
               <BadgeCheck className="w-6 h-6" />
               <span className="text-[10px] font-black uppercase tracking-widest">Verified Purchase</span>
             </div>
             <div className="flex items-center gap-3">
               <Truck className="w-6 h-6" />
               <span className="text-[10px] font-black uppercase tracking-widest">Prime Delivery</span>
             </div>
             <div className="flex items-center gap-3">
               <Award className="w-6 h-6" />
               <span className="text-[10px] font-black uppercase tracking-widest">Top Rated 2024</span>
             </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy & Story Cards */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter font-heading uppercase mb-6 leading-[0.9]">
               Simple. Honest. <br />
               <span className="text-secondary italic">Clean.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium italic">This isn't mass-produced nutrition. It's intention in a capsule.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: The Farm Story */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="lg:col-span-2 p-12 rounded-[3.5rem] bg-primary text-white relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/20">
                   <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase font-heading">From Real Farms — <br />Not Factories.</h3>
                <p className="text-emerald-100/60 text-lg leading-relaxed mb-8">
                   At Ruchi Veda, we grow moringa on our own farms in western India — where the climate naturally supports nutrient-rich leaves. Each batch is carefully harvested and slowly sun-dried to preserve its natural goodness.
                </p>
                <div className="flex gap-4">
                   <span className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">No Chemicals</span>
                   <span className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">No Preservatives</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 opacity-5">
                 <Package className="w-96 h-96" />
              </div>
            </motion.div>

            {/* Card 2: Why Ruchi Veda */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3.5rem] bg-muted border border-border flex flex-col"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase font-heading">Why Ruchi Veda</h3>
              <ul className="space-y-4">
                 {[
                   "100% natural, sun-dried moringa",
                   "Farm-grown & carefully processed",
                   "No additives or ingredients",
                   "Easy daily capsules — no hassle"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-sm font-bold text-muted-foreground">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {item}
                   </li>
                 ))}
              </ul>
            </motion.div>

            {/* Card 3: Simple To Use */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3.5rem] bg-secondary text-white flex flex-col"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                 <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase font-heading">Simple To Use</h3>
              <div className="space-y-6">
                 <div>
                    <p className="text-3xl font-black mb-1">1–2</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Capsules Daily with water</p>
                 </div>
                 <p className="text-sm font-medium leading-relaxed italic opacity-80">
                    "Easy to add to your routine. Consistent use recommended for best results."
                 </p>
                 <div className="h-px bg-white/20 w-full" />
                 <p className="text-[10px] font-black uppercase tracking-widest">Farm to Daily Routine 🌿</p>
              </div>
            </motion.div>

            {/* Card 4: Wellness Support (Full Width Below) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="lg:col-span-4 p-12 rounded-[4rem] bg-muted border border-border relative overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                 <div>
                    <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase font-heading">Daily Wellness Support</h3>
                    <p className="text-xl text-muted-foreground italic mb-10">Naturally rich in essential nutrients and antioxidants.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                       {[
                         { title: "Energy & Vitality", icon: Zap },
                         { title: "Immune Function", icon: ShieldCheck },
                         { title: "Balanced Lifestyle", icon: Activity },
                         { title: "Nourishment", icon: Heart }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-border/50">
                            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                               <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest">{item.title}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-primary/5 p-8 rounded-[3rem] border border-primary/10">
                    <p className="text-lg font-bold text-primary italic leading-relaxed">
                       "Clean support your body can rely on — every day. From our farms to your daily routine."
                    </p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter font-heading uppercase mb-6">
                What's Inside <br />
                <span className="text-secondary italic">Nature's Powerful Green Capsule?</span>
             </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
             <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Left Descriptors */}
                <div className="flex flex-col gap-16 text-right order-2 lg:order-1">
                   <div className="relative group">
                      <div className="absolute top-0 -right-4 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                      <h4 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">100% PURE ORGANIC MORINGA</h4>
                      <p className="text-muted-foreground text-sm font-medium">Only Nature Inside: No Fillers, No Additives.</p>
                   </div>
                   <div className="relative group">
                      <div className="absolute top-0 -right-4 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                      <h4 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">27 ESSENTIAL VITAMINS & MINERALS</h4>
                      <p className="text-muted-foreground text-sm font-medium">Complete Nutrition from Nature's Multivitamin.</p>
                   </div>
                </div>

                {/* Center Capsule */}
                <div className="flex justify-center order-1 lg:order-2">
                   <div className="relative">
                      <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full"
                      >
                         <img 
                           src="/moringa_capsule_detail_1775649084726.png" 
                           alt="Moringa Capsule" 
                           className="w-64 md:w-80 h-auto drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all"
                         />
                      </motion.div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
                   </div>
                </div>

                {/* Right Descriptors */}
                <div className="flex flex-col gap-16 text-left order-3">
                   <div className="relative group">
                      <div className="absolute top-0 -left-4 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                      <h4 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">800mg OF PURE MORINGA POWER</h4>
                      <p className="text-muted-foreground text-sm font-medium">Daily Dose of Energy & Immunity Support.</p>
                   </div>
                   <div className="relative group">
                      <div className="absolute top-0 -left-4 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                      <h4 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">46 POTENT ANTIOXIDANTS</h4>
                      <p className="text-muted-foreground text-sm font-medium">Protect. Detox. Rejuvenate.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Visual Product Guide - Infographic Stack */}
      <section className="bg-white py-0 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col gap-0 border-x border-border">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
             <motion.div 
               key={num}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1 }}
             >
                <img 
                  src={`/desc/${num}.webp`} 
                  alt={`Product Description ${num}`} 
                  className="w-full h-auto block"
                />
             </motion.div>
          ))}
        </div>
      </section>


      {/* Customer Testimonials Section */}
      <section id="reviews" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-1 text-secondary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-4">Real Results. Real People.</h2>
            <p className="text-xl text-muted-foreground italic">Join over 10,000+ happy customers on their wellness journey.</p>
          </div>

          <div className="testimonials-slider">
            <Slider {...testimonialSettings}>
              {[
                {
                  text: "Amazing boost in energy! I take two every morning and I don't feel that afternoon slump anymore. The quality is outstanding.",
                  author: "Sarah J.",
                  location: "Austin, TX",
                  date: "2 days ago"
                },
                {
                  text: "The best organic Moringa I've tried. The packaging is premium and you can smell the freshness. Worth every cent.",
                  author: "Michael R.",
                  location: "Chicago, IL",
                  date: "1 week ago"
                },
                {
                  text: "Finally a supplement that doesn't use fillers. Just pure Moringa. I've noticed a huge improvement in my digestion.",
                  author: "David L.",
                  location: "Los Angeles, CA",
                  date: "3 days ago"
                },
                {
                  text: "My skin has been glowing since I started taking these. High antioxidant count is no joke! Highly recommend.",
                  author: "Emily W.",
                  location: "New York, NY",
                  date: "5 days ago"
                },
                {
                  text: "Great product and even better customer service. Fast delivery and the results are visible within the first week.",
                author: "Chris P.",
                location: "Denver, CO",
                date: "2 weeks ago"
              },
              {
                text: "I was skeptical about supplements but Ruchi Veda changed my mind. Clean, effective, and organic. Perfect.",
                author: "Jessica B.",
                location: "Miami, FL",
                date: "1 day ago"
              }
            ].map((review, i) => (
              <div key={i} className="px-4 pb-12">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm flex flex-col justify-between h-[400px]"
                >
                  <div>
                    <div className="flex gap-0.5 text-secondary mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-medium text-primary leading-relaxed italic mb-8">"{review.text}"</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-6 mt-auto">
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-primary">{review.author}</h4>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-[9px] font-black uppercase text-emerald-600">Verified</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center">
           <img src="/logo.png" alt="Ruchi Veda Logo" className="h-16 w-auto mx-auto mb-10" />
           <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-12 italic">
             "Our mission is to bring the ancient purity of Vedic nutrition to the modern world through farm-to-capsule transparency."
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-y border-border py-12">
              <div className="flex flex-col items-center gap-2">
                 <ShieldCheck className="w-6 h-6 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">FDA Registered Facility</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Award className="w-6 h-6 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">GMP Approved</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Leaf className="w-6 h-6 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">100% Organic</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Truck className="w-6 h-6 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Fast Delivery</span>
              </div>
           </div>
           <p className="mt-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">© 2026 Ruchi Veda. All Rights Reserved.</p>
        </div>
      </footer>

      <StickyBottomCTA
        show={showStickyCTA}
        onBuyClick={handleAmazon}
        onWhatsAppClick={() => window.open('https://wa.me/19876543210', '_blank')}
      />
    </div>
  );
}