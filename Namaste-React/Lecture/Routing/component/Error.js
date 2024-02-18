import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Oops</h1>
      <h3>{err.error.message} 🤯</h3>
      <p>{}</p>
    </div>
  );
};

export default Error;
