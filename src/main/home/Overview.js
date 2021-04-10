import { aboutText, displayImages } from "../../data/data";
import ImageContainer from "../ImageContainer/ImageContainer";


function Overview() {

    return (<div className="flex flex-col h-full w-full">

        <div className="w-full bg-primary p-4 shadow rounded-lg">
            <h1 className="font-bold text-3xl text-white">About</h1>
            <hr className="bg-white" />
            <p className="text-white font-bold text-xl mt-4 mb-2">{aboutText}</p>
        </div>

        <h1 className="text-4xl text-gray-700 font-bold mt-16">More Information</h1>
        <div className="bg-gray-700 rounded-xl h-0.5 w-full" />

        <div className="w-full mt-6 bg-white p-4 rounded shadow">
            <h1 className="font-bold mt-3 mx-7 text-3xl text-primary">Images</h1>
            <ImageContainer imageList={displayImages} />
        </div>

        {/* <div className="w-full mt-6 bg-white p-4 rounded shadow">
            <h1 className="font-bold mt-3 mx-7 text-3xl text-primary">Videos</h1>
        </div> */}

    </div>);
}

export default Overview;