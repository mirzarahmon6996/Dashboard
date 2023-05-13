import Sidebtn from "../../component/sidebtn/sidebtn";
import Logo from "../../component/sidelogo/sidelogo";
import "./sidebar.scss"



const Sidebar = ({setTitle,title})=>{
    return(
        <div className="sidebar__wrapper ">
        <Logo/>
        <Sidebtn setTitle={setTitle} title={title} />
        </div>
    )
}

export default Sidebar