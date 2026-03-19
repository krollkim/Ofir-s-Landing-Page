import { useRef } from 'react'
import { Heart, Sparkles, Shield, Sun, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import settings from '../content/settings.json'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardRefs = useRef([])
  const packageRef = useRef(null)

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: 'top 80%', once: true, invalidateOnRefresh: true }

    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )

    gsap.fromTo(cardRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true,
        stagger: 0.1,
        delay: 0.2,
        scrollTrigger: trigger,
      }
    )

    gsap.fromTo(packageRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.4, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )
  }, [])

  return (
    <section id="training" className="py-20 md:py-32 bg-slate-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            {settings.training_title}
          </span>
          <h2 className="section-title mt-2">{settings.training_subtitle}</h2>
          <p className="section-subtitle">
            {settings.training_description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Benefits Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ opacity: 0, willChange: 'transform, opacity' }}
              >
                <div className="w-12 h-12 bg-lilac-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-lilac-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Package Card */}
          <div
            ref={packageRef}
            className="bg-white rounded-2xl p-8 shadow-sm border border-lilac-100"
            style={{ opacity: 0, willChange: 'transform, opacity' }}
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
          </div>
        </div>
      </div>
    </section>
  )
}
