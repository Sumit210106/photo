import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Laser Technology in Manufacturing",
    excerpt:
      "Exploring emerging trends and innovations that will shape the next decade of industrial laser applications.",
    image: "/placeholder.svg?height=200&width=350",
    author: "Dr. Emily Zhang",
    date: "March 15, 2024",
    category: "Industry Insights",
  },
  {
    title: "Precision Medicine: Laser Applications in Healthcare",
    excerpt: "How advanced laser systems are revolutionizing surgical procedures and medical treatments.",
    image: "/placeholder.svg?height=200&width=350",
    author: "Prof. Michael Chen",
    date: "March 10, 2024",
    category: "Medical Technology",
  },
  {
    title: "Sustainable Manufacturing with Laser Technology",
    excerpt: "Environmental benefits and energy efficiency improvements through modern laser systems.",
    image: "/placeholder.svg?height=200&width=350",
    author: "Sarah Johnson",
    date: "March 5, 2024",
    category: "Sustainability",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-foreground">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments in laser technology and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>

                <h3 className="font-playfair font-semibold text-xl mb-3 text-card-foreground leading-tight">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>

                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
