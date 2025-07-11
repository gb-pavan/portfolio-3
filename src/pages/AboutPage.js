import AboutSection from '../sections/AboutSection';
import SocialIcons from '../components/SocialIcons';
import Navbar from './Navbar';
import handImg from '../assets/hand.png';

const AboutPage = () => {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-black text-black dark:text-white font-sans flex flex-col items-center justify-center space-y-12 min-h-screen">

      <Navbar />
 
      <svg width="437" height="637" viewBox="0 0 437 637" fill="#737373" xmlns="http://www.w3.org/2000/svg" className="absolute top-[100px] left-[-80px] w-[400px] z-0 pointer-events-none">
        <g filter="url(#filter0_d_93_92)">
        <path d="M321.445 54.7897C228.464 4.66503 277.088 47.3896 88.6608 27.4078C-99.7668 7.42594 -179.877 187.315 -167.751 314.318C-155.626 441.321 -84.3804 456.538 -0.325101 508.135C74.2749 544.342 143.825 598.899 252.949 524.761C318.254 480.392 380.381 382.142 380.131 298.996C379.882 215.851 414.425 104.914 321.445 54.7897Z" fill="#737373"/>
        </g>
        <defs>
        <filter id="filter0_d_93_92" x="-218.942" y="0.876389" width="655.148" height="635.78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="25"/>
        <feGaussianBlur stdDeviation="25"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_92"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_93_92" result="shape"/>
        </filter>
        </defs>
      </svg>

      <img
        src={handImg}
        alt="hand"
        className="absolute left-0 top-[40%] -translate-y-1/2 w-80 h-auto"
      />


      <svg width="366" height="828" viewBox="0 0 366 828" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[150px] right-[-80px] w-[400px] z-0 pointer-events-none">
        <g filter="url(#filter0_d_93_91)">
        <path d="M841.1 183.111C708.147 87.1925 776.011 157.537 498.359 62.9008C220.706 -31.7357 45.7507 63.4446 50.9512 223.212C56.1517 382.98 200.988 301.413 252.654 529.73C272.266 747.948 522.655 782.05 692.087 732.083C793.484 702.18 895.591 605.228 903.598 503.498C911.605 401.767 974.052 279.03 841.1 183.111Z" fill="#FFF500"/>
        </g>
        <defs>
        <filter id="filter0_d_93_91" x="0.838379" y="0.285568" width="974.37" height="826.966" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="25"/>
        <feGaussianBlur stdDeviation="25"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_93_91"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_93_91" result="shape"/>
        </filter>
        </defs>
      </svg>


   
      <svg width="440" height="436" viewBox="0 0 440 436" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[10px] right-[280px] w-[350px] z-0 pointer-events-none">
        <g filter="url(#filter0_d_104_16)">
        <path d="M199.953 34.6858C139.889 64.2288 178.882 53.9222 94.6276 139.207C10.3737 224.492 61.0566 319.428 124.206 353.097C187.355 386.767 222.73 356.907 279.915 332.157C326.265 307.205 379.029 290.422 388.465 214.334C394.113 168.799 373.752 108.025 335.473 82.249C297.194 56.4725 260.018 5.14279 199.953 34.6858Z" fill="#737373"/>
        </g>
        <defs>
        <filter id="filter0_d_104_16" x="0.30957" y="0.786621" width="439.086" height="442.366" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="25"/>
        <feGaussianBlur stdDeviation="25"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_16"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_104_16" result="shape"/>
        </filter>
        </defs>
      </svg>

      <svg width="351" height="340" viewBox="0 0 351 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[30px] left-[200px] w-[350px] z-0 pointer-events-none">
        <g filter="url(#filter0_d_104_13)">
        <path d="M281.74 59.7011C246.743 32.0182 263.814 53.4193 186.808 31.537C109.802 9.65476 55.5388 48.5025 51.1234 102.63C46.708 156.758 91.7324 123.656 98.2495 199.368C95.8462 272.835 167.191 275.146 218.176 251.876C248.688 237.95 281.892 201.2 287.985 166.315C294.079 131.43 316.738 87.384 281.74 59.7011Z" fill="#FFF500"/>
        </g>
        <defs>
        <filter id="filter0_d_104_13" x="0.819336" y="0.326599" width="350.008" height="339.629" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="25"/>
        <feGaussianBlur stdDeviation="25"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_13"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_104_13" result="shape"/>
        </filter>
        </defs>
      </svg>

      


      {/* ✅ YELLOW BLOB: top-right decorative background */}
      <div className="clip-path-blob bg-yellow-400 w-72 h-72 absolute top-[-80px] right-[-80px] blur-2xl opacity-30 z-0" />

      {/* ✅ Optional: Add more blobs here if you want */}

      {/* ✅ Content should be above blobs */}
      <div className="relative z-10 w-full flex justify-center">
        <AboutSection />
      </div>

      {/* ✅ Social Icons (fixed) */}
      <div className="fixed left-4 md:left-6 bottom-8 z-50 px-4 md:px-10 flex">
        <SocialIcons />
      </div>

     
    </main>
  );
};

export default AboutPage;



