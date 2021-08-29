import React from 'react';
import logo from './logo.svg';
import './App.css';
import { error } from 'console';
import Data from "./data.json"

// data.jsonから型を継承
type USERS = typeof Data;

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

// enum

enum OS {
  Windows,
  Mac,
  Linux
};

interface PC {
  id: number;
  OSType: OS
}

const PC1: PC = {
  id: 1,
  // 0
  OSType: OS.Windows,
}

const PC2: PC = {
  id: 2,
  // 1
  OSType: OS.Mac,
}

const PC3: PC = {
  id: 3,
  // 2
  OSType: OS.Linux,
}

// 型の互換性
// 型は抽象度が高いものから低いものへの互換性はある。
// 例えば以下の例、型推論のものをあとでアノテーションの宣言がある変数へ代入しても問題なく通る
const comp1 = "test";
let comp2: string = comp1;

// 逆にアノテーションで宣言している変数を別の型へと代入することはできない
let comp3: string = "sample";
// 一見等価に見えるが、string型と文字リテラル型との違いがあるのでerror
// let comp4: "sample" = comp3;

// 同様に関数の場合は例えば引数の型が違えば等価にはならない
let func1 = (x:string) => {
  console.log(x);
}

let func2 = (x:number) => {
  console.log(x);
}
// error
// func1 = func2;

// Generics

interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// error
// const gen1: GEN = { item: "world" };
const gen2: GEN<number> = { item: 14 };
// デフォルトの型指定をしたい場合は以下の通り
interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = {item: "world"};
// 指定する型を制限したい場合はextendsを使う
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: 'string'};
const gen5: GEN2<number> = { item: 5};
// error
// const gen6: GEN2<boolean> = { item: false};

function funcGen<T>(props:T) {
  return {item: props};
}
// アロー関数の場合は必ずextendsを使わないとエラーになる
const funcGen1 = <T extends {}> (props: T) => {
  return {item: props};
}
const gen7 = funcGen1("test");

// 型制限もできる
function funcGen2<T extends string | null>(props: T) {
  return {item: props};
}
const funcGen3 = <T extends {} | string | null> (props: T) => {
  return {item: props};
}

const gen8 = funcGen2("test");
const gen9 = funcGen2(null);
const gen10 = funcGen3("sample");
// error
// const gen11 = funcGen2(1);

// interfaceと使う
interface Props {
  price: number;
}
const funcGen4 = <T extends Props> (props: T) => {
  return {value: props.price};
}
const gen12 = funcGen4({price:1})
// error
// const gen13 = function({price:'string'})

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
