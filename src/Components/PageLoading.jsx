
const PageLoading = () => {
    return (
      <div className="flex flex-col items-center gap-4 max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="skeleton h-10 w-56"></div>
        <div className="skeleton h-10 w-80"></div>
        <div className="skeleton h-10 w-96"></div>
        <div className="w-80 flex gap-5">
          <div className="skeleton h-10 w-full "></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
        <div className="skeleton h-72 w-96"></div>
      </div>
    );
};

export default PageLoading;