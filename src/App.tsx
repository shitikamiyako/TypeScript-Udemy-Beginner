import React from 'react';
import logo from './logo.svg';
import './App.css';

// 型推論<型定義(アノテーション)の優先順位

const name = "hello";
let nameChange = "hello1";

let array1 = [true, false];
let array2 = [true, false, 1, 'string'];

interface NAME {
  first: string;
  // interfaceでプロパティに?をつけると以後作るObj等で必須ではなくなる
  second?: string;
  last: string;

}

// secondプロパティはなくても問題ない
let nameObj:NAME = { first: 'mio', last: 'kamina'};

const func = (x:number, y:number):number => {
  return x + y;
}

// Intersection Types

type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

// 型の結合
type USER = PROFILE & LOGIN;

const userA: USER = {
  age:30,
  city: "tokyo",
  username: "test",
  password: 'password'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
