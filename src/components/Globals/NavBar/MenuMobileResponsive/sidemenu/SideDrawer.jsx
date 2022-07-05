import React,{useContext} from "react"
import { List } from "./List"
import "./SideDrawer.css"
import { ThemeContext } from '../../../../Config/ThemeContext'
import { LanguageContext } from '../../../../Config/LanguageContext'
import * as Css from '../../NavBarCss'


export const SideDrawer = (props) => {
  const { language, changeLanguage } = useContext(LanguageContext)
  let drawerClasses = ["side-drawer"];


  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  return (  
    <nav className={drawerClasses.join(" ")} onClick={props.click} key="nav">   
      <List itemlist={props.itemlist} click={props.click} key="list"/>   
    </nav>
  );
};
export default SideDrawer;
