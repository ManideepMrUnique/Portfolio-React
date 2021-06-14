import Typed from "react-typed";
import Details from './Details';
const Header=()=>{
    return (
       
        <div className="NotHead-wrapper">
        <div className="row">
            <div className="NotMain-info col">
                <Typed
                    className="NotTyped-text"
                    strings={["Hello!","My","Name","Is","Manideep"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
            </div>
            <div className="col details">
                <Details/>
            </div>
        </div>
        </div>
    );
}
export default Header;