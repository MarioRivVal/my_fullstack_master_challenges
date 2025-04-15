import "./index.css";
import { Home } from "../pages/Home/Home.js";
import { loadTheme } from "../utils/loadTheme.js";
import { Loader } from "./components/loader/Loader.js";

loadTheme();
Home();
