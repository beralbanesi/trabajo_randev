import Logo from "./Logo";
import SideMenu from "../MenuMobileResponsive/sidemenu/SideMenu";
import "./ToolBar.css";

const Toolbar = (props) => {
    return (
         <header className="toolbar" key="header">
            <nav className="relative" key="toolbar_navigator">               
                
                <div className="absolute left-0" key="toolbar_logo">
                    <Logo key="logo" />
                </div>
             
                <div className="absolute right-4 top-4" key="toggle-btn">
                    <SideMenu click={props.drawerToggleClickHandler} key="sidemenu" />
                </div>
                {/* <div className="spacer" key="spacer" />               */}
               
            </nav>
         </header>
    )
}

export default Toolbar;
