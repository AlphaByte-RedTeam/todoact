import React, { FC } from "react";
import ReactLogo from "../../public/assets/react-navbar.svg";
import SunIcon from "../../public/assets/icons/sun.svg";
import './Navigation.css';

const Navigation: FC = () => {
    return (
        <nav>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center space-x-4">
                    <img src={ReactLogo} alt="React Logo" />
                    <span className="text-logo">REACT TODO</span>
                </a>
                {/* TODO: Add toggle dark mode */}
            </div>
        </nav>
    )
}

export default Navigation;