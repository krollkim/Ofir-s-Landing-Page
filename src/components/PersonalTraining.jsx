import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Sparkles, Shield, Sun, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'שחרור רגשי',
    description: 'תהליך עדין לשחרור עומסים רגשיים שמשפיעים על החיים שלך.',
  },
  {
    icon: Shield,
    title: 'בניית ביטחון',
    description: 'חיזוק הביטחון העצמי והאמונה ביכולות שלך.',
  },
  {
    icon: Sun,
    title: 'שקט פנימי',
    description: 'למצוא את הרוגע והשלווה מבפנים, גם בתקופות מאתגרות.',
  },
  {
    icon: Sparkles,
    title: 'חיבור לעצמך',
    description: 'להכיר את עצמך באמת ולחיות בעוצמה מלאה.',
  },
]

const includes = [
  'שיחת היכרות והתאמה',
  'תהליך אישי ומותאם',
  'ליווי צמוד לאורך הדרך',
  'כלים מעשיים ליום יום',
  'מרחב בטוח ומקבל',
  'גמישות בזמנים',
]

export default function PersonalTraining() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="training" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            מסלול 1
          </span>
          <h2 className="section-title mt-2">אימון אישי לנשים</h2>
          <p className="section-subtitle">
            תהליך אישי, עדין ומעמיק לשחרור רגשי, בניית בטחון, הצבת מטרה, ויצירת שקט פנימי.
            אני מלווה נשים בשלבי שינוי, לחיבור לעצמן ולחיים בעוצמה.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-lilac-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-lilac-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Package Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-lilac-100"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">תהליך אימון אישי</h3>
              <p className="text-gray-500 text-sm">מרחב בטוח לצמיחה אישית</p>
            </div>

            <div className="border-t border-gray-100 pt-6 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-4">מה כולל התהליך:</p>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle size={18} className="text-lilac-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="btn-primary w-full block text-center"
            >
              קבעי שיחת התאמה
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
