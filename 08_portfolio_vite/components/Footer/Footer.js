import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
  ${Button("/icons/github.jpg", "GitHub", "https://github.com/MarioRivVal")}
  ${Button("/icons/linkedin.jpg", "LinkedIn", "https://www.linkedin.com/in/mario-valverde-web-developer/")}
</div>
`;