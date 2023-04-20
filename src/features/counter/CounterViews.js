import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const CounterViews = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  // handle Increment:
  const handleIncrement = () => {
    dispatch(increment());
  };
  //handle decrement:
  const handleDecrement = () => {
    dispatch(decrement());
  };
  // handle reset:
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className="text-center mt-5">
      <h3>Counter App</h3>
      <h5>
        Count: {count}
      </h5>
      <div className="mt-5">
        <button onClick={handleIncrement} className="btn btn-success m-2">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-danger m-2">
          Decrement
        </button>
        <button onClick={handleReset} className="btn btn-warning m-2">
          Reset
        </button>
        {/* <button
          onClick={dispatch(incrementByAmount(5))}
          className="btn btn-primary m-2"
        >
          Increase by 5
        </button> */}
      </div>
    </div>
  );
};

export default CounterViews;
