import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Users, Instagram, ArrowLeft } from 'lucide-react'

const tracks = [
  {
    icon: Music,
    title: 'אירועי תנועה',
    description: 'מרחב נשי שמחבר לגוף, משחרר אנרגיה ופותח את הלב דרך תנועה, מוסיקה, רגש וריפוי.',
    category: 'מסלול 2',
  },
  {
    icon: Users,
    title: 'קהילה של נשים',
    description: 'תמיכה, השראה, מסרים ומרחב נשי בטוח. מקום שמחבר נשים לעצמן ולדרך שלי.',
    category: 'מסלול 3',
  },
]

export default function Workshops() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="workshops" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            מסלולים 2 & 3
          </span>
          <h2 className="section-title mt-2">קהילה ואירועים</h2>
          <p className="section-subtitle">
            הצטרפי לקהילה נשית תומכת וגלי את הכוח של חוויות משותפות.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-gradient-to-br from-lilac-50 to-white rounded-2xl border border-lilac-100 p-8 hover:shadow-xl hover:border-lilac-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-lilac-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lilac-200 transition-colors">
                <track.icon size={32} className="text-lilac-500" />
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-lilac-200/50 text-lilac-600 text-xs font-medium rounded-full mb-4">
                {track.category}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-lilac-500 transition-colors">
                {track.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-lilac-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              קבלי עדכונים על אירועי קהילה נשיים, סדנאות ועוד.
            </p>
            <a
              href="https://instagram.com/betterher__together"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Instagram size={20} />
              @betterher__together
              <ArrowLeft size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
