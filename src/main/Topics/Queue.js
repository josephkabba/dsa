

import { useState, useEffect } from "react";
import QueueImpl from "../../datastructures/queue/queue";


function Queue() {

    const [Element, setElement] = useState(null);
    const [Queue, setQueue] = useState(null);
    const [QueueData, setQueueData] = useState({ size: 0, topElement: 0, allElements: [] });

    const createQueue = () => {
        if (Queue === null) {
            const qmpl = new QueueImpl();
            console.log(qmpl);
            setQueue(qmpl);
        }
    };

    useEffect(() => {
        createQueue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeValue = (value) => {
        setElement(value);
    };

    const upDateStackData = () => {
        setQueueData((preValue) => ({ ...preValue, size: Queue.size(), topElement: Queue.front(), allElements: Queue.allItems() }));
    };

    const dequeue = () => {
        if (!Queue.isEmpty()) {
            Queue.dequeue();
            upDateStackData();
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (Element !== null && Element !== "") {
            Queue.enqueue(Element);
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

            <button className="rounded-xl md:text-lg text-sm w-full shadow-md mt-4 md:mt-0 md:ml-4  px-2 py-2 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" type='submit'>Enqueue</button>
        </form>

        <div className="flex flex-col mt-4 border border-gray-100 rounded shadow p-4">
            <h1 className="font-bold text-xl text-primary capitalize">{`Size of Queue: ${QueueData.size}`}</h1>
            <h1 className="font-bold text-xl text-primary ">{`First element: ${QueueData.topElement ? QueueData.topElement : "No element"}`}</h1>

            <button className="flex-shrink rounded-xl mt-4 md:text-lg text-sm w-full shadow-md my-2 mx-2 px-6 py-1 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" onClick={dequeue}>Dequeue</button>
        </div>

        <h1 className="font-bold text-xl shadow rounded border-gray-100 mt-4 p-4 text-primary">{((QueueData.allElements.length !== 0) ? `Elements : ${QueueData.allElements.map((value, index) => (`${value} `))}` : "Queue is empty")}</h1>

    </div>);
}


export default Queue;