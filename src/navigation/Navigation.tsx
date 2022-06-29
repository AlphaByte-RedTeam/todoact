import React, { FC } from "react";
import ReactLogo from "../../public/assets/react-navbar.svg";
import { UilSun, UilReact } from '@iconscout/react-unicons';
import '../../public/fonts.css';

const Navigation: FC = () => {
    return (
        <nav className="flex justify-center mx-20 my-10">
            <div className="flex-auto">
                <a href="#" className="flex item-center space-x-2">
                    <UilReact size="50" color="#61DAFB" />
                    <span className="font-sans text-4xl font-medium">REACT TODO</span>
                </a>
            </div>
            {/* TODO: Make dark mode */}
            <button className="border-4 rounded-xl border-dark-yellow p-2">
                <UilSun size="40" color="#FFAC33" />
            </button>
        </nav>
    )
}

export default Navigation;