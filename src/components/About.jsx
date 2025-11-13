const About = () => {
  return (
    <div className="flex flex-col items-center min-h-[40vh] justify-center py-20 animate-fadeIn">
      <div className="relative">
        <h1 className="font-light text-8xl text-lofi-deepBrown tracking-tight pb-3 animate-slideUp"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          Austin Tan
        </h1>
        <div className="h-1 w-32 bg-lofi-accent mx-auto mt-6 rounded-full animate-glow"></div>
      </div>
      <p className="text-lofi-brown text-lg font-light mt-8 tracking-widest uppercase animate-slideUp"
         style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
        Software Engineer
      </p>
    </div>
  )
}

export default About