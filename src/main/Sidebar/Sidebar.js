import React from "react";
import path from "./path";
import { Link } from "react-router-dom";


function Sidebar({ context }) {

    return (<nav className="m-4">
        <div className="pl-9">
            {path.map(({ heading, subpath }, index) => {
                return (
                    <div key={index}>
                        <h1 className="mb-3 text-lg text-primary font-bold">{heading}</h1>
                        <ul className="list-none">{subpath.map(({ title, path }) => {
                            return (<li className="text-gray-500 pl-2 pt-1 pb-2 focus:text-primary focus:bg-yellow-600 hover:bg-gray-200 rounded-lg" key={path}>
                                <Link to={{ pathname: path }}>{title}</Link>
                            </li>);
                        })}</ul>
                        <br />
                    </div>
                );
            })}
        </div>
    </nav>);
}

export default Sidebar;