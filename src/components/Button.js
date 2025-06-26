// const Button = ({ text, variant }) => {
//   const base = 'px-5 py-2 rounded-md font-semibold shadow-lg';
//   const styles = variant === 'primary'
//     ? `${base} bg-orange-400 hover:bg-orange-500 text-black`
//     : `${base} bg-transparent border border-white text-white hover:bg-white hover:text-black`;

//   return <button className={styles}>{text}</button>;
// };

// export default Button;

const Button = ({ text, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 h-auto text-sm rounded font-semibold';

  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500',
    secondary: 'bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;

