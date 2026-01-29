import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: "Working with Ofir has been transformative. Not only have I achieved my fitness goals, but I've also developed a healthier mindset. The personalized approach makes all the difference.",
  },
  {
    name: 'David Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: "As someone who struggled with consistency, Ofir's coaching has been a game-changer. The flexible scheduling and constant support helped me build lasting habits.",
  },
  {
    name: 'Emma Thompson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: "The workshops are incredible! I've learned so much about nutrition and wellness. Ofir creates such a welcoming environment where everyone feels supported.",
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lilac-400 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="section-title mt-2">What Clients Say</h2>
          <p className="section-subtitle">
            Real stories from real people who have transformed their lives through
            our programs.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-slate-50 rounded-2xl p-8 relative"
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-lilac-200"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-lilac-400 text-lilac-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{review.text}</p>

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-2xl p-6 relative"
          >
            <Quote
              size={32}
              className="absolute top-4 right-4 text-lilac-200"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-lilac-400 text-lilac-400"
                />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {reviews[activeIndex].text}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={reviews[activeIndex].image}
                alt={reviews[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {reviews[activeIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {reviews[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-lilac-100 text-lilac-500 hover:bg-lilac-200 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-lilac-400' : 'bg-lilac-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-lilac-100 text-lilac-500 hover:bg-lilac-200 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
