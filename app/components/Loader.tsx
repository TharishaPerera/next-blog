const Loader = () => {
  return (
    <div className="grid h-screen place-items-center">
      {/* <span className="loading loading-dots loading-lg"></span> */}
      <div className="flex gap-2">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
