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

// Union Types

let value: boolean | number
value = true;
value = 10;
// error
// value = "hello";

let arrayUni: (number | string)[];
arrayUni = [0,1,2,"hello"]

let company: "Facebook" | "Apple" | "Google" | "Microsoft" | "Amazon";
company = "Amazon";
// error
// company = "Yahoo";

// typeof
let msg: string = "Hi";
// typeofを使うと宣言済みの型から型定義を継承できる
// つまり、msg2: String
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat"};
let newAnimal: typeof animal = { cat: "big cat"};

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};

// keyofは宣言済みの型のプロパティのキーをunion型として返す
let key: keyof KEYS;
// つまり以下の通りになる
key = "primary";
// error
// key = "foreign";

// typeofとkeyofの組み合わせ
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
}

// これでまずkeyofでkeySports: "soccer" | "baseball"が決まる
// 次にtypeofで"soccer"と"baseball"がstring型に決まる
let keySports: keyof typeof SPORTS;
keySports = "soccer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
