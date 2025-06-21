import React from "react";
import { Link } from "react-router-dom";


export default function BudgetBox(props) {
    return (
        <>
            <div className="w-40 h-80 rounded-xl flex justify-center pt-2" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} >
                <div className="w-37 h-20 bg-white rounded-xl flex flex-col justify-center items-center" >
                    <Link to={props.path}>
                        <p className="text-[#368727] text-xl">{props.cost}</p>
                    </Link>
                    <p>{props.category}</p>
                </div>
            </div>
        </>
    );
}