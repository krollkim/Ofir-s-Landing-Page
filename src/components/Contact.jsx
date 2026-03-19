import { useRef } from 'react'
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const PHONE_NUMBER = '972502507066'
const WHATSAPP_MESSAGE = 'היי אופיר! הגעתי מהאתר ואשמח לשמוע עוד על התהליכים שלך 💜'

export default function Contact() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardRef = useRef(null)

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: 'top 80%', once: true, invalidateOnRefresh: true }

    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )

    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out', force3D: true, scrollTrigger: trigger }
    )
  }, [])

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            צרי קשר
          </span>
          <h2 className="section-title mt-2">בואי נדבר</h2>
          <p className="section-subtitle">
            מוכנה להתחיל את המסע שלך? אני כאן בשבילך.
          </p>
        </div>

        {/* Contact Card */}
        <div
          ref={cardRef}
          className="max-w-2xl mx-auto"
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Phone */}
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="flex items-center gap-4 p-4 bg-lilac-50 rounded-2xl hover:bg-lilac-100 transition-colors group"
              >
                <div className="w-14 h-14 bg-lilac-200 rounded-xl flex items-center justify-center group-hover:bg-lilac-300 transition-colors">
                  <Phone size={24} className="text-lilac-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">טלפון</p>
                  <p className="text-sm text-gray-500">050-250-7066</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:Ofirblayerwork@gmail.com"
                className="flex items-center gap-4 p-4 bg-lilac-50 rounded-2xl hover:bg-lilac-100 transition-colors group"
              >
                <div className="w-14 h-14 bg-lilac-200 rounded-xl flex items-center justify-center group-hover:bg-lilac-300 transition-colors">
                  <Mail size={24} className="text-lilac-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">אימייל</p>
                  <p className="text-sm text-gray-500 break-all">Ofirblayerwork@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/betterher__together"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-colors">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">אינסטגרם</p>
                  <p className="text-sm text-gray-500">@betterher__together</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-gray-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">מיקום</p>
                  <p className="text-sm text-gray-500">תל אביב - ישראל</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-8"></div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-500 mb-4">
                הדרך הכי מהירה ליצור קשר
              </p>
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lilac-300 text-gray-800 font-medium rounded-full hover:bg-lilac-400 transition-colors shadow-lg shadow-lilac-300/30"
              >
                <MessageCircle size={22} />
                שלחי הודעה בוואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
