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
    <section className="flex justify-center pb-[100px]">
      <div className="w-full max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold mb-6">Featured Projects</h2>
        <p className="pb-12 text-center text-xl">Check out some of my projects!</p>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-purple-100/80 rounded-3xl p-6 shadow-md flex flex-col items-center text-center relative z-0 after:-z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/20">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              {project.website === "Under Repair" ? (
                <div className="font-inter inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded-3xl cursor-not-allowed">
                  <button disabled className="">
                    {project.buttonText}
                  </button>
                </div>
              ) : (
                <a
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-inter inline-block bg-purple-300 text-black px-4 py-2 rounded-3xl hover:bg-purple-400 transition duration-300"
                >
                  <button className="">
                    {project.buttonText}
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;