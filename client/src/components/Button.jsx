import React from "react";
import { Link } from "react-router-dom";


export default function Button(props) {
    return (
        <>
            <Link
                to={props.link}
                className="flex items-center gap-2 px-6 py-1 rounded-full text-white text-center text-xl font-sans shadow-xl shadow-inner"
                style={{ backgroundColor: "#224C71" }}
            >
                {props.text}
                {props.children}
            </Link>
        </>
    );
}