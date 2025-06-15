import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <div className="min-h-screen bg-[#0a0a16] text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          </div>
          <span className="text-xl font-semibold text-purple-400">QuitBet</span>
        </Link>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">DOWNLOAD</Button>
      </header>

      {/* Features Hero */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          <span className="text-purple-400">Features</span> That Help You Quit
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          QuitBet provides all the tools you need to track your progress, stay motivated, and connect with others on the
          same journey.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="container mx-auto px-4 py-16">
        <FeatureSection
          title="Track Your Progress"
          description="Monitor your gambling-free days with our intuitive tracking system. Set goals, celebrate milestones, and visualize your journey to recovery."
          imageSrc="/feature-tracking.png"
          imageAlt="Progress tracking feature"
          reverse={false}
        />

        <FeatureSection
          title="Community Support"
          description="Connect with thousands of others who understand what you're going through. Share stories, offer encouragement, and build a network of support."
          imageSrc="/feature-community.png"
          imageAlt="Community support feature"
          reverse={true}
        />

        <FeatureSection
          title="Daily Challenges"
          description="Complete daily challenges designed to strengthen your resolve and build healthy habits. Earn rewards and track your accomplishments."
          imageSrc="/feature-challenges.png"
          imageAlt="Daily challenges feature"
          reverse={false}
        />

        <FeatureSection
          title="Recovery Resources"
          description="Access a library of articles, videos, and tools created by experts in addiction recovery. Learn strategies to overcome triggers and prevent relapse."
          imageSrc="/feature-resources.png"
          imageAlt="Recovery resources feature"
          reverse={true}
        />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-purple-400">Start Your Journey</span>?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Download QuitBet today and join thousands of others who have taken control of their lives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#" className="transition-transform hover:scale-105">
            <Image
              src="/app-store-badge.png"
              alt="Download on the App Store"
              width={170}
              height={56}
              className="h-14 w-auto"
            />
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={190}
              height={56}
              className="h-14 w-auto"
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-lg font-semibold text-purple-400">QuitBet</span>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              Contact
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} QuitBet. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
}: {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse: boolean
}) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center my-20`}>
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="flex-1 bg-[#0d0d1f] rounded-2xl p-4">
        <div className="relative h-[400px]">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}
