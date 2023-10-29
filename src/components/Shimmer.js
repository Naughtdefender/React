const ShimmerCard = function () {
  return (
    <div className="cardCC">
      <div className="card_upperHalf"></div>
      <div className="card_bottomHalf">
        <div className="card_container">
          <p className="box"></p>
          <ul className="card_blankSpace">
            <li className="blankSpace"></li>
            <li className="blankSpace"></li>
            <li className="blankSpace"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Shimmer = ({ count }) => {
  return (
    <div className="shimmer_body">
      {Array(count)
        .fill("")
        .map((e, i) => (
          <div key={i}> {ShimmerCard()}</div>
        ))}
    </div>
  );
};

export default Shimmer;
