import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import CharactersPage from "./pages/charactersPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import './App.css';

//Install react -router -dom
//Wrap the application in BrowserRouter
//Set up the routes and route
//each rout wants a path and a an element
//set up user navigation using NavLink elements


export default function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>
  )
}