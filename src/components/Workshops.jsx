import { useRef } from 'react'
import { Music, Users, Heart, Star, Instagram, ArrowLeft } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import eventsData from '../content/events.json'

gsap.registerPlugin(ScrollTrigger)

const iconMap = { Music, Users, Heart, Star }

const categoryLabels = {
  Movement: 'מסלול 2',
  Community: 'מסלול 3',
  Wellness: 'בריאות',
  Fitness: 'כושר',
}

export default function Workshops() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const trackRefs = useRef([])
  const ctaRef = useRef(null)

  const tracks = eventsData.events_list.map((event) => ({
    icon: iconMap[event.icon] || Music,
    title: event.title,
    description: event.description,
    category: categoryLabels[event.category] || event.category,
  }))

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: 'top 80%', once: true, invalidateOnRefresh: true }

    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )

    gsap.fromTo(trackRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true,
        stagger: 0.1,
        delay: 0.1,
        scrollTrigger: trigger,
      }
    )

    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )
  }, [])

  return (
    <section id="workshops" className="py-20 md:py-32 bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            מסלולים 2 & 3
          </span>
          <h2 className="section-title mt-2">קהילה ואירועים</h2>
          <p className="section-subtitle">
            הצטרפי לקהילה נשית תומכת וגלי את הכוח של חוויות משותפות.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              ref={(el) => (trackRefs.current[index] = el)}
              className="group bg-gradient-to-br from-lilac-50 to-white rounded-2xl border border-lilac-100 p-8 hover:shadow-xl hover:border-lilac-200 transition-all duration-300"
              style={{ opacity: 0, willChange: 'transform, opacity' }}
            >
              <div className="w-16 h-16 bg-lilac-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lilac-200 transition-colors">
                <track.icon size={32} className="text-lilac-500" />
              </div>

              <span className="inline-block px-3 py-1 bg-lilac-200/50 text-lilac-600 text-xs font-medium rounded-full mb-4">
                {track.category}
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-lilac-500 transition-colors">
                {track.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className="mt-16 text-center"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
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
        </div>
      </div>
    </section>
  )
}
