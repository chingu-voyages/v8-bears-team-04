import React, {useState, useEffect} from 'react'
import { useSpring, animated, config } from 'react-spring';

import './notification.scss'

const Notification = ({type, message}) => {
    
    const MARGIN_TOP = 50;
    const [position, setPosition] = useSpring(() =>({
        position: "absolute",
        top:-MARGIN_TOP,
        left: 0,
        right: 0,
        opacity: 0
    }));

    setPosition({
        to: async (next, cancel) => {
            await next({top: MARGIN_TOP, opacity: 1});
            await next({top: -MARGIN_TOP, opacity: 0});
        },
        from:{top: -MARGIN_TOP, opacity: 0},
        config: config.slow
    });    
        
    return (  
        <animated.div style={position}>
            <aside className={`notification ${type}`}>
                <span>{message}</span>
            </aside>
        </animated.div>
    );
};

const Display = ({data}) => {

    const [display, setDisplay] = useState(null)

    // unmount the notification component if mounted before to re-render it 
    // - the animation will restart
    // - notification types will not pass directly from one state to another
    //   (e.g. success notification does not become an error notification,
    //    if something changes it will restart as a brand new one instead)
    function displayNotification(){
        setDisplay(false);
        if(data) {
            setTimeout(() => setDisplay(true), 10);
        }
    }

    // Display one notification each time some data is passed in, 
    // even if they do not change (because data is an object)
    useEffect(() => {
        displayNotification();
    }, [data])

    return (
        display
        ?   <Notification type={data.type} message={data.message} />
        :   null
    )
}

export default Display;