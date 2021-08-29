// rafcからオートコンプリート
import React, { useState } from 'react'

interface Props {
    text: string;
}
interface UserData {
    id: number;
    name: string;
}

const TestComponents:React.FC<Props> = (props) => {
    // useStateを使っていても以下のcountやsetCountには型推論が働くが、型を厳格にしたいなら以下のようにもできる
    const [count, setCount] = useState<number | null>(4);
    // interfaceとの併用
    const [user, setUser] = useState<UserData>({id:1, name:"sample"});

    return (
        <div>
            <h1>{props.text}</h1>
            <h1>{count}</h1>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
        </div>
    )
}

export default TestComponents;