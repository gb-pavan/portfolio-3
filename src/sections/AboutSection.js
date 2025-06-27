import AboutText from '../components/AboutText';

const AboutSection = () => {
  return (

<section
  id="about"
  className="absolute bottom-[-180px] right-[220px] w-[90%] max-w-7xl mx-auto px-8 md:px-16 py-20 rounded-xl"
>
  {/* Top heading with right-extending line */}
  <div className="flex items-center mb-8 w-full">
    <h2 className="text-black dark:text-white text-[64px] md:text-6xl font-[500] bg-white dark:bg-black py-3 px-4 rounded-xl tracking-tight whitespace-nowrap">
      This is it. ;)
    </h2>
    <div className="flex-grow h-[2px] bg-gray-400 dark:bg-gray-600 ml-6"></div>
  </div>

  {/* About text content */}
  <AboutText />

  {/* Bottom center line */}
  <div className="mt-16 flex justify-center">
    <div className="w-[40%] h-[2px] bg-gray-400 dark:bg-gray-600"></div>
  </div>
</section>


  );
};

export default AboutSection;


