const ShimmerCard = function () {
  return (
    <>
      <div className="mt-12 mx-10">
        <div className="my-2 p-4 w-60 h-48 bg-gray-400 rounded-xl"></div>
        <div>
          <div className="inline-block mr-2 mb-3 w-7 h-9 rounded-md bg-slate-400"></div>
          <div className="inline-block">
            <div className=" my-1 w-40 h-3 bg-slate-400 rounded-sm"></div>
            <div className=" my-1 w-44 h-3 bg-slate-400 rounded-sm"></div>
            <div className=" my-1 w-36 h-3 bg-slate-400 rounded-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Shimmer = ({ count }) => {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-wrap"
      data-testid="shimmer"
    >
      {Array(count)
        .fill("")
        .map((e, i) => (
          <div key={i}> {ShimmerCard()}</div>
        ))}
    </div>
  );
};

export default Shimmer;
