import './home-body.scss';
import React from "react";
import { Link } from 'react-router-dom';

function HomeBody() {
    return (
        <div className="homeBody">
            <div class="apple">
                <div class="leaf"></div>
                <div class="stem"></div>
            </div>

            <div class="apple">
                <div class="leaf"></div>
                <div class="stem"></div>
            </div>
        </div>
    );
}

export default HomeBody;