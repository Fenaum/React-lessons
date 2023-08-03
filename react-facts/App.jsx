import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

    function toggle() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    };

    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggle}
            />
            <Main
            darkMode={darkMode}
            />
        </div>
    )
}