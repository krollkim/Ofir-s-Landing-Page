import { Heart, Instagram, ArrowUp } from 'lucide-react'

const footerLinks = [
  { name: 'בית', href: '#home' },
  { name: 'נעים להכיר', href: '#about' },
  { name: 'אימון אישי', href: '#training' },
  { name: 'סדנאות', href: '#workshops' },
  { name: 'גלריה', href: '#gallery' },
  { name: 'צור קשר', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <a href="#home" className="text-2xl" style={{ fontFamily: '"Segoe Script", "Savoye LET", "Brush Script MT", cursive' }}>
                Better Together
              </a>
              <p className="mt-4 text-gray-400 leading-relaxed">
                מלווה נשים בתהליכי ריפוי רגשי ומנטלי, ויוצרת אירועי תנועה וריקוד
                שמשחררים את הגוף והנשמה.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-lilac-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">בואי נתחברי</h4>
              <p className="text-gray-400 mb-4">
                עקבי אחריי באינסטגרם לטיפים, השראה ועדכונים.
              </p>
              <a
                href="https://instagram.com/betterher__together"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lilac-300 transition-colors group inline-flex"
              >
                <Instagram
                  size={18}
                  className="text-gray-400 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} KIM KROLL. נעשה עם
            <Heart size={14} className="text-lilac-400 fill-lilac-400" />
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-lilac-300 transition-colors text-sm"
          >
            חזרה למעלה
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
