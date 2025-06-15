import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
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

      {/* About Hero */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Our <span className="text-purple-400">Mission</span>
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          QuitBet was created with a simple but powerful mission: to help people break free from gambling addiction and
          reclaim their lives.
        </p>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              QuitBet was founded in 2021 by a team of developers and recovery specialists who saw the need for better
              tools to help people overcome gambling addiction.
            </p>
            <p className="text-gray-300 mb-4">
              After witnessing firsthand the devastating impact gambling addiction can have on individuals and families,
              our founders were determined to create a solution that combines technology, community support, and proven
              recovery methods.
            </p>
            <p className="text-gray-300">
              Today, QuitBet has helped over 20,000 people on their journey to recovery, with users reporting
              significant improvements in their financial stability, mental health, and personal relationships.
            </p>
          </div>
          <div className="bg-[#0d0d1f] rounded-2xl p-6">
            <div className="relative h-[400px]">
              <Image src="/about-team.png" alt="QuitBet team" fill className="object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-4 py-16 bg-[#0d0d1f] rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ApproachCard
            title="Evidence-Based"
            description="Our app features are designed based on proven addiction recovery methods and behavioral science."
            icon="🧠"
          />
          <ApproachCard
            title="Community-Focused"
            description="We believe in the power of community support and shared experiences in the recovery journey."
            icon="👥"
          />
          <ApproachCard
            title="Holistic Recovery"
            description="We address all aspects of recovery, from tracking progress to providing educational resources."
            icon="⚕️"
          />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="20,000+" label="Active Users" />
          <StatCard number="$14M+" label="Money Saved" />
          <StatCard number="85%" label="Completion Rate" />
          <StatCard number="4.8/5" label="App Store Rating" />
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            name="Alex Johnson"
            role="Founder & CEO"
            bio="Former addiction counselor with 10+ years of experience in recovery programs."
          />
          <TeamMember
            name="Sarah Chen"
            role="Head of Product"
            bio="Product designer specializing in behavioral change applications."
          />
          <TeamMember
            name="Marcus Williams"
            role="Lead Developer"
            bio="Full-stack developer passionate about creating technology for social good."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our <span className="text-purple-400">Community</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Download QuitBet today and take the first step toward a gambling-free life.
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

function ApproachCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-[#12122a] p-6 rounded-2xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-purple-400 mb-2">{number}</p>
      <p className="text-gray-300">{label}</p>
    </div>
  )
}

function TeamMember({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="bg-[#0d0d1f] p-6 rounded-2xl">
      <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">👤</span>
      </div>
      <h3 className="text-xl font-bold text-center mb-1">{name}</h3>
      <p className="text-purple-400 text-center mb-4">{role}</p>
      <p className="text-gray-300 text-center">{bio}</p>
    </div>
  )
}
