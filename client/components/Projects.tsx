import { Github, Code2, Database, BarChart3, Lightbulb, Zap, Target } from "lucide-react";

export default function Projects() {
  const allProjects = [
    {
      title: "WebReg2Cal",
      subtitle: "Course Schedule Parser Chrome Extension",
      date: "Personal Project",
      icon: Code2,
      color: "from-green-500 to-emerald-600",
      accentColor: "green",
      description:
        "Chrome extension that converts UCSD WebReg data into .ics calendar files for easy calendar imports.",
      highlights: [
        "Reached 150+ active UCSD users managing their schedules with the extension",
        "Integrated Google Calendar API to automate calendar event creation",
      ],
      technologies: [
        "CSS",
        "HTML",
        "JavaScript",
        "Google API",
      ],
      github: "https://github.com/Matthew-Paoletta/WebReg2Cal",
      chromeWebstore: "https://chromewebstore.google.com/detail/webreg2cal/lpokllkbcdgioagipllhfcpjmdnjjdci?hl=en",
    },
    {
      title: "El Niño Rewires the Pacific",
      subtitle: "Interactive Climate Data Visualization",
      date: "Group Project - Spring 2026",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-600",
      accentColor: "blue",
      description:
        "Interactive visualizations that make complex climate data accessible by showing how the Pacific Ocean’s El Niño region influences weather patterns across the Americas.",
      highlights: [
        "Designed data-driven visuals to explain climate patterns to everyday users",
        "Built an interactive web experience that connects ocean conditions to regional weather",
      ],
      technologies: [
        "JavaScript",
        "Data Visualization",
        "D3.js",
        "Web Development",
      ],
      github: "https://github.com/Matthew-Paoletta/Final-Project-DSC-106",
      liveDemo: "https://matthew-paoletta.github.io/Final-Project-DSC-106/",
    },
    {
      title: "Sports-Reference Table Downloader",
      subtitle: "Command-Line Data Collection Tool",
      date: "Group Project - Spring 2026",
      icon: Database,
      color: "from-amber-500 to-orange-600",
      accentColor: "orange",
      description:
        "Command-line tool that downloads every statistics table from sports-reference.com family sites as individual CSV files.",
      highlights: [
        "Automated collection of tables from baseball, basketball, football, and hockey reference pages",
        "Converted web-based sports data into reusable CSV files for analysis",
      ],
      technologies: [
        "Python",
        "Command Line",
        "Web Scraping",
        "CSV Data",
      ],
      github: "https://github.com/Matthew-Paoletta/DSC-190-Final-Project",
    },
    {
      title: "Postseason Performance Predictor",
      subtitle: "Baseball Performance Analytics",
      date: "Personal Project",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      accentColor: "orange",
      description:
        "Advanced statistical analysis of baseball datasets using machine learning to predict pennant winners and evaluate team performance.",
      highlights: [
        "Built predictive models identifying key pitching and defensive thresholds",
        "Discovered that elite pitching is more critical than batting for postseason success",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Statistical Analysis",
        "Jupyter",
      ],
      github: "https://github.com/Matthew-Paoletta/Postseason-Performance-Predictor",
    },
    {
      title: "Movie Recommender",
      subtitle: "Hidden Markov Model Recommender System",
      date: "Class Project - Spring 2025",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-700",
      accentColor: "purple",
      description:
        "Probabilistic movie recommender using HMM to model hidden industry regimes and temporal dynamics.",
      highlights: [
        "Built HMM to identify 2 distinct industry regimes with temporal dependencies",
        "Achieved 50.6% improvement over random baseline recommendations",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "Probabilistic Models",
        "Jupyter",
      ],
      github: "https://github.com/Matthew-Paoletta/CSE150A_Project",
    },
    {
      title: "Playoff Win Predictor",
      subtitle: "Baseball Statistical Analysis",
      date: "Personal Project",
      icon: BarChart3,
      color: "from-blue-600 to-blue-700",
      accentColor: "blue",
      description:
        "Statistical analysis of baseball datasets to identify performance metrics that correlate with postseason success.",
      highlights: [
        "Analyzed 30+ performance metrics to predict postseason success",
        "Created visualizations to communicate statistical relationships",
      ],
      technologies: [
        "Python",
        "Pandas",
        "Data Analysis",
        "Visualization",
      ],
      github: "https://github.com/Matthew-Paoletta/Playoff-Win-Predictor",
    },
    {
      title: "The Snowballing Effect",
      subtitle: "League of Legends Match Prediction",
      date: "Class Project - Winter 2025",
      icon: Zap,
      color: "from-indigo-500 to-indigo-600",
      accentColor: "indigo",
      description:
        "Predictive analytics project analyzing whether League of Legends match winners can be predicted from early-game statistics at the 15-minute mark.",
      highlights: [
        "Analyzed 13+ years of competitive LoL data (90,000+ matches) across worldwide leagues",
        "Built Random Forest model achieving 75.3% accuracy predicting match outcomes",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "Data Analysis",
        "Classification",
      ],
      github: "https://github.com/Matthew-Paoletta/The-Snowballing-Effect",
    },
    {
      title: "Factors of Collaboration",
      subtitle: "Music Collaboration Prediction",
      date: "Class Project - Winter 2025",
      icon: Database,
      color: "from-red-500 to-red-600",
      accentColor: "red",
      description:
        "Binary classification model predicting music artist collaborations based on popularity, background, and audio features.",
      highlights: [
        "Built classification model analyzing artist popularity and audio characteristics",
        "Implemented feature engineering to optimize model performance",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "Feature Engineering",
        "Jupyter",
      ],
      github: "https://github.com/Matthew-Paoletta/Factors-of-Collaboration",
    },
  ];

  const projects = allProjects;

  const getColorClasses = (accentColor) => {
    const colorMap = {
      green: {
        textLight: "text-green-100",
        textDark: "text-green-600",
        textDarker: "text-green-700",
        bgLight: "bg-green-50",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
      },
      blue: {
        textLight: "text-blue-100",
        textDark: "text-blue-600",
        textDarker: "text-blue-700",
        bgLight: "bg-blue-50",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        textLight: "text-purple-100",
        textDark: "text-purple-600",
        textDarker: "text-purple-700",
        bgLight: "bg-purple-50",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      orange: {
        textLight: "text-orange-100",
        textDark: "text-orange-600",
        textDarker: "text-orange-700",
        bgLight: "bg-orange-50",
        border: "border-orange-200",
        button: "bg-orange-600 hover:bg-orange-700",
      },
      indigo: {
        textLight: "text-indigo-100",
        textDark: "text-indigo-600",
        textDarker: "text-indigo-700",
        bgLight: "bg-indigo-50",
        border: "border-indigo-200",
        button: "bg-indigo-600 hover:bg-indigo-700",
      },
      red: {
        textLight: "text-red-100",
        textDark: "text-red-600",
        textDarker: "text-red-700",
        bgLight: "bg-red-50",
        border: "border-red-200",
        button: "bg-red-600 hover:bg-red-700",
      },
    };
    return colorMap[accentColor] || colorMap.green;
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white"
      data-section="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const colors = getColorClasses(project.accentColor);
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col"
                >
                  {/* Colored Header Section */}
                  <div
                    className={`bg-gradient-to-r ${project.color} p-8 sm:p-10 flex items-center justify-between relative overflow-hidden`}
                  >
                    <div className="flex-1 relative z-10">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white break-words">
                          {project.title}
                        </h3>
                      </div>
                      <p className={`${colors.textLight} font-medium text-sm`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="relative z-10 ml-4">
                      <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6">
                    {/* Project Info */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-xs font-semibold ${colors.textDark} uppercase tracking-wide`}
                        >
                          {project.date}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2.5">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex gap-3">
                          <span
                            className={`${colors.textDark} font-bold mt-0.5 flex-shrink-0 text-lg`}
                          >
                            ✓
                          </span>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className={`${colors.bgLight} ${colors.textDarker} px-3 py-1.5 rounded-lg text-xs font-medium border ${colors.border} hover:shadow-md transition`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="pt-4 border-t border-gray-200 flex gap-3 flex-wrap">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2.5 ${colors.button} text-white font-medium rounded-lg transition transform hover:scale-105`}
                        >
                          <Code2 className="w-5 h-5" />
                          View Live Project
                        </a>
                      )}
                      {project.chromeWebstore && (
                        <a
                          href={project.chromeWebstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2.5 ${colors.button} text-white font-medium rounded-lg transition transform hover:scale-105`}
                        >
                          <Code2 className="w-5 h-5" />
                          View on Chrome Web Store
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2.5 ${colors.button} text-white font-medium rounded-lg transition transform hover:scale-105`}
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
