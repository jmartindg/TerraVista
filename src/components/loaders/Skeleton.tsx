const Skeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="skeleton aspect-video w-full"></div>
      <div className="skeleton h-4 w-1/2"></div>
      <div className="skeleton h-4 w-1/2"></div>
      <div className="skeleton h-4 w-1/2"></div>
    </div>
  );
};

export default Skeleton;
