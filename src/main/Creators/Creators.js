import { creators } from "../../data/data";


function Creators() {

    return (<div className="flex flex-col h-full w-full">
        <div className="w-full bg-primary p-4 shadow rounded-lg">
            <h1 className="font-bold text-3xl m-2 text-white">Meet the creators</h1>
        </div>

        <div className="flex flex-col w-full items-center md:items-start bg-white mt-4 space-y-2 p-5 rounded-lg shadow">
            <ul className="space-y-3 w-full">{creators.map(({ name, regNo, studentNo, imageURL, personality }) =>
            (<li key={studentNo}>
                <div className="flex md:flex-row flex-col items-center">
                    <img src={imageURL} className="shadow rounded-full flex-none bg-darkOrange w-16 object-fill h-16 md:h-20 md:w-20" alt="" />
                    <div className="flex flex-col mx-3 mt-3 items-center md:items-start w-full">
                        <h1 className="text-lg md:text-xl text-primary capitalize font-bold">{name}</h1>
                        <h1 className="text-lg md:text-xl text-primary capitalize font-bold">{regNo}</h1>
                        <h1 className="text-lg md:text-xl text-primary capitalize font-bold">{studentNo}</h1>
                        <hr className="bg-gray-400 w-full mt-3 mb-4" />
                    </div>
                </div>

                <div className="w-full mb-14 bg-primary p-4 shadow rounded-lg">
                    <h1 className="text-xl mb-2 md:text-2xl text-white capitalize font-bold">personality</h1>
                    <h1 className="text-lg md:text-xl text-white font-bold">{personality}</h1>
                </div>
            </li>)
            )}</ul>
        </div>
    </div>);
}

export default Creators;