"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="font-bold text-2xl text-gray-900">LaserTech</div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Contact
              </a>
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-2 rounded-full font-semibold">
                GET IN TOUCH
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-6 pt-4 pb-6 space-y-4 bg-white border-t border-gray-100">
              <a href="#home" className="block py-2 text-gray-600 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900 font-medium">
                About
              </a>
              <a href="#services" className="block py-2 text-gray-600 hover:text-gray-900 font-medium">
                Services
              </a>
              <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900 font-medium">
                Projects
              </a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </a>
              <Button className="w-full mt-4 bg-lime-400 hover:bg-lime-500 text-gray-900 rounded-full font-semibold">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
