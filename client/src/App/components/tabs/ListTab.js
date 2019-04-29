import React, {useState} from 'react';

function ListTab() {
    const [activeList, setActiveList] = useState("my loved place");
    const [displayList, setDisplayList] = useState(false);
    const [displayPlace, setDisplayPlace] = useState(false);

    let lists = [
        "list one",
        "list two",
        "list three",
        "list four",
        "list five"
    ];

    let places = [
        "place one",
        "place two",
        "place three",
        "place four",
        "place five"
    ];

    function selectPlace(e) {
        // go to place
        setDisplayPlace(false);
    };
    
    function selectList(e) {
        setActiveList(e.target.innerText);
        setDisplayList(false);
    };

    function toggleList(){
        setDisplayPlace(false);
        setDisplayList(!displayList);
    };

    function togglePlace(){
        setDisplayList(false);
        setDisplayPlace(!displayPlace);
    };

    return(
        <>
            <div className="row toggle-list">
                <div 
                    className="info button-like"
                    onClick={toggleList}
                >
                    Active List: {activeList}
                </div>
                <ul className={`hidden-list ${displayList ? "" : "hidden"}`} >
                {lists.map(list => {
                    return (
                        <li onClick={selectList} >
                            {list}
                        </li>
                        );
                })}
                </ul>
            </div>
            <div className="row toggle-list">
                <div 
                    className="inverted-info button-like"
                    onClick={togglePlace}
                >
                    Go to place
                </div>
                <ul className={`hidden-list ${displayPlace ? "" : "hidden"}`} >
                {places.map(place => {
                    return (
                        <li onClick={selectPlace} >
                            {place}
                        </li>
                        );
                })}
                </ul>
            </div>
        </>
    );
};

export default ListTab;