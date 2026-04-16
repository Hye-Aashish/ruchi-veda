import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
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
  Instagram,
  Play,
  X,
  Plus,
  Minus,
  ChevronDown,
  Info,
  CircleCheck,
  CircleX,
  ChevronLeft,
  ChevronRight
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
  const [selectedReel, setSelectedReel] = useState<null | { url: string, video: string }>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroImages = ['product_no_bg.png', 'lifestyle.jpg', 'quality.jpg', 'why.jpg', 'purity.jpg'];
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [activeImage, setActiveImage] = useState(`/images/${heroImages[0]}`);

  // Auto Slider Logic Removed
  const nextSlide = () => setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentHeroIdx((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    setActiveImage(`/images/${heroImages[currentHeroIdx]}`);
  }, [currentHeroIdx]);

  const variants = {
    1: { price: 18.75, original: 25.00, label: "1 Bottle (60 Capsules)" },
    2: { price: 33.75, original: 45.00, label: "2 Bottles (120 Capsules)" },
    3: { price: 48.75, original: 65.00, label: "3 Bottles (180 Capsules)" }
  };

  const handleBuyNow = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAmazon = () => {
    const amazonUrl = 'https://www.amazon.com/dp/B0G2C769Q4?ref=cm_sw_r_cp_ud_dp_MER5QEJ4WBC2K3PKKBS9&ref_=cm_sw_r_cp_ud_dp_MER5QEJ4WBC2K3PKKBS9&social_share=cm_sw_r_cp_ud_dp_MER5QEJ4WBC2K3PKKBS9'; // Updated Amazon Link
    window.open(amazonUrl, '_blank');
  };

  const benefits = [
    // ... no changes to benefits ...
    {
      title: "Natural Energy Boost",
      description: "Feel revitalized with 550mg of pure Moringa power. Sustained energy without the caffeine crash.",
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
    slidesToShow: 3, // Default for PC (> 1024px)
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Screen <= 1024px (Tablets & Mobiles)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Product Images */}
            <div className="space-y-6">
               <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2.5rem] overflow-hidden bg-muted relative group border border-border h-[400px] md:h-[600px] flex items-center justify-center"
              >
                <div className="absolute top-6 left-6 z-20">
                   <div className="bg-secondary text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                      Save 33% Only Today
                   </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    src={activeImage} 
                    alt="Moringa Product" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 100) prevSlide();
                      if (info.offset.x < -100) nextSlide();
                    }}
                    className="w-full h-full object-contain p-8 cursor-grab active:cursor-grabbing touch-none"
                  />
                </AnimatePresence>

                {/* Manual Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-primary border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-primary border border-white/20 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Overlay Gradient Removed */}
              </motion.div>
              
              <div className="grid grid-cols-5 gap-2">
                {heroImages.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentHeroIdx(i)}
                    className={`aspect-square rounded-xl bg-muted border ${currentHeroIdx === i ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'} overflow-hidden cursor-pointer hover:border-primary transition-all relative`}
                  >
                    <img src={`/images/${img}`} className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0" alt={`Tab ${i + 1}`} />
                    {currentHeroIdx === i && (
                      <div className="absolute inset-0 bg-secondary/10" />
                    )}
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
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-primary mb-2 tracking-tighter leading-tight font-heading uppercase">
                Moringa 60 Veg Capsules <br />
                <span className="text-3xl md:text-4xl block mt-2 opacity-80">Natural Energy & Immune Support</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium mb-8 leading-tight italic">
                From Real Farms — Not Factories. Clean, plant-based nutrition.
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
                   <p className="text-sm font-bold text-primary">550mg of Pure Moringa power per capsule</p>
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
                <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-border mt-4">
                  {[
                    { label: "NON-GMO", icon: ShieldCheck },
                    { label: "LAB TESTED", icon: Activity },
                    { label: "VEGAN", icon: Leaf },
                    { label: "NO ADDITIVES", icon: Zap }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-60">
                      <badge.icon className="w-3 h-3 text-primary" />
                      <span className="text-[9px] font-black uppercase tracking-widest">{badge.label}</span>
                    </div>
                  ))}
                </div>
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


      {/* Instagram Reels / Social Proof */}
      <section className="py-24 bg-muted">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase font-heading mb-2">Social Proof</h2>
              <p className="text-lg text-muted-foreground italic">Follow our journey on Instagram @RuchiVeda</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest border-b-2 border-secondary pb-1">
               Go to Instagram <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-10 no-scrollbar -mx-6 px-6 snap-x md:mx-0 md:px-0">
             {[
                { url: "https://www.instagram.com/reel/DVy7mHXE7JP/", video: "/videos/reel_1.mp4" },
                { url: "https://www.instagram.com/reel/DWzQ8tvk1hH/", video: "/videos/reel_2.mp4" },
                { url: "https://www.instagram.com/reel/DWT49xnDQMY/", video: "/videos/reel_3.mp4" },
                { url: "https://www.instagram.com/reel/DVVQTb7jS5s/", video: "/videos/reel_4.mp4" }
             ].map((reel, idx) => (
               <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.02 }}
                 className="min-w-[280px] md:min-w-0 aspect-[9/16] rounded-[2rem] bg-black overflow-hidden shadow-lg relative group cursor-pointer snap-center"
                 onClick={() => setSelectedReel(reel)}
               >
                  <video 
                    src={reel.video}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20">
                     <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                     </div>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-white" />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-white tracking-widest shadow-sm">Live Social Proof</span>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>



      {/* Values Section - High Impact Story */}
      <section id="quality" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center relative z-10">
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





      {/* Comparison Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-heading mb-6">
               The Ruchi Veda <br />
               <span className="text-secondary italic">Difference</span>
            </h2>
            <p className="text-xl text-emerald-100/60 max-w-2xl mx-auto italic text-center">Why hundreds of customers choose our farm-grown moringa over mass-produced alternatives.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Our Way */}
               <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-secondary/10 hidden md:block">
                     <CircleCheck className="w-32 h-32" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-8 uppercase text-secondary">Ruchi Veda Way</h3>
                  <ul className="space-y-4 md:space-y-6">
                     {[
                       "Direct Farm Sourced (Western India)",
                       "Traditional Sun & Air Dried",
                       "Nutrient-dense raw processing",
                       "Pure 100% Moringa Leaves only",
                       "Tested for Heavy Metals & Pesticides"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                             <Check className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                          </div>
                          <span className="text-xs md:text-sm font-bold">{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Others Way */}
               <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-black/20 border border-white/5 opacity-50">
                  <h3 className="text-xl md:text-2xl font-black mb-8 uppercase text-muted-foreground">Market Standards</h3>
                  <ul className="space-y-4 md:space-y-6">
                     {[
                       "Third-party sourced powders",
                       "High-heat industrial drying",
                       "Processing kills delicate enzymes",
                       "Unknown fillers & flow agents",
                       "Rarely tested for contaminants"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 grayscale">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                             <CircleX className="w-3 h-3 md:w-4 md:h-4 text-white/40" />
                          </div>
                          <span className="text-xs md:text-sm font-medium text-white/60">{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>



      {/* Visual Product Guide - Improved Infographic Stack */}
      <section className="bg-white py-0 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col gap-0 border-x border-border">
          {/* Ordered Footer Banners with spacing */}
          {['footer_2.jpg', 'footer_5.jpg', 'footer_3.jpg', 'footer_4.jpg', 'footer_1.jpg'].map((img, idx) => (
             <motion.div 
               key={img}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: idx * 0.1 }}
               className="mb-4 lg:mb-0" // Add spacing on mobile
             >
                <img 
                  src={`/images/${img}`} 
                  alt="Product Infographic" 
                  className="w-full h-auto block"
                />
             </motion.div>
          ))}
        </div>
      </section>


      {/* Wellness Journey Timeline */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter font-heading uppercase mb-6">
               Your Journey <br />
               <span className="text-secondary italic">To Wellness</span>
            </h2>
            <p className="text-xl text-muted-foreground italic">Consistency is key. Here's what to expect with Ruchi Veda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative mt-20">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-border z-0" />
             
             {[
               { day: "DAYS 1-7", title: "Activation", desc: "Your body begins absorbing pure leaf nutrients. You may feel a subtle shift in digestion and morning alertness.", icon: Zap },
               { day: "DAYS 30+", title: "Cellular Support", desc: "Anti-oxidants start working on hair, skin, and overall immunity. Sustained energy levels become more frequent.", icon: Sparkles },
               { day: "DAYS 90+", title: "Deep Vitality", desc: "Natural vitality is fully integrated. A true feeling of farm-to-capsule wellness becomes your new standard.", icon: ShieldCheck }
             ].map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-muted border-4 border-white flex items-center justify-center mb-8 shadow-xl">
                     <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="bg-secondary text-primary text-[10px] font-black px-4 py-1 rounded-full mb-4 inline-block tracking-widest">{step.day}</div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>





      {/* Customer Testimonials Section */}
      <section id="reviews" className="py-24 md:py-32 bg-muted/30 pb-32 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-4 leading-tight">Real Results.<br className="md:hidden" /> Real People.</h2>
            <p className="text-lg md:text-xl text-muted-foreground italic">Join over 10,000+ happy customers on their wellness journey.</p>
          </div>

          <div className="testimonials-slider w-full">
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
                  className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm flex flex-col justify-between h-[400px]"
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
      {/* FAQ Section */}
      <section className="py-32 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-black text-primary tracking-tighter uppercase font-heading mb-4">FAQ</h2>
               <p className="text-lg text-muted-foreground italic leading-tight">Everything you need to know about <br /> Ruchi Veda Moringa.</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "How many capsules should I take daily?", a: "We recommend taking 1-2 capsules daily with water, preferably in the morning to fuel your day's energy." },
                { q: "Is Ruchi Veda Moringa 100% natural?", a: "Yes. Our Moringa is 100% pure, sun-dried leaves with zero fillers, chemicals, or synthetic additives. It's farm-grown in Western India." },
                { q: "Is it safe for long-term use?", a: "Moringa is a nutrient-dense whole food. It is generally safe for daily, long-term consumption as a natural multivitamin." },
                { q: "How is it dried?", a: "We use traditional sun and air drying methods. This preserves heat-sensitive vitamins and enzymes that are often lost in industrial heat drying." }
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-2xl overflow-hidden bg-white hover:border-primary/20 transition-all">
                   <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     className="w-full px-8 py-6 flex items-center justify-between text-left"
                   >
                      <span className="font-black text-xs uppercase tracking-widest text-primary">{item.q}</span>
                      <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                         <ChevronDown className="w-4 h-4 text-primary" />
                      </div>
                   </button>
                   <AnimatePresence>
                     {openFaq === i && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="px-8 pb-8"
                       >
                         <p className="text-muted-foreground text-sm leading-relaxed italic border-t border-border pt-6">{item.a}</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}
            </div>
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

      {/* Reel Popup Modal */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedReel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedReel(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <video 
                src={selectedReel.video}
                autoPlay 
                controls
                loop 
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 z-50">
                <button 
                  onClick={() => window.open(selectedReel.url, '_blank')}
                  className="w-full h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center gap-3 text-white font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  View Original on Instagram
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}