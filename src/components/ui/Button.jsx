export function Button({ children, onClick, className }) {
    return (
      <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  