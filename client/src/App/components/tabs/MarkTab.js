import React from 'react';

function MarkTab({toggleModal}) {
    return(
        <>
            <div className="row">
                <button className="add-button">
                    Add mark at your location
                </button>
            </div>
            <div className="row">
                <button 
                    className="add-button"
                    onClick={toggleModal}
                >
                    Add mark at specific coordinates
                </button>
            </div>
        </>
    );
};

export default MarkTab;