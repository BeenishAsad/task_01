import React from "react";
import './styles.css';
import Logo from './Logo';

const LeftSide:React.FC = () => {
    return(
        <div className="Left-Side">
            <Logo/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</li>

            </ul>
        </div>
    );
};

export default LeftSide;