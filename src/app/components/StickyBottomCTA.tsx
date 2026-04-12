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
          {/* Main Glass Container - Slimmer version */}
          <div className="mx-2 mb-2 p-2 rounded-3xl glass-card premium-shadow border border-white/50 backdrop-blur-xl">
            {/* Actions */}
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onBuyClick}
                className="flex-1 bg-primary text-white h-14 rounded-2xl flex items-center justify-center gap-3 transition-all font-bold text-xs shadow-lg active:opacity-90"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                  alt="Amazon" 
                  className="h-4 mt-0.5 brightness-0 invert" 
                />
                <span className="tracking-widest uppercase font-black">BUY ON AMAZON</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

