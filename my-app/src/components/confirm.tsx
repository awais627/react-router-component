import {useNavigate} from "react-router-dom";

const Confirmed=()=>{
    const navigate=useNavigate()
    return(
        <>
        <div>
            Confirmed Order Thanks
            <button onClick={()=>navigate(-1)}>Previous Page </button>
        </div>
        </>
    )
}
export default Confirmed