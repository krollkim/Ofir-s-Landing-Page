import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'בית', href: '#home' },
  { name: 'נעים להכיר', href: '#about' },
  { name: 'אימון אישי', href: '#training' },
  { name: 'סדנאות', href: '#workshops' },
  { name: 'גלריה', href: '#gallery' },
  { name: 'צור קשר', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-2xl text-gray-800" style={{ fontFamily: '"Segoe Script", "Savoye LET", "Brush Script MT", cursive' }}>
            Better Together
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-lilac-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              בואי נדבר
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-600 hover:text-lilac-400 hover:bg-lilac-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a href="#contact" className="btn-primary block text-center text-sm">
                בואי נדבר
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
