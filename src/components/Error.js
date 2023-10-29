import { useRouteError } from "react-router-dom";
const Error = function () {
  const err = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>Please try later after sometime</h2>
      <p>{`Status code: ${err?.status} ${err?.statusText}`}</p>
    </div>
  );
};
export default Error;
