import { NavLink } from "react-router-dom"

export default function Signup() {
    return(
        <div>
            signup
            <NavLink to="../">
                <button className="bg-red-700">go to home page</button>
            </NavLink>
        </div>
    )
}