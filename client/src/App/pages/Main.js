import React from 'react';

import Tabs from '../components/tabs/Tabs';
import Modal from '../components/modal/Modal';
import useModal from '../components/modal/useModal';

function Main() {

    const {isOpen, toggle} = useModal();

    return (
        <div>
            <div className="placeholder"></div>
            <Tabs toggleModal={toggle} />
            <Modal close={toggle} isOpen={isOpen} />
        </div>
    );
};

export default Main;