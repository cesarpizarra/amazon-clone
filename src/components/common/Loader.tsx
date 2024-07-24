const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-dotted border-blue-500"></div>
  </div>
);

export default LoadingSpinner;
