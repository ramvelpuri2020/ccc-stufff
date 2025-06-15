"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Harley Johnson",
    university: "South Dakota State University",
    image: "/harley-johnson.jpeg",
    review:
      "CCC has been amazing so far. I've gotten plenty of great opportunities to expand my account and the ability to connect with others my age doing the same thing.",
  },
  {
    name: "Allison Gedeon",
    university: "Duquesne",
    image: "/allison-gedeon.jpeg",
    review:
      "CCC has provided many opportunities to get advice and tips on growing my platform! Every experience I've had with CCC management has been positive, and I have been welcomed with nothing but kindness. CCC has been a great outlet to add to my resume and open doors to brand opportunities, altogether teaching me more and more about social media and marketing.",
  },
  {
    name: "Emily Siano",
    university: "Florida Atlantic University",
    image: "/emily-siano.jpeg",
    review:
      "I've gotten to connect with so many new people who all have similar interests and goals as me which is an amazing experience. I also have now gotten two collabs with two really cool brands.",
  },
  {
    name: "MaryKate Richmond",
    university: "Miami University",
    image: "/marykate-richmond.jpeg",
    review: "Great opportunities and they have come in quick! You guys are so helpful and kind. I love it :)",
  },
  {
    name: "Katherine Leyden",
    university: "The University of Mississippi",
    image: "/katherine-leyden.jpeg",
    review:
      "The platform makes it easy to stay in the loop with new campaigns, and I genuinely feel encouraged and valued as a creator. It's been so refreshing to be surrounded by like-minded people who uplift and motivate one another, all while building our brands together. I'm so glad I found this space—it's helped open doors I didn't even know existed!",
  },
  {
    name: "Kaitlyn Cope",
    university: "Roberts Wesleyan University",
    image: "/kaitlyn-cope.jpeg",
    review:
      "I love being a part of CCC! I've already learned so much about content creation and seen growth in my accounts! I'm thankful for the opportunity to learn from creators like Abby Gendell! I think it's so cool that we get the chance to be featured on CCC's socials and make new friends along the way! I'm super excited about the brand deals coming up as well!",
  },
  {
    name: "Henley Barz",
    university: "Florida Gulf Coast University",
    image: "/henley-barz.jpeg",
    review:
      "Campus Creator Club is the real deal. It's not just tips and emails — it's a community of creators who actually support each other. I've learned more about content, landed opportunities, and grown my platform just by being part of it. If you're serious about creating, join CCC.",
  },
  {
    name: "Isabella Morreale",
    university: "Lynn University",
    image: "/isabella-morreale.jpeg",
    review:
      "It's really the most supportive group of people and so inspiring to see & help others with their journeys as well as the incredible opportunities that are presented to us with this club.",
  },
  {
    name: "Hannah McCabe",
    university: "San Jose State University",
    image: "/hannah-mccabe.jpeg",
    review:
      "I love the campus creator club! All the members are so supportive on my social media platforms, and the amount of opportunities offered from the CCC are amazing considering I've only been in it for about a month.",
  },
  {
    name: "Madison Tessar",
    university: "University of Tampa",
    image: "/madison-tessar.jpeg",
    review:
      "CCC has been a great resource for me to connect with other creators and be able to work with brands to promote content! I have been able to gain followers and connect with other people to learn how to grow my account to make my social image better! I would recommend CCC to anyone who is interested in becoming a (micro)influencer and wants to take the first steps into learning how to do so!",
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Adjusted padding for mobile */}
      <header className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Campus Creator Club" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-bold text-gray-900">Campus Creator Club</span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 font-semibold">DOWNLOAD</Button>
      </header>

      {/* Hero Section - Adjusted padding for mobile */}
      <main className="container mx-auto px-4 py-12 sm:py-20 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-center max-w-5xl leading-tight text-gray-900 mb-6 font-heading">
          Where College Creators{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Connect, Grow, and Earn
          </span>
        </h1>

        <p className="text-center text-gray-600 max-w-2xl text-lg sm:text-xl leading-relaxed mb-12 font-medium">
          Connect with college creators nationwide, access exclusive brand deals, and level up your content through
          webinars with top creators.
        </p>

        {/* App Store Buttons - Always side by side */}
        <div className="flex flex-row gap-4 sm:gap-6 mb-16 sm:mb-20 justify-center">
          <Link href="#" className="transition-transform hover:scale-105">
            <div className="bg-black border border-gray-600 rounded-xl px-4 sm:px-5 py-3 flex items-center gap-2 sm:gap-3">
              <div className="text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Download on the</div>
                <div className="text-base sm:text-xl font-semibold text-white">App Store</div>
              </div>
            </div>
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <div className="bg-black rounded-xl px-4 sm:px-5 py-3 flex items-center gap-2 sm:gap-3">
              <Image
                src="/google-play-black-bg.png"
                alt="Google Play"
                width={28}
                height={28}
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
              <div>
                <div className="text-xs text-gray-400 font-medium">GET IT ON</div>
                <div className="text-base sm:text-xl font-semibold text-white">Google Play</div>
              </div>
            </div>
          </Link>
        </div>

        {/* App Screenshots - Floating Animation with Fade */}
        <div className="w-full max-w-2xl px-4 mb-12 relative overflow-hidden h-96">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center items-start pt-4">
            <div className="flex justify-center items-center -space-x-12 animate-float">
              <div className="transform -rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
                <Image
                  src="/dashboard-screen.png"
                  alt="Dashboard Screen"
                  width={150}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform scale-110 transition-transform hover:scale-115 z-20">
                <Image
                  src="/community-screen.png"
                  alt="Community Screen"
                  width={150}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
                <Image
                  src="/campaigns-screen.png"
                  alt="Campaigns Screen"
                  width={150}
                  height={300}
                  className="w-auto h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout - Smaller */}
          <div className="md:hidden flex justify-center pt-4">
            <div className="flex justify-center items-center -space-x-8 animate-float">
              <div className="transform -rotate-6 scale-75 z-10">
                <Image
                  src="/dashboard-screen.png"
                  alt="Dashboard Screen"
                  width={120}
                  height={240}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform scale-90 z-20">
                <Image
                  src="/community-screen.png"
                  alt="Community Screen"
                  width={120}
                  height={240}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div className="transform rotate-6 scale-75 z-10">
                <Image
                  src="/campaigns-screen.png"
                  alt="Campaigns Screen"
                  width={120}
                  height={240}
                  className="w-auto h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Fade Overlay - Subtle bottom fade only */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30"></div>
        </div>

        {/* Testimonials Section */}
        <section className="w-full max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
              What Our <span className="text-blue-600">Creators</span> Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of college creators who are already growing their influence and earning through our
              platform.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-100">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 italic">
                          "{testimonial.review}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="font-bold text-xl text-gray-900 mb-1">{testimonial.name}</h3>
                          <p className="text-blue-600 font-medium">{testimonial.university}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Stats or CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Join over 10,000+ college creators already on Campus Creator Club</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-semibold">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
