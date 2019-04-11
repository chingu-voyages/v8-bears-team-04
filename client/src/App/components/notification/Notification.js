import React from 'react';

import './notification.scss';

function Notification({type, message}){
    return(
    <aside className={`notification ${type}`}>
        <span>{message}</span>
    </aside>
    );
};

export default Notification;