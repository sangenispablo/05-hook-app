import React from 'react';
import ReactDOM from 'react-dom';


// import {HookApp} from "./HookApp";
// import {CounterApp} from "./component/01-useState/CounterApp";
// import {CounterWithCustomHook} from "./component/01-useState/CounterWithCustomHook";
// import {SimpleForm} from "./component/02-useEffect/SimpleForm";
// import {FormWithCustomHook} from "./component/02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./component/03-examples/MultipleCustomHooks";
// import {FocusScreen} from "./component/04-useRef/FocusScreen";
// import {RealExampleRef} from "./component/04-useRef/RealExampleRef";
// import {LayoutEffect} from "./component/05-useLayoutEffect/LayoutEffect";
// import {Memorize} from "./component/06-memos/Memorize";
// import {MemoHook} from "./component/06-memos/MemoHook";
// import {CallbackHook} from "./component/06-memos/CallbackHook";
// import {Padre} from "./component/07-tarea-memo/Padre";
// import './component/08-useReducer/intro-reducer';

import {TodoApp} from "./component/08-useReducer/TodoApp";


ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

