import React, {useState} from 'react';

import './tabs.scss';

import MarkTab from './MarkTab';
import ListTab from './ListTab';
import SearchTab from './SearchTab';

function Tabs({toggleModal}){

    const [activeTab, setActiveTab] = useState(2);

    return (
        <section>
            <h2 className="hidden">Map - Cockpit</h2>
            <nav>
                <ul className="nav-tabs">
                    <li 
                        className={activeTab === 0 && "active"}
                        onClick={() => setActiveTab(0)}
                    >
                        One
                    </li>
                    <li 
                        className={activeTab === 1 && "active"}
                        onClick={() => setActiveTab(1)}
                    >
                        Two
                    </li>
                    <li 
                        className={activeTab === 2 && "active"}
                        onClick={() => setActiveTab(2)}
                    >
                        Three
                    </li>
                </ul>
            </nav>
            <p className="content-window-tabs">
                {activeTab === 0 && <MarkTab toggleModal={toggleModal} />}
                {activeTab === 1 && <SearchTab  toggleModal={toggleModal}/>}
                {activeTab === 2 && <ListTab />}
            </p>
        </section>
    );
};

export default Tabs;

/* 
    &#43;
	&#926;
 */