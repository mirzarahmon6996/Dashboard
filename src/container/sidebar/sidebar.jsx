import Sidebtn from "../../component/sidebtn/sidebtn";
import Logo from "../../component/sidelogo/sidelogo";
import "./sidebar.scss"



const Sidebar = ()=>{
    return(
        <div className="sidebar__wrapper ">
        <Logo/>
        <Sidebtn/>
        </div>
    )
}

export default Sidebar