// import Home from './Home';
// import AboutPage from './AboutPage';

// const MainPage = () => {
//   return (
//     <div className="bg-white dark:bg-black text-black dark:text-white">
//       <Home />
//       <AboutPage />
//     </div>
//   );
// };

// export default MainPage;

import Home from './Home';
import AboutPage from './AboutPage';

const MainPage = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <Home />

      {/* 👇 Scroll Target */}
      <div id="about">
        <AboutPage />
      </div>
    </div>
  );
};

export default MainPage;

