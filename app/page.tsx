import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ImageGallery } from "@/components/image-gallery"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ImageGallery />
      <Footer />
    </main>
  )
}
