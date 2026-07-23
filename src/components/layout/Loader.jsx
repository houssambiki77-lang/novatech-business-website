import { motion, AnimatePresence } from 'framer-motion'
import logoFull from '../../assets/logo-full.png'

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-navy-900"
        >
          <motion.img
            src={logoFull}
            alt="NovaTech Solutions"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-10 w-auto drop-shadow-[0_0_30px_rgba(124,58,237,0.45)] sm:h-12"
          />
          <div className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-1/2 rounded-full bg-accent-gradient"
              animate={{ x: ['-100%', '220%'] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-400">Loading experience</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
