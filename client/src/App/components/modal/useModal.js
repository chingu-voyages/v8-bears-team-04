// credits to james King [UPMOSTLY]
// https://upmostly.com/tutorials/modal-components-react-custom-hooks/
import { useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        toggle
    };
};

export default useModal;