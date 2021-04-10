import Siderbar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { useRef } from "react";
import Footer from "../Footer/Footer";

function Dashboard({ context, Component }) {

    const sidebarRef = useRef(null);
    const componentRef = useRef(null);

    //this function is statefull
    const stateCallBack = (navState = true) => {

        if (navState) {
            sidebarRef.current.style.width = "15rem";
            componentRef.current.style.marginLeft = "15rem";
        } else {
            sidebarRef.current.style.width = "0rem";
            componentRef.current.style.marginLeft = "0rem";
        }
    };


    return (<div className="flex flex-col md:min-h-screen w-full h-full bg-gray-50">
        <div className="fixed flex-none w-full">
            <Nav stateCallBack={stateCallBack} />
        </div>
        <div className="mt-14 flex flex-col">
            <div id="sidebar" ref={sidebarRef} className="w-60 fixed max-h-full bottom-0 top-14 left-0 overflow-x-hidden z-10 bg-white shadow" >
                <Siderbar context={context} />
            </div>
            <div id="component" ref={componentRef} className="ease-in-out ml-60 p-5">
                {Component ? <Component /> : <h1>No component</h1>}
                <div className="bottom-0">
                    <Footer />
                </div>
            </div>
        </div>
    </div>);
}

export default Dashboard;