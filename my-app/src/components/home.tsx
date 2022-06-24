import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

const Home: FC = () => {
    const navigate=useNavigate();
    return (
        <>
            <div>
                Home
                <button onClick={()=>navigate("confirmed")}>Place Order</button>
            </div>
        </>
    )
}
export default Home