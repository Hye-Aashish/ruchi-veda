import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card rounded-3xl px-10 py-8 min-w-[140px] border border-white/40 premium-shadow text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-6xl font-black text-primary relative z-10"
          >
            {String(value).padStart(2, '0')}
          </motion.div>
        </AnimatePresence>
        
        <div className="text-[10px] font-black text-emerald-800/60 mt-3 uppercase tracking-[0.2em] relative z-10">
          {label}
        </div>
      </motion.div>

      {/* Pulsing indicator */}
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
      </div>
    </div>
  );

  return (
    <div className="flex gap-8 justify-center flex-wrap py-4">
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <div className="hidden sm:flex items-center text-5xl font-light text-primary/20">:</div>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <div className="hidden sm:flex items-center text-5xl font-light text-primary/20">:</div>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

