import { ChangeEvent, useReducer } from "react";
import { TEvent } from "../Interface/CommonTypes";

interface IAction {
  type: string;
  payload: string;
}
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: IAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action?.payload],
      };

    default:
      return currentState;
  }
};

const UseReducerFrom = () => {
  /*
    dispatch is sender .
    reducer  send action.payload 
    **/
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: TEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          placeholder="name"
          className="border-2 border-red-500 p-2 m-2"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="number"
          name="age"
          id="age"
          placeholder="age"
          className="border-2 border-red-500 p-2 m-2"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
          className="border-2 border-red-500 p-2 m-2"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UseReducerFrom;
