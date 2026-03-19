import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import galleryData from '../content/gallery.json'

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const imageRefs = useRef([])

  const images = galleryData.images || []

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: 'top 80%', once: true, invalidateOnRefresh: true }

    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )

    if (imageRefs.current.length > 0) {
      gsap.fromTo(imageRefs.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', force3D: true,
          stagger: 0.1,
          scrollTrigger: trigger,
        }
      )
    }
  }, [images.length])

  return (
    <section id="gallery" className="py-20 md:py-32 bg-slate-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            גלריה
          </span>
          <h2 className="section-title mt-2">רגעים מהדרך</h2>
          <p className="section-subtitle">
            הצצה לאירועים, סדנאות והקהילה המדהימה שבנינו יחד.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[180px]">
            {images.map((item, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
                style={{ opacity: 0, willChange: 'transform, opacity' }}
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
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">אין תמונות בגלריה</p>
        )}
      </div>
    </section>
  )
}
