import { useState, useEffect } from "react";


function Nav({ stateCallBack }) {
    const [navState, setNavState] = useState(true);

    const changeNavState = () => { setNavState((preState) => (preState ? false : true)); };

    useEffect(() => {
        stateCallBack(navState);
    }, [navState, stateCallBack]);

    return (<nav className="h-14 shadow flex flex-row justify-start bg-white">
        <button className="ml-6 mr-2 self-center focus:outline-none" onClick={changeNavState}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 p-2 rounded-full hover:bg-gray-100" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <div className="flex flex-row self-center text-xl space-x-1 ml-3">
            <h1 className="text-darkOrange self-center font-bold">Group One</h1>
        </div>
    </nav>);
}

export default Nav;