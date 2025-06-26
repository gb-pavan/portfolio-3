import ProfileImage from '../components/ProfileImage';
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <section className="w-full px-12 md:px-24 py-16 gap-x-32 mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 gap-x-32 px-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-cyan-400 text-xl font-semibold">Hello! 👋</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            I’m <span className="text-white">Anish</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-md">
            UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Button text="Download CV" variant="primary" />
            <Button text="Get In Touch!" variant="secondary" />
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

