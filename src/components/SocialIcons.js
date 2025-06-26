import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import { SiTencentqq } from 'react-icons/si'; // For QQ icon

const SocialIcons = ({ className = '' }) => {
  const iconClasses =
    'bg-white dark:bg-black text-black dark:text-white hover:text-yellow-400 border border-black dark:border-white p-2 rounded-full w-10 h-10 flex items-center justify-center';

  return (
    <div className={`flex flex-col gap-4 items-center ${className}`}>
      <a href="#" className={iconClasses}><FaFacebookF size={16} /></a>
      <a href="#" className={iconClasses}><FaInstagram size={16} /></a>
      <a href="#" className={iconClasses}><FaTwitter size={16} /></a>
      <a href="#" className={iconClasses}><FaGithub size={16} /></a>
      <a href="#" className={iconClasses}><FaLinkedinIn size={16} /></a>
      <a href="#" className={iconClasses}><FaTelegramPlane size={16} /></a>
      <a href="#" className={iconClasses}><SiTencentqq size={16} /></a>
    </div>
  );
};

export default SocialIcons;
