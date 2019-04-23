import React, {useState, useEffect} from 'react';

import './notification.scss';

function Notification({type, message, display}){

    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(display);
    },[display]);

    return(
    <div>
    {   mounted ? 
            <aside className={`notification ${type}`}>
                <span>{message}</span>
            </aside>
                :
        null
    }
    </div>
    );
};

export default Notification;