import { useSelector, useDispatch } from "react-redux";
import {counterActions} from '../store/counter';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  console.log("RENDER", { counter, show });

  const incrementHandler = () => {
    console.log("increment tıklandı");

    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    console.log("decrement tıklandı")
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {

    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
