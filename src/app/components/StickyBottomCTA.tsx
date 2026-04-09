import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface StickyBottomCTAProps {
  show: boolean;
  onBuyClick: () => void;
  onWhatsAppClick: () => void;
}

export function StickyBottomCTA({ show, onBuyClick, onWhatsAppClick }: StickyBottomCTAProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe"
        >
          {/* Main Glass Container */}
          <div className="mx-2 mb-2 p-3 rounded-[2rem] glass-card premium-shadow">
            {/* Promo Header */}
            <div className="flex items-center justify-center gap-2 mb-3 bg-secondary/10 py-1 rounded-full border border-secondary/20">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
                Special Offer: Save 33% Today
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onWhatsAppClick}
                className="flex-[0.4] bg-white border border-border text-foreground h-14 rounded-2xl flex items-center justify-center gap-2 transition-all font-semibold text-sm active:bg-muted"
              >
                <div className="bg-emerald-100 p-1.5 rounded-lg">
                   <MessageCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <span>Chat</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onBuyClick}
                className="flex-1 bg-[#FFD814] hover:bg-[#F7CA00] text-black h-14 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold text-sm shadow-xl active:opacity-90"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                  alt="Amazon" 
                  className="h-4 mt-0.5" 
                />
                <span>Buy on Amazon</span>
              </motion.button>
            </div>

            {/* Footer Metrics */}
            <div className="mt-3 flex items-center justify-center gap-4 border-t border-border pt-2 pb-1">
               <div className="flex items-center gap-1">
                 <ShieldCheck className="w-3 h-3 text-emerald-600" />
                 <span className="text-[9px] font-medium text-muted-foreground">Certified Pure</span>
               </div>
               <div className="w-1 h-1 bg-border rounded-full" />
               <div className="flex items-center gap-1">
                 <span className="text-[9px] font-medium text-muted-foreground">Free Express Delivery</span>
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

