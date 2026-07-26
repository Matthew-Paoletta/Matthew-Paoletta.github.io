import { ArrowDown, Code2, Zap, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-20 pb-12 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: Text Content - 2/5 columns */}
          <div className="md:col-span-2 space-y-8 order-2 md:order-1">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight whitespace-nowrap">
                Matthew <span className="text-green-600">Paoletta</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-green-600 font-semibold mt-4">
                Software Engineer & Problem Solver
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I build software that solves real problems. From developing a{" "}
              <span className="font-semibold">
                Chrome extension used by 150+ UC San Diego students
              </span>{" "}
              to{" "}
              <span className="font-semibold">
                building data-driven tools and predictive models
              </span>
              , I turn complex challenges into practical, measurable solutions
              through thoughtful application development and technical problem
              solving.
            </p>

            {/* Key Skills/Highlights */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-4 items-start">
                <Code2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Full-Stack Development
                  </p>
                  <p className="text-gray-600">JavaScript, Python, Java</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Zap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Problem Solving
                  </p>
                  <p className="text-gray-600">Data analysis & optimization</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Target className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Impact Driven
                  </p>
                  <p className="text-gray-600">Real-world solutions</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-medium text-center text-lg"
              >
                View My Work
              </a>
              <a
                href="https://github.com/Matthew-Paoletta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-300 transition font-medium text-center text-lg"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-paoletta-b13738299/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium text-center text-lg"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col gap-2 text-gray-600 pt-4">
              <p className="text-base">📧 matthew.paoletta73@gmail.com</p>
              <p className="text-base">📍 San Diego, CA</p>
            </div>
          </div>

          {/* Right: Photo with Background - 3/5 columns */}
          <div className="md:col-span-3 flex justify-center items-center order-1 md:order-2 relative h-full min-h-96 md:min-h-full">
            {/* Background gradient blob */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-40 absolute"></div>
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-96 h-96 sm:w-full sm:max-w-xl border-2 border-green-300 rounded-full opacity-30 absolute"></div>
              <div className="w-full max-w-2xl h-96 sm:h-full border-2 border-blue-300 rounded-full opacity-20 absolute"></div>
            </div>

            {/* Photo */}
            <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb779523732e04751a10e9de1b694bad3%2Ff1195e21dbc242de88ab0834e5ab3ee5?format=webp&width=800"
                alt="Matthew Vincent Paoletta"
                className="w-full h-full rounded-3xl object-cover shadow-2xl border-4 border-white hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <ArrowDown className="w-6 h-6 text-green-600" />
      </div>
    </section>
  );
}
