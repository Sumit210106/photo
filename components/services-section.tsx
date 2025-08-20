import { Zap, Factory, Heart, Microscope, Settings, Shield } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Factory,
      title: "Industrial Cutting",
      description:
        "Precision laser cutting for metals, plastics, and composites with exceptional accuracy and clean edges.",
      image: "/images/laser-cutting.png",
    },
    {
      icon: Zap,
      title: "Laser Welding",
      description:
        "Advanced welding solutions for automotive, aerospace, and manufacturing industries with superior joint quality.",
      image: "/images/laser-welding.png",
    },
    {
      icon: Heart,
      title: "Medical Applications",
      description: "Specialized laser systems for surgical procedures, diagnostics, and medical device manufacturing.",
      image: "/images/medical-laser.png",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">WHAT WE DO</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Full-Spectrum
            <br />
            Laser Technology Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <Settings className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Custom Solutions</h4>
            <p className="text-sm text-gray-600">Tailored laser systems designed for your specific requirements</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-sm text-gray-600">Rigorous testing and certification for all laser applications</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <Microscope className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">R&D Support</h4>
            <p className="text-sm text-gray-600">Research and development partnerships for innovative solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
