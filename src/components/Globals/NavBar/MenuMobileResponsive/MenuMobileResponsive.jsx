import React, { useState } from "react";
import Toolbar from "./Toolbar";
import "./MenuMobileResponsive.css";
import SideDrawer from "./sidemenu/SideDrawer";
import BackDrop from "./backdrop/BackDrop";


// crea menu mobile, recibe itemlist --> son los links a mostrar en menu
const MenuMobileResponsive = ({itemlist, Css, theme}) => {
    
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen)       
    };

    const backDropClickHandler = () => {
        console.log('entro al backDropClickhandler')
        setSideDrawerOpen(false);
    };

    return (
        <div style={{ height: "100%", color: "red", backgroundColor: "gray" }} key="menuMobile">
            <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} itemlist={itemlist}  key="toolbar" />
            <SideDrawer show={sideDrawerOpen} itemlist={itemlist} css={Css} theme={theme} click={backDropClickHandler}  key="sideDrawer" />
            {sideDrawerOpen &&
                <BackDrop click={backDropClickHandler}  key="backDrop" />
            }
            {/* <main style={{ marginTop: "64px", backgroundColor: "yellow" }}>
                <p>This is the content</p>
            </main> */}
        </div>
    )
}

export default MenuMobileResponsive