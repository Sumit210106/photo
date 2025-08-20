import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/laser-cutting.png"
                    alt="Laser Cutting Process"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/laser-welding.png"
                    alt="Laser Welding Process"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">ABOUT US</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Laser Technology Partner in Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At LaserTech, we're proud to serve industries worldwide with reliable, high-precision laser solutions.
              From custom manufacturing to medical applications, our expertise ensures every project exceeds
              expectations. We build with integrity, innovation, and a commitment to your vision.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">500+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">ISO 9001 & ISO 14001 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Expert Engineering Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">24/7 Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
