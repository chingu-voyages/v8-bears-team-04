import React from 'react';

import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

import ModalFormCoordinates from '../forms/ModalFormCoordinates';

function MarkTab() {

    const {isOpen, toggle} = useModal();

    function submitData(lat, lng) {
        console.log('lat: ', lat);
        console.log('lng: ', lng);
    }

    return(
        <>
            <div className="row">
                <button 
                    className="add-button row-button"
                >
                    Add mark at your location
                </button>
            </div>
            <div className="row">
                <button 
                    className="add-button row-button"
                    onClick={toggle}
                >
                    Add mark at specific coordinates
                </button>
            </div>
            <Modal 
                close={toggle} 
                isOpen={isOpen} 
                title={"Mark coordinates"}
            >
               <ModalFormCoordinates submitData={submitData}/>
            </Modal>
        </>
    );
};

export default MarkTab;