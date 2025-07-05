import "./navbar.css";
import { Button } from "../button/Button";
import { HomeIcon } from "../icons/general/HomeIcon";
import { LogoutIcon } from "../icons/general/LogoutIcon";

export const Navbar = (home: boolean):string => `
    <nav class="navbar">
     ${
       home
         ? Button({
             id: "btn-home",
             text: "Home",
             type: "button",
             className: "btn-home u-flex u-gap-small",
             icon: HomeIcon(),
           })
         : ""
     }              
        <div id="btn-logout" class="small-icon-box">
            ${LogoutIcon()}
        </div>
    </nav>


`;
