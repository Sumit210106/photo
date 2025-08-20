import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function VideoHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="/laser-cutting-metal-industrial.png"
      >
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="font-sans font-light text-5xl md:text-6xl mb-8 leading-tight tracking-tight">
          Precision Laser
          <span className="block font-medium">Solutions</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
          Advanced laser technology for manufacturing, medical, and research applications
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium">
            Explore Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium bg-transparent backdrop-blur-sm"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
