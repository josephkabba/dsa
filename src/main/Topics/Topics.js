import React from "react";
import ReactPlayer from "react-player/youtube";
import "../../style/topics.css";


function Topics({ data }) {

    console.log(data);

    return (<div className="flex flex-col h-full w-full">

        <div className="w-full bg-white p-4 shadow mb-6 rounded-lg">
            <h1 className="font-bold text-3xl text-primary capitalize">{data.name}</h1>
        </div>

        <div className="w-full bg-primary p-4 shadow rounded-lg">
            <h1 className="font-bold text-3xl text-white">Description</h1>
            <hr className="bg-white" />
            <p className="text-white font-bold text-xl mt-4 mb-2">{data?.description}</p>
        </div>

        <div className="flex flex-col items-start w-full bg-white p-4 shadow mt-9 mb-6 rounded-lg">
            <h1 className="font-bold text-3xl text-primary ">{`A video about ${data?.name}`}</h1>
            <div className="flex flex-col items-center w-full mt-5">
                <ReactPlayer className="reactplayer" url={data.video ? data.video : "https://www.youtube.com/watch?v=SoYWu9k1Yek&t=28s"} width="100"/>
            </div>
        </div>

        <div className="w-full bg-white mt-6 p-4 shadow rounded-lg">
            <h1 className="font-bold text-3xl text-primary">{`Implementation of ${data?.name}`}</h1>
            <hr className="bg-primary" />
            <div className="mt-4">
                {data.impl ? <data.impl /> : ""}
            </div>
        </div>

    </div>);
}

export default Topics;