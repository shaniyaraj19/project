import React from "react"
import { Zap, Settings2, Sparkles } from "lucide-react"

export default function Features2() {
  return (
    <section className="py-16 md:py-32 bg-black text-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl text-white">
            Built to cover your needs
          </h2>
          <p className="mt-4 text-gray-400">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Customizable"
            description="Extensive customization options, allowing you to tailor every aspect to meet your specific needs."
          />
          <FeatureCard
            icon={<Settings2 className="w-6 h-6" />}
            title="You have full control"
            description="From design elements to functionality, you have complete control to create a unique experience."
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="Powered By AI"
            description="Elements to functionality, you have complete control to create a unique experience."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition duration-300 border border-white/10 shadow-lg">
      <div className="relative mx-auto mb-4 w-24 h-24 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
