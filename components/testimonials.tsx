"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    company: "MedTech Solutions",
    image: "/professional-woman-doctor.png",
    content:
      "The precision and reliability of Laser Technologies equipment has revolutionized our surgical procedures. Their support team is exceptional.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    title: "Manufacturing Director",
    company: "Aerospace Dynamics",
    image: "/professional-engineer.png",
    content:
      "We have been using their industrial cutting systems for over 5 years. The quality and efficiency improvements are remarkable.",
    rating: 5,
  },
  {
    name: "Prof. James Wilson",
    title: "Research Director",
    company: "Advanced Materials Institute",
    image: "/professional-professor-scientist.png",
    content:
      "Their research-grade laser systems have enabled breakthrough discoveries in our materials science laboratory.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Trusted by industry leaders worldwide</p>
        </div>

        <div className="relative">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-card-foreground mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg text-card-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                  <div className="text-primary font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
