export default function Education() {
  const degrees = [
    {
      type: "Major",
      name: "B.S. Mathematical Computer Science",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-600",
      courses: [
        "Linear Algebra",
        "Java & C Programming",
        "Machine Learning",
        "Statistical Inference",
        "System Programming",
        "Software Tools",
        "Computational Theory",
        "Numerical Analysis",
        "Probabilistic Models",
      ],
    },
    {
      type: "Minor",
      name: "Data Science Minor",
      color: "from-yellow-400 to-yellow-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      badgeColor: "bg-yellow-400",
      courses: [
        "Data Modeling",
        "Python & Pandas",
        "Data Science in Practice",
        "Statistical Methods",
        "Data Structures and Algorithms",
        "Data Visualization",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
      data-section="education"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Education
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* University Intro */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-400 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                University of California, San&nbsp;Diego
              </h3>
              <p className="text-lg text-white text-opacity-95 leading-relaxed max-w-3xl whitespace-nowrap">
                Earned a{" "}
                <span className="font-semibold">
                  B.S. in Mathematical Computer Science
                </span>{" "}
                and a{" "}
                <span className="font-semibold">minor in Data Science</span>{" "}
                from UC San&nbsp;Diego.
              </p>
            </div>
          </div>

          {/* Degrees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degrees.map((degree, idx) => (
              <div key={idx} className="relative group">
                {/* Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col h-full">
                  {/* Colored Header */}
                  <div
                    className={`bg-gradient-to-r ${degree.color} p-6 sm:p-8 relative overflow-hidden`}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-white opacity-90">
                          {degree.type}
                        </span>
                        <div className="h-0.5 flex-1 bg-white opacity-30"></div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {degree.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                        Relevant Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {degree.courses.map((course, courseIdx) => (
                          <span
                            key={courseIdx}
                            className={`${degree.bgColor} ${degree.textColor} px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-md transition transform hover:scale-105`}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
