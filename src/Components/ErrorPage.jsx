import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong</h1>
        <p className="error-status">
          Error 404: The page you are looking for does not exist.
        </p>
        <p className="error-details">
          It seems the URL might be incorrect or the page has been removed. Please check the URL or go back to the homepage to explore our site.
        </p>

        <div className="error-actions">
          <button
            className="error-button"
            onClick={() => (window.location.href = "/")}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
