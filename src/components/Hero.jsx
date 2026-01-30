import { motion } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'
import settings from '../content/settings.json'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-lilac-50" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-lilac-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-lilac-100/40 rounded-full blur-3xl" />

      {/* Abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-lilac-300 rounded-full opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-lilac-400 rounded-full opacity-40" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-lilac-200 rounded-full opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lilac-100/60 rounded-full mb-8">
            <Heart size={16} className="text-lilac-500" />
            <span className="text-sm text-gray-600 font-medium">מרחב נשי לצמיחה</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            {settings.hero_title_start}
            <span className="block text-lilac-400">{settings.hero_title_highlight}</span>
          </h1>

          <p className="text-base text-gray-400 mb-8">— Maya Angelou</p>

          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            {settings.hero_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base"
            >
              קבעי שיחת התאמה
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base"
            >
              נעים להכיר
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-gray-400 hover:text-lilac-400 transition-colors"
          >
            <span className="text-xs mb-2">גללי למטה</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
