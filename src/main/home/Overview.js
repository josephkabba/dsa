import { aboutText, displayImages } from "../../data/data";
import ImageContainer from "../ImageContainer/ImageContainer";
import ReactPlayer from "react-player/youtube";
import "../../style/topics.css";




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

        <div className="flex flex-col items-start w-full bg-white p-4 shadow mt-9 mb-6 rounded-lg">
            <h1 className="font-bold text-3xl text-primary ">A video about data structures and algorithms</h1>
            <div className="flex flex-col items-center w-full mt-5">
                <ReactPlayer className="reactplayer" url="https://www.youtube.com/watch?v=8hly31xKli0&t=1404s" width="100" />
            </div>
        </div>

        {/* <div className="w-full mt-6 bg-white p-4 rounded shadow">
            <h1 className="font-bold mt-3 mx-7 text-3xl text-primary">Videos</h1>
        </div> */}

    </div>);
}

export default Overview;