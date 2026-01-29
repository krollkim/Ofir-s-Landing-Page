import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'לשחרר עומס רגשי',
  'לאהוב את הגוף ולהרגיש בנוח עם עצמן',
  'להתחבר לעצמן באמת',
  'למצוא שקט ונשימה',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
              נעים להכיר
            </span>
            <h2 className="section-title mt-2">
              אני אופיר
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              נעים להכיר, אני אופיר. אני מלווה נשים בתהליכי ריפוי רגשי ומנטלי,
              ויוצרת אירועי תנועה וריקוד שמשחררים את הגוף והנשמה.
            </p>
            
            <p className="text-lilac-500 font-medium mb-8">
              Personal Coaching & Soulful Events for Women 💖
            </p>

            {/* Benefits List */}
            <div className="bg-lilac-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">למה נשים צריכות אותי?</h3>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle size={20} className="text-lilac-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="btn-primary inline-block">
              קבעי שיחת התאמה
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-lilac-100">
              <img
                src="/images/heroimage.PNG"
                alt="אופיר - מאמנת מנטלית"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lilac-300/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6"
            >
              <p className="text-3xl md:text-4xl font-bold text-lilac-400">💜</p>
              <p className="text-gray-500 text-sm">מרחב נשי בטוח</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
