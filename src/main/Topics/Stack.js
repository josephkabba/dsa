import { useState, useEffect } from "react";
import StackImpl from "../../datastructures/stack/stack"; 


function Stack(){

    const [Element, setElement] = useState(null);
    const [Stack, setStack] = useState(null);
    const [StackData, setStackData] = useState({size: 0, topElement: 0, allElements: []});
    
    const createStack = () => {
        if(Stack === null){
            const stk = new StackImpl();
            console.log(stk);
            setStack(stk);
        }
    };

    useEffect(() => {
        createStack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeValue = (value) => {
        setElement(value);
    };

    const upDateStackData = () => {
        setStackData((preValue) => ({ ...preValue, size: Stack.size(), topElement: Stack.peek(), allElements: Stack.allItems()}));
    };

    const pop = () => {
        if (!Stack.isEmpty()){
            Stack.popElement();
            upDateStackData();
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if(Element !== null && Element !== ""){
            Stack.push(Element);
            upDateStackData();
        }
    };

    return (<div div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl text-primary capitalize">Enter value</h1>

        <form onSubmit={submit} className="flex md:flex-row flex-col mt-3">
            <input
                type="text"
                id="value"
                name="value"
                placeholder="value"
                value={Element}
                onChange={(e) => onChangeValue(e.target.value)}
                className="align-text-top focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md"
            />

            <button className="rounded-xl md:text-lg text-sm w-full shadow-md mt-4 md:mt-0 md:ml-4 px-2 py-2 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" type='submit'>Push</button>
        </form>

        <div className="flex flex-col mt-4 border border-gray-100 rounded shadow p-4">
            <h1 className="font-bold text-xl text-primary capitalize">{`Size of stack: ${StackData.size}`}</h1>
            <h1 className="font-bold text-xl text-primary capitalize">{`Top most element: ${StackData.topElement ? StackData.topElement : 0}`}</h1>

            <button className="flex-shrink rounded-xl mt-4 md:text-lg text-sm w-full shadow-md my-2 mx-2 px-6 py-1 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" onClick={pop}>Pop</button>
        </div>

        <h1 className="font-bold text-xl shadow rounded border-gray-100 mt-4 p-4 text-primary">{((StackData.allElements.length !== 0) ? `Elements : ${StackData.allElements.map((value, index) => (`${value} `))}` : "No elements in the stack")}</h1>

    </div>);
}


export default Stack;