const Experiences = () => {
    const experiences = [
      {
        company:"CrowdVolt",
        role:"Software Engineering Intern",
        description:"",
        date: "Oct 2025 - Present"
      },
      {
        company: "Tech@NYU",
        role: "Software Developer",
        description:
          "",
        date: "Feb 2025 - May 2025",
      },
      
     


    ];

    return (
      <section className="flex justify-center py-20">
        <div className="w-full max-w-4xl px-8">
          <h2 className="text-center text-5xl font-light mb-16 text-lofi-deepBrown tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-lofi-peach/70 to-lofi-warmTan/50 backdrop-blur-sm rounded-2xl p-8
                          shadow-lg hover:shadow-2xl transition-all duration-500
                          border border-lofi-rust/25 hover:border-lofi-rust/60
                          transform hover:-translate-y-1 animate-slideUp
                          hover:bg-gradient-to-br hover:from-lofi-peach/80 hover:to-lofi-honey/60"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-lofi-honey to-lofi-rust rounded-l-2xl
                              transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-lg"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-lofi-terracotta/0 to-lofi-honey/0 group-hover:from-lofi-terracotta/10 group-hover:to-lofi-honey/10 rounded-2xl transition-all duration-500"></div>

                <div className="ml-6 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-medium text-lofi-espresso group-hover:text-lofi-deepBrown transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      {exp.company}
                    </h3>
                    <span className="text-sm font-light text-lofi-mocha tracking-wide mt-2 md:mt-0">
                      {exp.date}
                    </span>
                  </div>
                  <h4 className="text-base font-light text-lofi-coffee tracking-wide">
                    {exp.role}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Experiences;
  