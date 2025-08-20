"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

const videos = [
  {
    title: "Industrial Laser Cutting Demo",
    description: "Watch our high-precision laser cutting system in action",
    thumbnail: "/laser-cutting-metal.png",
    duration: "3:45",
  },
  {
    title: "Medical Laser Applications",
    description: "Explore the use of laser technology in medical procedures",
    thumbnail: "/medical-laser-surgery.png",
    duration: "5:20",
  },
  {
    title: "Research Laboratory Tour",
    description: "Behind the scenes at our advanced research facility",
    thumbnail: "/laser-research-laboratory.png",
    duration: "7:15",
  },
  {
    title: "Laser Marking Solutions",
    description: "Precision marking and engraving capabilities showcase",
    thumbnail: "/laser-marking-engraving.png",
    duration: "4:30",
  },
  {
    title: "Customer Success Stories",
    description: "Real-world applications and customer testimonials",
    thumbnail: "/industrial-factory-success.png",
    duration: "6:10",
  },
  {
    title: "Innovation Showcase",
    description: "Latest developments in laser technology",
    thumbnail: "/laser-technology-innovation.png",
    duration: "8:25",
  },
]

export function VideoCatalog() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  return (
    <section id="videos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-foreground">Video Catalog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive video library showcasing laser technology applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    onClick={() => setSelectedVideo(index)}
                  >
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{video.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <video controls autoPlay className="w-full h-full" poster={videos[selectedVideo].thumbnail}>
                <source src="/placeholder.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
