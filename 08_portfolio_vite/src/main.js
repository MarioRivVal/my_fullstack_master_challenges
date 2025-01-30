import './style.css'
import { changeTheme, Navbar } from "../components/Navbar/Navbar";
import { linkPage } from "../utils/linkPage";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
import { Divider } from "../components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());

//  Para enviar la mail: Proyecto 2: Portfolio - Vuestro Nombre
