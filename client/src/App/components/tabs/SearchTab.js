import React, {useState} from 'react';

import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

import ModalFormCoordinates from '../forms/ModalFormCoordinates';
import ModalFormZone from '../forms/ModalFormZone';

function SearchTab() {

    const {isOpen, toggle} = useModal();
    const [currentModal, setCurrentModal] = useState("");

    function setModal(modalForm) {
        setCurrentModal(modalForm);
        toggle();
    };

    function submitDataLL(lat, lng) {
        console.log('lat: ', lat);
        console.log('lng: ', lng);
    };

    function submitDataZone(zone) {
        console.log('zone: ', zone);
    };

    return(
        <>
            <div className="row">
                <button
                    className="theme-secondary-button row-button"
                    onClick={() => setModal("name")}
                >
                    Search places in a specific zone
                </button>
            </div>
            <div className="row">
                <button
                    className="theme-secondary-button row-button"
                    onClick={() => setModal("LL")}
                >
                    Go to coordinates
                </button>
            </div>
            <Modal 
                close={toggle} 
                isOpen={isOpen} 
                title={"Search Places"}
            >
              {currentModal === "LL" 
              ? <ModalFormCoordinates submitData={submitDataLL}/>
              : <ModalFormZone submitData={submitDataZone} />}
            </Modal>
        </>
    );
};

export default SearchTab;