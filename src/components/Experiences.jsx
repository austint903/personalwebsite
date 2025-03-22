const Experiences = () => {
    const experiences = [
      {
        company: "Tech@NYU",
        role: "Software Developer",
        description:
          "",
        date: "Feb 2025 - May 2025",
      },
      
    ];
  
    return (
      <section className="flex justify-center pb-[100px]">
        <div className="w-full max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold mb-6">Experiences</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-purple-100/80 rounded-3xl p-6 shadow-md flex flex-col items-center text-center relative z-0 after:-z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/20"
              >
                <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
                <h4 className="text-lg font-medium mb-2">{exp.role}</h4>
                <span className="text-sm text-gray-600">{exp.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experiences;
  