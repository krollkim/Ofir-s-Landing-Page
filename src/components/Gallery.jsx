import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const images = [
  {
    src: '/images/IMG_9751.JPG.jpeg',
    alt: 'אירוע תנועה קבוצתי',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/IMG_9845.JPG.jpeg',
    alt: 'סדנת יוגה',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/IMG_1418.PNG',
    alt: 'תנועה חופשית',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/IMG_2455.JPG.jpeg',
    alt: 'ליווי אישי',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/IMG_2087.JPG.jpeg',
    alt: 'מדיטציה',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/IMG_2440.JPG.jpeg',
    alt: 'מרחב נשי',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/IMG_1419.PNG',
    alt: 'רוגע ושלווה',
    span: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[180px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`${image.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${image.fit || 'object-cover'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
