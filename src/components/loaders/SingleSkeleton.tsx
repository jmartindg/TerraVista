const SingleSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="skeleton aspect-video w-full h-full"></div>
      </div>
      <div className="space-y-5">
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-1/4"></div>
        <div className="skeleton h-4 w-full bg-transparent"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default SingleSkeleton;
