import ProfileImage from '../components/ProfileImage';
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <section className="w-full px-12 md:px-24 py-16 gap-x-8 mx-auto ml-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 gap-x-8 px-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* <span className="text-cyan-400 text-xl font-semibold">Hello! 👋</span> */}
          <span
            className="text-white text-xl font-semibold px-5 py-1"
            style={{
              background: 'linear-gradient(to right, #32F6F6, #A6A79F)',
              borderTopLeftRadius: '50px',
              borderTopRightRadius: '50px',
              borderBottomRightRadius: '50px',
              borderBottomLeftRadius: '0px',
            }}
          >
            Hello!
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 dark:bg-black text-black dark:text-white">
            I’m <span className="text-gray-400">Anish</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-md">
            UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
           
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button className="font-segoe font-[900] text-[20px] px-6 py-2 bg-download-gradient rounded-custom-btn border border-white text-white">
                Download CV
              </button>

              <button className="font-segoe font-[900] text-[20px] px-6 py-2 bg-contact-gradient rounded-custom-btn border border-white text-white">
                Get In Touch!
              </button>
            </div>


          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

