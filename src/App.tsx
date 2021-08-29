import React from 'react';
import logo from './logo.svg';
import './App.css';
import { error } from 'console';
import Data from "./data.json"
import TestComponents from "./TestComponents"

// data.jsonから型を継承
type USERS = typeof Data;

// ReactとTypeScript

// これがReactの関数コンポーネント(Function Components)であるという型付けを表す、やったね。
const App: React.FC = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        {/* interface Propsに合わせたプロパティを指定してやる */}
        <TestComponents text="Hello from App!"/>
      </header>
    </div>
  );
}

export default App;
