import React from "react";
import { Heart } from 'react-bootstrap-icons';

export default function Post(props) {
    return (
        <>
            <div className="w-80 h-75 gap-4 rounded-xl p-2 flex flex-col justify-between shadow-md" style={{ backgroundColor: "#D7E7D4" }}>
                <div className=" w-73 h-60 bg-white rounded-xl shadow-md mx-auto flex justify-center">
                </div>
                <div className="flex flex-col gap-2 pl-4 text-gray-500">
                    <Heart />
                    <p>insert comment here</p>
                </div>
            </div>
        </>
    );
}