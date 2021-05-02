import { useState } from "react";
import fact from "../../datastructures/factorial/factorial";


function Factorial() {

    const [Value, setValue] = useState(0);
    const [Result, setResult] = useState(0);

    const onChangeValue = (value) => {
        let val = parseInt(value);

        if (Number.isNaN(val) || !Number.isInteger(val)) {
            val = 0;
        }

        setValue(val);
    };

    const submit = (e) => {
        e.preventDefault();
        const result = fact(((Value > 100) ? 0 : Value));
        setResult(result);
    };

    return (<div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl text-primary capitalize">Enter number</h1>

        <form onSubmit={submit} className="border border-gray-100 rounded shadow p-4">
            <input
                type="text"
                id="value"
                name="value"
                placeholder="value"
                value={Value}
                onChange={(e) => onChangeValue(e.target.value)}
                className="align-text-top focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md"
            />

            <button className="rounded-xl md:text-lg text-sm w-full mt-3 shadow-md px-3 py-2 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" type='submit'>Submit</button>
        </form>

        <h1 className="font-bold mt-3 text-2xl text-primary capitalize">{`Result: ${Result}`}</h1>
    </div>);
}

export default Factorial;