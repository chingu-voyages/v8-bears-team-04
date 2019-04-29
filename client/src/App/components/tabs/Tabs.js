import React, {useState} from 'react';

import './tabs.scss';

import MarkTab from './MarkTab';
import ListTab from './ListTab';
import SearchTab from './SearchTab';

function Tabs(){

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="tabs-container">
            <h2 className="hidden">Map - Cockpit</h2>
            <nav>
                <ul className="nav-tabs">
                    <li 
                        className={activeTab === 0 && "active"}
                        onClick={() => setActiveTab(0)}
                    >
                        <span className="icon add-icon">&#43;</span>
                    </li>
                    <li 
                        className={activeTab === 1 && "active inverted"}
                        onClick={() => setActiveTab(1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                            <path
                                className="icon glass-icon"
                                d=" M 18,18
                                    m -8, 0
                                    a 8,8 0 1,0 16,0
                                    a 8,8 0 1,0 -16,0
                                    m 14,6
                                    l 8,8"
                            />
                        </svg>
                    </li>
                    <li 
                        className={activeTab === 2 && "active"}
                        onClick={() => setActiveTab(2)}
                    >
                        <span className="icon list-icon">&#926;</span>
                    </li>
                </ul>
            </nav>
            <div className={`content-window-tabs ${activeTab ===1 && "inverted"}`}>
                {activeTab === 0 && <MarkTab />}
                {activeTab === 1 && <SearchTab />}
                {activeTab === 2 && <ListTab />}
            </div>
        </section>
    );
};

export default Tabs;