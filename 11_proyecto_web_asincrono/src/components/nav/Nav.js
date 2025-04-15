import "./Nav.css";
import { searchIcon } from "../icons/searchIcon";

export const Nav = () => `
        <nav class="nav">
            <a id="homelink">
                <p class="logo"><span>find</span><span>it</span></p>
            </a>
            <div class ="nav__form-box">
                <form class="search-container">
                     <button class="icon-box" id="searchBtn">
                        ${searchIcon()}
                    </button>
               
                <input type="text" class="search-input" placeholder="OTHER CATEGORIES...">  
                </form>
                <div class="mode-box">
                    <button class="icon-box" id="themeBtn"></button>
                </div>
            </div>   
        </nav>
`;
