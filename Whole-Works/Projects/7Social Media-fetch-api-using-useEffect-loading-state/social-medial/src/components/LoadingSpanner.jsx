const LoadingSpanner = () => {
  return (
    <div className="d-flex align-items-center loading-sp loading-spanner">
      <strong>Loading...</strong>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      />
    </div>
  );
};
export default LoadingSpanner;
