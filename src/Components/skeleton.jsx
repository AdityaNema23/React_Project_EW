import "./skeleton.css";

const Skeleton = () => {
  const skeletonCards = Array.from({ length: 6 }); 

  return (
    <div className="skeleton-wrapper">
      {skeletonCards.map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-thumbnail"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line" style={{ width: "80%" }}></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
