import "./Nav.css";
import { filterIcon } from "../icons/filterIcon";
import { searchIcon } from "../icons/searchIcon";
import { sunIcon } from "../icons/sunIcon";
import { Button } from "../button/Button";

export const Nav = () => `
        <nav class="nav">
            <a id="homelink">
            <p class="logo"><span>create</span><span>it</span></p>
            </a>
            <div class="search-container">
                <div class="search-icon">
                    ${searchIcon()}
                </div>
                <input type="text" class="search-input" placeholder="BUSCA...">
                <button class="filter-button">
                    <div class="filter-icon">
                    ${filterIcon()}
                    </div>
                </button>
            </div>
            <div class="mode-box">
                ${Button("favlink", "favoritos")}
                ${sunIcon()}
            </div>
        </nav>
`;
