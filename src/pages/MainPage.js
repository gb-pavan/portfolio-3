import Navbar from "./Navbar";

const MainPage = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <div id="about">
        <p>Main Page.</p>
        <Navbar />
      </div>
    </div>
  );
};

export default MainPage;

