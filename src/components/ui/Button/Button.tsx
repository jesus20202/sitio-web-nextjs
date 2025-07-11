interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = "px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-300 border-2 cursor-pointer";
  
  const variants = {
    primary: "bg-primary-blue text-white border-primary-blue hover:bg-secondary-blue hover:border-secondary-blue",
    secondary: "bg-transparent text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}