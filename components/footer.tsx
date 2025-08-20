import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>hello@alexmorgan.photo</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>New York, NY</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent hover:bg-white/10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent hover:bg-white/10"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent hover:bg-white/10"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Send Message</h3>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">© 2024 Alex Morgan Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
