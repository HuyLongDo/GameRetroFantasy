import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-3 px-4 bg-orange-600 text-white font-bold uppercase tracking-wider rounded-md transition-all duration-300 hover:bg-orange-400 hover:text-white shadow-lg hover:shadow-yellow-200/50 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
