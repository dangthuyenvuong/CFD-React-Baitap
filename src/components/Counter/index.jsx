import React, { useState, useEffect } from "react";
import Button from "../Button";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [id] = useState(Math.random());
    // useEffect(() => {
    // 	document.title = `You clicked ${count} times`;
    //     console.log('useEffect')
    // });

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     alert(count);
        // }, 1000);
        // console.log(timer, 'useEffect')

        const scroll = () => {
            console.log('scroll', id)
        }
        document.addEventListener('scroll', scroll)


        return () => {
            document.removeEventListener('scroll', scroll)
        }
        // sẽ được run khi useEffect được run lại hoặc component được hủy
        // return () => {
        //     console.log(timer, 'return useEffect')
        //     clearTimeout(timer);
        // };
    }, []);


    console.log('render')
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button round className="asdfsadf" onClick={() => setCount(count + 1)}>Click me</Button>
            <Button round className="asdfsadf" onClick={() => setCount1(count1 + 1)}>Click me 2</Button>
        </div>
    );
}