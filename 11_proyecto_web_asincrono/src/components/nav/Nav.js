import "./Nav.css";
import { filterIcon } from "../icons/filterIcon";
import { searchIcon } from "../icons/searchIcon";
import { sunIcon } from "../icons/sunIcon";
import { Button } from "../button/Button";

export const Nav = () => `
        <nav class="nav">
            <a id="homelink">
            <p class="logo"><span>find</span><span>it</span></p>
            </a>
            <div class="search-container">
                <button class="icon-box" id="searchBtn">
                    ${searchIcon()}
                </button>
               
                <input type="text" class="search-input" placeholder="BUSCA...">
                <button class="icon-box" id="filterBtn"> 
                    ${filterIcon()}
                </button>
            </div>
            <div class="mode-box">
                ${Button("favlink", "favoritos")}
                <button class="icon-box" id="themeBtn">
                </button>
            </div>
        </nav>
`;
