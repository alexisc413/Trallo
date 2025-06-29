import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import Post from "./Post"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { PlusCircle } from 'react-bootstrap-icons';

export default function Trips() {
    return (
        <>
            <div className="flex w-full h-screen px-8 mt-20 overflow-hidden">
                <div className="w-1/2 h-full overflow-y-auto pr-4 gap-4 flex flex-col items-center scrollbar-hide">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="w-1/2 h-full flex flex-col items-center gap-10 pl-4">
                    <h1 className="text-4xl">Travel Plans</h1>
                    <Button text={"Create A Trip "} link={"/dashboard"} >
                        <PlusCircle />
                    </Button>
                    <h2>Current Trips</h2>
                    <Button text={"Replace Later"} link={"/"} >
                        <ArrowRightCircle />
                    </Button>
                    <Button text={"Past Trip"} link={"/"} >
                        <ArrowRightCircle />
                    </Button>
                    <Button text={"Declined Trip"} link={"/"} >
                        <ArrowRightCircle />
                    </Button>

                </div>
            </div>
        </>

    );
}