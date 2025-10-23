export default function Container({ children, className = '', size = 'default' }) {
  const sizeClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-screen-2xl',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
