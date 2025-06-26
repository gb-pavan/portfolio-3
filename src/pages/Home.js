// import HeroSection from '../sections/HeroSection';
// import AboutSection from '../sections/AboutSection';
// import SocialIcons from '../components/SocialIcons';
// import Navbar from './Navbar';

// const Home = () => {
//   return (
//     <main className="bg-white dark:bg-black text-black dark:text-white font-sans flex flex-col items-center justify-center space-y-12">
//               <Navbar />

//       <HeroSection />
//       {/* <AboutSection /> */}

//       {/* Social Icons - left fixed */}
//       <div className="fixed left-4 md:left-6 bottom-8 z-50 px-4 md:px-10 flex">
//         <SocialIcons />
//       </div>

//       {/* Email text - right fixed */}
//       <div className="fixed right-4 md:right-20 bottom-8 z-50 flex flex-col items-center gap-4">
//         <p className="text-gray-400 text-xs md:text-sm tracking-wider [writing-mode:vertical-rl] [text-orientation:mixed]">
//           sinhaaniskumar@outlook.in
//         </p>
//         <div className="w-3 md:w-4 h-px bg-gray-400" />
//       </div>
//     </main>
//   );
// };

// export default Home;

import HeroSection from '../sections/HeroSection';
import SocialIcons from '../components/SocialIcons';
import Navbar from './Navbar';

const Home = () => {
  return (
    <main
      id="home"
      className="bg-white dark:bg-black text-black dark:text-white font-sans flex flex-col items-center justify-center space-y-12 min-h-screen"
    >
      <Navbar /> {/* Navbar for Home only */}

      <HeroSection />

      {/* Fixed Social Icons */}
      <div className="fixed left-4 md:left-6 bottom-8 z-50 px-4 md:px-10 flex">
        <SocialIcons />
      </div>

      {/* Fixed Email Text */}
      <div className="fixed right-4 md:right-20 bottom-8 z-50 flex flex-col items-center gap-4">
        <p className="text-gray-400 text-xs md:text-sm tracking-wider [writing-mode:vertical-rl] [text-orientation:mixed]">
          sinhaaniskumar@outlook.in
        </p>
        <div className="w-3 md:w-4 h-px bg-gray-400" />
      </div>
    </main>
  );
};

export default Home;

