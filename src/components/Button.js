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

