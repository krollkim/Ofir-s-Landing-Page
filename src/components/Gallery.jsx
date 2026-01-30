import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import galleryData from '../content/gallery.json'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = galleryData.images || []

  return (
    <section id="gallery" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            גלריה
          </span>
          <h2 className="section-title mt-2">רגעים מהדרך</h2>
          <p className="section-subtitle">
            הצצה לאירועים, סדנאות והקהילה המדהימה שבנינו יחד.
          </p>
        </motion.div>

        {images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[180px]">
            {images.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">אין תמונות בגלריה</p>
        )}
      </div>
    </section>
  )
}
