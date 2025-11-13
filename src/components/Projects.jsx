const Projects = () => {
  const projects = [
    {
      name: "C++ High Frequency Trading Engine",
      description: "High Frequency Crypto Trading Engine built on top of Boost.beast websocket and utilizes Mean Reversion and Pairs Trading Strategy",
      website: "https://github.com/austint903/hft-crypto-engine",
      buttonText: "View GitHub"
    },
    {
      name: "VisualzrAi (under repair)",
      description: "AI math visualization tool with asynchronous animation generation",
      website: "Under Repair",
      buttonText: "Under Repair"
    },
    {
      name: "DreamSpace",
      description: "Personalized iOS app that help users achieve a perfect night of sleep",
      website: "https://github.com/austint903/dreamspace",
      buttonText: "View GitHub"
    },
    {
      name: "KVerse",
      description: "Interactive Korean language learn through KPop with responsive AI chatbot",
      website: "https://github.com/austint903/KVerse-fullstack",
      buttonText: "View GitHub"
    },
  ];

  return (
    <section className="flex justify-center py-20">
      <div className="w-full max-w-5xl px-8">
        <h2 className="text-center text-5xl font-light mb-6 text-lofi-deepBrown tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          Featured Projects
        </h2>
        <p className="pb-16 text-center text-base font-light text-lofi-brown tracking-wide">
          Check out some of my projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-lofi-peach/80 to-lofi-latte/60 backdrop-blur-sm rounded-2xl p-8
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        border border-lofi-clay/30 hover:border-lofi-terracotta/60
                        transform hover:-translate-y-2 flex flex-col animate-slideUp
                        hover:bg-gradient-to-br hover:from-lofi-honey/70 hover:to-lofi-warmTan/60"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lofi-honey/15 to-lofi-rust/10 rounded-2xl
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-lofi-espresso mb-4 group-hover:text-lofi-deepBrown transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                  {project.name}
                </h3>
                <p className="text-base font-light text-lofi-mocha leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {project.website === "Under Repair" ? (
                  <div className="inline-flex items-center justify-center px-6 py-3 rounded-full
                                bg-lofi-warmGray/30 text-lofi-brown cursor-not-allowed
                                font-light text-sm tracking-wide">
                    {project.buttonText}
                  </div>
                ) : (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full
                             bg-gradient-to-r from-lofi-honey/30 to-lofi-terracotta/25 hover:from-lofi-honey/50 hover:to-lofi-terracotta/45
                             text-lofi-espresso hover:text-lofi-deepBrown
                             transition-all duration-300 font-light text-sm tracking-wide
                             border border-lofi-rust/40 hover:border-lofi-rust/70
                             group/button shadow-sm hover:shadow-lg"
                  >
                    <span>{project.buttonText}</span>
                    <span className="ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;