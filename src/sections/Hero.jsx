import backgroundImage from '../assets/background.jpg';

function Hero() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="bg-white text-gray-900 min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8" id="Home" style={sectionStyle}>
      <h2 className="text-2xl md:text-2xl xl:text-4xl font-bold tracking-tight">
        Welcome to Our World of Simplicity!
      </h2>
      <p className="font-bold text-black my-4 text-md max-w-lg lg:max-w-none text-center lg:text-left">
        We Craft WordPress Plugins, Themes, and Website Templates.
      </p>
      <button className="bg-teal-800 text-white font-semibold py-2 px-4 rounded hover:bg-teal-300 hover:text-black transition-colors duration-300">
        <a href="#Plugins">Explore Our Products</a>
      </button>
    </section>
  );
}

export default Hero;
