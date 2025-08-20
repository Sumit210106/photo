"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/woman-natural-light-portrait.png",
    alt: "Portrait Photography",
    category: "Portraits",
  },
  {
    id: 2,
    src: "/wedding-ceremony-joy.png",
    alt: "Wedding Photography",
    category: "Weddings",
  },
  {
    id: 3,
    src: "/family-park-fun.png",
    alt: "Lifestyle Photography",
    category: "Lifestyle",
  },
  {
    id: 4,
    src: "/fashion-model-studio.png",
    alt: "Fashion Photography",
    category: "Fashion",
  },
  {
    id: 5,
    src: "/golden-hour-mountain-landscape.png",
    alt: "Landscape Photography",
    category: "Landscape",
  },
  {
    id: 6,
    src: "/urban-candid.png",
    alt: "Street Photography",
    category: "Street",
  },
  {
    id: 7,
    src: "/dramatic-man-portrait.png",
    alt: "Portrait Photography",
    category: "Portraits",
  },
  {
    id: 8,
    src: "/celebration-party.png",
    alt: "Event Photography",
    category: "Events",
  },
  {
    id: 9,
    src: "/wildlife-bird-closeup.png",
    alt: "Nature Photography",
    category: "Nature",
  },
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(galleryImages[newIndex].id)
  }

  const currentImage = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my favorite moments captured through the lens. Each image tells a unique story.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index % 3 === 0 ? "md:row-span-2" : ""
              }`}
              onClick={() => openModal(image.id)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="text-sm font-medium mb-1">{image.category}</p>
                  <p className="text-xs text-white/80">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/95 border-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              {currentImage && (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img
                    src={currentImage.src || "/placeholder.svg"}
                    alt={currentImage.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}

              {/* Image Info */}
              {currentImage && (
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{currentImage.category}</p>
                  <p className="text-xs text-white/80">{currentImage.alt}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
