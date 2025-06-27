import Navbar from './Navbar';

const Home = () => {
  return (
    <main
      id="home"
      className="bg-white dark:bg-black text-black dark:text-white font-sans flex flex-col items-center justify-center space-y-12 min-h-screen"
    >
      <Navbar />

      

    
     
      <div className="fixed right-4 md:right-20 bottom-8 z-50 flex flex-col items-center gap-4">
        <p className="text-gray-400 text-xs md:text-sm tracking-wider [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
          sinhaaniskumar@outlook.in
        </p>
        <div className="w-3 md:w-6 h-1 bg-gray-400" />
      </div>

    </main>
  );
};

export default Home;

