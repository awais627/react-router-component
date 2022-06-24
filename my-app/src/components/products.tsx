import {Link, Outlet} from "react-router-dom";

const Products = () => {
    return (
        <>
            <div>
                <input placeholder="Search"/>
            </div>
            <nav className={"sub"}>
                <Link to="featured">Features</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet/>
        </>
    )
}
export default Products