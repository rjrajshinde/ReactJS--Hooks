import "./App.css";
import React from "react";
import ClassCounter from "./Components/useState/ClassCounter";
import HookCounter from "./Components/useState/HookCounter";
import HookCounter2 from "./Components/useState/HookCounter2";
import HookStateArray from "./Components/useState/HookStateArray";
import ClassCounter1 from "./Components/useEffect/ClassCounter1";
import HookCounter1 from "./Components/useEffect/HookCounter1";
import ClassMouse from "./Components/useEffect/ClassMouse";
import HookMouse from "./Components/useEffect/HookMouse";
import MouseContainer from "./Components/useEffect/MouseContainer";
import ClassAutoCounter from "./Components/useEffect/ClassAutoCounter";
import HookAutoCounter from "./Components/useEffect/HookAutoCounter";
import DataFetching from "./Components/useEffect/DataFetching";
import DataFetchingSinglePost from "./Components/useEffect/DataFetchingSinglePost";
import ComponentA from "./Components/useContext/UsingSimpleContext/ComponentA";
import ComponentA1 from "./Components/useContext/UsingUseContext/ComponentA";
import Counter from "./Components/useReducer/Counter";
import Counter2 from "./Components/useReducer/Counter2";
import Counter3 from "./Components/useReducer/Counter3";
import Comp1 from "./Components/useReducerWithuseContext/Comp1";
import DataFetchingUsingUseState from "./Components/useReducer/DataFetchingUsingUseState";
import DataFetchingUsingUseReducer from "./Components/useReducer/DataFetchingUsingUseReducer";
import ParentComponent from "./Components/useCallback/ParentComponent";
import CounterMemo from "./Components/useMemo/CounterMemo";
import FocusInput from "./Components/useRef/FocusInput";
import ClassTimer from "./Components/useRef/ClassTimer";
import HookTimer from "./Components/useRef/HookTimer";
import HookTimerUseRef from "./Components/useRef/HookTimerUseRef";
import TitleCount1 from "./Components/CustomeHooks/TitleCount1";
import TitleCount2 from "./Components/CustomeHooks/TitleCount2";
import CounterOne from "./Components/CustomeHooks/CounterOne";
import CounterTwo from "./Components/CustomeHooks/CounterTwo";

function App() {
  return (
    <div className="App">
      {/* custom Hook */}
      {/* <TitleCount1></TitleCount1>
      <TitleCount2></TitleCount2> */}
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>

      {/* useRef */}
      {/* <FocusInput></FocusInput> */}
      {/* <ClassTimer></ClassTimer> */}
      {/* <HookTimer></HookTimer> */}
      {/* <HookTimerUseRef></HookTimerUseRef> */}

      {/* useMemo */}
      {/* <CounterMemo></CounterMemo> */}

      {/* useCallback */}
      {/* <ParentComponent></ParentComponent> */}

      {/* useReducer with useContext */}
      {/* <Comp1></Comp1> */}

      {/* useReducer */}
      {/* <Counter></Counter> */}
      {/* <Counter2></Counter2> */}
      {/* <Counter3></Counter3> */}
      {/* <DataFetchingUsingUseState></DataFetchingUsingUseState> */}
      {/* <DataFetchingUsingUseReducer></DataFetchingUsingUseReducer> */}

      {/* useContext */}
      {/* <ComponentA /> */}
      {/* <ComponentA1></ComponentA1> */}

      {/* useEffect */}
      {/* <ClassCounter1></ClassCounter1> */}
      {/* <HookCounter1></HookCounter1> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <ClassAutoCounter></ClassAutoCounter> */}
      {/* <HookAutoCounter></HookAutoCounter> */}
      {/* <DataFetching></DataFetching> */}
      {/* <DataFetchingSinglePost></DataFetchingSinglePost> */}

      {/* useState */}
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounter2></HookCounter2> */}
      {/* <HookStateArray></HookStateArray> */}
    </div>
  );
}

export default App;
