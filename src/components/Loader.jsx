import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ duration = 2.5 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  // Spinner chỉ xoay
  const spinnerVariants = {
    animate: { rotate: 360, transition: { repeat: Infinity, duration: 1, ease: 'linear' } },
    exit: { opacity: 0, rotate: 720, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={false} // bỏ fade in
          exit={{ opacity: 0, transition: { duration: 0.8 } }} // exit fade out
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            variants={spinnerVariants}
            animate="animate"
            exit="exit"
          ></motion.div>
          {/* <motion.p
            className="mt-4 text-white text-lg font-semibold"
            initial={{ y: 20 }}
            animate={{ y: 0, transition: { delay: 0.3, duration: 0.6 } }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
          >
            Loading...
          </motion.p> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
