import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSmoothScroll, scrollTo } from '../hooks/useSmoothScroll';

const packages = [
  {
    name: 'GOLD',
    price: '₹4,999',
    features: [
      'Private screening for 2',
      'Comfortable seating',
      'Basic snacks & popcorn',
      'Romantic lighting setup',
      '2 soft drinks'
    ]
  },
  {
    name: 'DIAMOND',
    price: '₹7,999',
    features: [
      'Private screening for 2',
      'Premium recliner seating',
      'Gourmet snacks & popcorn',
      'Enhanced romantic ambiance',
      'Mocktails & beverages',
      'Personalized service'
    ]
  },
  {
    name: 'PLATINUM',
    price: '₹12,999',
    features: [
      'Private screening for 2',
      'Luxury suite seating',
      'Premium dining experience',
      'Exclusive romantic decor',
      'Premium beverages',
      'Butler service',
      'Complimentary photos'
    ]
  }
];

const testimonials = [
  {
    name: "Sarah & John",
    text: "The perfect anniversary celebration! The Platinum package exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3"
  },
  {
    name: "Mike & Rachel",
    text: "An unforgettable proposal night. The staff went above and beyond to make it special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522264174835-0b4c1ae76541?ixlib=rb-4.0.3"
  },
  {
    name: "David & Emma",
    text: "The Diamond package was perfect for our date night. Amazing experience!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3"
  }
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 1 week in advance to ensure availability, especially for weekend slots."
  },
  {
    question: "Can I bring my own movie?",
    answer: "Yes! You can bring your own movie or choose from our extensive collection."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Full refund if cancelled 48 hours before the scheduled time."
  },
  {
    question: "Can I bring additional guests?",
    answer: "Yes, additional guests can be accommodated with a surcharge. Please contact us for details."
  }
];

const Home = () => {
  useSmoothScroll();
  const [openFaq, setOpenFaq] = React.useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.section-bg, .animated-card').forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / element.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / element.offsetHeight) * 100;
        element.style.setProperty('--mouse-x', `${x}%`);
        element.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToPackages = (e) => {
    e.preventDefault();
    scrollTo('#packages');
  };

  const experiences = [
    {
      title: "IMAX Experience",
      description: "Immerse yourself in crystal-clear images and precision audio",
      image: "/images/imax.jpg",
      features: ["Giant Screen", "3D Capability", "Premium Sound"]
    },
    {
      title: "Luxury Suite",
      description: "Private viewing room with premium amenities",
      image: "/images/luxury.jpg",
      features: ["Recliner Seats", "Personal Butler", "Gourmet Menu"]
    },
    {
      title: "Classic Theater",
      description: "Traditional cinema experience with modern comfort",
      image: "/images/classic.jpg",
      features: ["Large Screen", "Surround Sound", "Comfortable Seating"]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Experience",
      description: "Select from our range of premium viewing experiences tailored to your preferences.",
      icon: "🎬"
    },
    {
      number: "02",
      title: "Pick Your Movie",
      description: "Browse our extensive collection of latest releases and timeless classics.",
      icon: "🎥"
    },
    {
      number: "03",
      title: "Select Date & Time",
      description: "Schedule your private screening at your convenience.",
      icon: "📅"
    },
    {
      number: "04",
      title: "Enjoy Your Show",
      description: "Sit back, relax, and immerse yourself in the ultimate cinema experience.",
      icon: "✨"
    }
  ];

  return (
    <div className="animated-gradient">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-[#0A0B1E]" />
          <img 
            src="/hero-bg.jpg" 
            alt="Movie Theater" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3';
            }}
          />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="heading-1 mb-6 text-white">
            Experience Cinema Like Never Before
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Create unforgettable moments with our private movie screenings.
            Perfect for date nights, proposals, and special occasions.
          </p>
          <button 
            onClick={handleScrollToPackages} 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
          >
            Explore Packages
          </button>
        </div>
        <button
          onClick={handleScrollToPackages}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <svg
            className="w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-[#0A0B1E]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E]/90 to-[#12133B]/90" />
        </div>
        <div className="container relative z-10">
          <h2 className="heading-2 text-center mb-16 text-white">Why Choose Digital Diaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Premium Experience</h3>
              <p className="text-indigo-200">State-of-the-art screens and sound systems for an immersive experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Complete Privacy</h3>
              <p className="text-indigo-200">Your own private theater for an intimate movie experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Luxury Amenities</h3>
              <p className="text-indigo-200">Gourmet dining and premium services for a complete experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="relative py-20 bg-[#0A0B1E]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#12133B]/90 to-[#0A0B1E]/90" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Experiences</h2>
            <p className="text-neutral-400 text-lg">
              Discover our premium screening packages designed for the ultimate movie experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="animated-card"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
                  <div className="w-full h-full bg-blue-950"></div>
                </div>
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-neutral-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-neutral-300">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 bg-[#0A0B1E]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E]/90 to-[#12133B]/90" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-neutral-400 text-lg">
              Book your private screening in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="animated-card"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-blue-400 font-mono mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative py-20 bg-[#0A0B1E]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#12133B]/90 to-[#0A0B1E]/90" />
        </div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Choose Your Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="animated-card p-8"
              >
                <h3 className="text-2xl font-bold text-center mb-4">{pkg.name}</h3>
                <p className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-300">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    to="/booking"
                    className="btn-primary"
                  >
                    Select Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-[#0A0B1E]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E]/90 to-[#12133B]/90" />
        </div>
        <div className="container relative z-10">
          <h2 className="heading-2 text-center mb-16 text-white">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12133B] p-6 rounded-xl shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <div className="flex text-amber-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-indigo-200 italic">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-[#0A0B1E]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#12133B]/90 to-[#0A0B1E]/90" />
        </div>
        <div className="container relative z-10">
          <h2 className="heading-2 text-center mb-16 text-white">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-indigo-900 rounded-lg overflow-hidden hover:border-indigo-700 transition-colors">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-[#1A1B4B] transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-[#1A1B4B]/50">
                    <p className="text-indigo-200">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0A0B1E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E]/90 to-[#12133B]/90" />
          <img 
            src="/cta-bg.jpg" 
            alt="Cinema Experience" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3';
            }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="heading-2 mb-8 text-white">Ready for an Unforgettable Movie Experience?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Book your private screening today and create memories that will last a lifetime.
          </p>
          <Link
            to="/booking"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25 inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
