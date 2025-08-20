const stats = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successful laser technology implementations worldwide",
  },
  {
    number: "25+",
    label: "Years Experience",
    description: "Leading the industry in laser technology innovation",
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    description: "Consistently exceeding client expectations",
  },
  {
    number: "50+",
    label: "Countries Served",
    description: "Global reach with local expertise",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Trusted Worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence reflected in numbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{stat.number}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{stat.label}</h3>
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
