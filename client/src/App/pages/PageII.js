import React from 'react';
import { Link } from 'react-router-dom';

function PageII() {
    return (
        <div className="App">
            <p>Yeah, links works. Gj.</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default PageII;