import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Industrial Cutting",
    description: "High-precision laser cutting systems for metal, plastic, and composite materials",
    image: "/industrial-laser-cutter.png",
    subcategories: ["Metal Cutting", "Plastic Processing", "Composite Materials"],
  },
  {
    title: "Medical Lasers",
    description: "Advanced laser systems for surgical procedures and medical treatments",
    image: "/medical-laser-equipment.png",
    subcategories: ["Surgical Lasers", "Therapeutic Systems", "Diagnostic Tools"],
  },
  {
    title: "Research & Development",
    description: "Specialized laser systems for scientific research and development applications",
    image: "/research-laser-laboratory.png",
    subcategories: ["Spectroscopy", "Material Analysis", "Quantum Research"],
  },
  {
    title: "Marking & Engraving",
    description: "Precision laser marking and engraving solutions for various industries",
    image: "/placeholder-wt6ap.png",
    subcategories: ["Product Marking", "Serial Numbers", "Decorative Engraving"],
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-sans font-light text-4xl md:text-5xl mb-6 text-gray-900 tracking-tight">
            Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive laser technology solutions across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-0 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-sans font-medium text-2xl mb-4 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">{category.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {category.subcategories.map((sub, subIndex) => (
                    <span
                      key={subIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-gray-900 hover:text-gray-700 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
