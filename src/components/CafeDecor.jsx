const CafeDecor = () => {
  return (
    <>
      {/* Coffee cup with steam in top left */}
      <div className="fixed top-32 left-8 z-20 opacity-60 animate-fadeIn hidden md:block">
        <div className="relative">
          {/* Coffee cup */}
          <div className="w-16 h-20 bg-gradient-to-b from-lofi-accent/40 to-lofi-brown/40 rounded-b-lg border-2 border-lofi-brown/30 backdrop-blur-sm">
            <div className="absolute top-2 left-2 right-2 h-2 bg-lofi-darkBrown/30 rounded-full"></div>
          </div>
          {/* Handle */}
          <div className="absolute right-[-8px] top-6 w-6 h-8 border-2 border-lofi-brown/30 rounded-r-full"></div>
          {/* Steam */}
          <div className="absolute -top-8 left-4 flex gap-2">
            <div className="w-1 h-6 bg-lofi-warmGray/40 rounded-full animate-steam" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-6 bg-lofi-warmGray/40 rounded-full animate-steam" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1 h-6 bg-lofi-warmGray/40 rounded-full animate-steam" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>

      {/* Vinyl record player in bottom right */}
      <div className="fixed bottom-20 right-8 z-20 opacity-50 animate-fadeIn hidden md:block">
        <div className="relative">
          {/* Vinyl record */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lofi-deepBrown to-lofi-darkBrown border-4 border-lofi-brown/40 animate-spin-slow shadow-xl">
            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-lofi-accent/60 border-2 border-lofi-brown/50"></div>
            {/* Grooves */}
            <div className="absolute inset-4 rounded-full border border-lofi-brown/20"></div>
            <div className="absolute inset-6 rounded-full border border-lofi-brown/20"></div>
            <div className="absolute inset-8 rounded-full border border-lofi-brown/20"></div>
          </div>
          {/* Tone arm */}
          <div className="absolute top-2 -right-6 w-12 h-1 bg-lofi-darkBrown/60 rounded-full transform origin-right rotate-[-30deg]">
            <div className="absolute right-0 w-3 h-3 bg-lofi-accent/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Hanging plant in top right */}
      <div className="fixed top-0 right-20 z-20 opacity-40 animate-fadeIn hidden lg:block">
        <div className="relative">
          {/* Rope/chain */}
          <div className="w-0.5 h-16 bg-lofi-brown/30 mx-auto"></div>
          {/* Pot */}
          <div className="w-16 h-12 bg-gradient-to-b from-lofi-warmGray/40 to-lofi-brown/40 rounded-b-2xl backdrop-blur-sm border-2 border-lofi-brown/20"></div>
          {/* Leaves */}
          <div className="absolute top-10 left-2 w-12 h-12">
            <div className="absolute w-6 h-8 bg-lofi-sage/40 rounded-full transform -rotate-12 animate-sway"></div>
            <div className="absolute w-6 h-8 bg-lofi-deepSage/40 rounded-full transform rotate-12 left-4 animate-sway" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-5 h-7 bg-lofi-sage/30 rounded-full transform -rotate-45 top-4 animate-sway" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Book stack in bottom left */}
      <div className="fixed bottom-32 left-12 z-20 opacity-50 animate-fadeIn hidden md:block">
        <div className="relative transform hover:scale-105 transition-transform duration-500">
          {/* Bottom book */}
          <div className="w-20 h-3 bg-lofi-darkBrown/40 rounded-sm border border-lofi-brown/30 backdrop-blur-sm"></div>
          {/* Middle book */}
          <div className="w-20 h-3 bg-lofi-brown/40 rounded-sm border border-lofi-brown/30 backdrop-blur-sm mt-0.5 transform -translate-x-1"></div>
          {/* Top book */}
          <div className="w-20 h-3 bg-lofi-accent/40 rounded-sm border border-lofi-brown/30 backdrop-blur-sm mt-0.5 transform translate-x-1"></div>
        </div>
      </div>

      {/* Floating music notes */}
      <div className="fixed top-1/3 right-1/4 z-10 opacity-30 hidden xl:block">
        <div className="animate-float-slow">
          <span className="text-4xl text-lofi-brown/50">♪</span>
        </div>
      </div>
      <div className="fixed top-1/2 left-1/4 z-10 opacity-20 hidden xl:block">
        <div className="animate-float-slow" style={{ animationDelay: '1s' }}>
          <span className="text-3xl text-lofi-brown/50">♫</span>
        </div>
      </div>
    </>
  );
};

export default CafeDecor;
