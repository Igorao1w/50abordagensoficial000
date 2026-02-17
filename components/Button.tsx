import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ 
  fullWidth = true, 
  className = '', 
  children, 
  href,
  onClick,
  ...props 
}) => {
  const baseClasses = `
    bg-[#7ac70c] hover:bg-[#6ab30a] text-white font-bold py-4 px-6 rounded-lg 
    uppercase tracking-wide text-lg shadow-md transition-all duration-200 transform hover:scale-[1.02]
    ${fullWidth ? 'w-full' : ''}
    flex items-center justify-center cursor-pointer border-0
    ${className}
  `;

  if (href) {
    return (
      <a 
        href={href}
        className={baseClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};