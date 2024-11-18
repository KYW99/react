import { useReducer } from "react";

const initCountState = {
  count: 0,
};

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

export default function UseReducerComponent() {
  const [countState, countDisoatch] = useReducer(initCountState, countReducer);

  return (
    <div className="UseReducerComponent">
      <h4>UseReducerComponent</h4>
      <p>count : {countState.count}</p>
      <button onClick={() => countDisoatch({ type: "INCREASE" })}>증가</button>
      <button onClick={() => countDisoatch({ type: "DECREASE" })}>감소</button>
      <button onClick={() => countDisoatch({ type: "RESET" })}>리셋</button>
    </div>
  );
}
