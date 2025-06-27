// import Navbar from "./Navbar";

// const MainPage = () => {
//   return (
//     <div className="bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
//       <div id="about">
//         <p>Main Page.</p>
//         <Navbar />
//       </div>
//     </div>
//   );
// };

// export default MainPage;
import Home from './Home';
import AboutPage from './AboutPage';

const MainPage = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white relative overflow-hidden w-full">
      <Home />
      <div id="about">
        <AboutPage />
      </div>
    </div>
  );
};

export default MainPage;



