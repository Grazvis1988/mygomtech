import { usePromiseTracker } from "react-promise-tracker";
import {RotatingLines} from "react-loader-spinner";

export const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="spinner">
        <RotatingLines width="50" strokeColor="#D179FF" strokeWidth="1" />
      </div>
    )
  );
};


export default Spinner;
