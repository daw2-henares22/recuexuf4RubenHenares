import { Link } from "react-router-dom";

export function Header(){
    return(
        <div>
          <Link to="/"><button className="btn btn-secondary ms-2">HOME</button></Link>
          <Link to="/login"><button className="btn btn-secondary ms-2">LOGIN</button></Link>
          <Link to="/signUp"><button className="btn btn-secondary ms-2">SIGNUP</button></Link>
        </div>
    )
}