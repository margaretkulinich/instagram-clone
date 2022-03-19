import {
    HEADER_POPUP_BODY,
    PROFILE_PUBLICATIONS,
} from "./constants";
import { 
    removeHeaderPopup,
    addHeaderPopup,
    addProfilePublications,
    showImgFullScreen
} from "./helpers";

import './styles.scss';

addProfilePublications();

const headerPopupNavAvatar = document.getElementById('headerPopupNavAvatar');
const profilePublications = document.getElementById(PROFILE_PUBLICATIONS);

headerPopupNavAvatar.addEventListener('click', (event) => {
    const headerPopupBody = document.getElementById(HEADER_POPUP_BODY);

    if (headerPopupBody !== null) {
        removeHeaderPopup();
    } else {
        event.stopPropagation();

        addHeaderPopup();
    }
});

profilePublications.addEventListener('click', (event) => {
    const targetImage = Array.from(event.target.children).find((img) => {
        return img.dataset.imgIndex !== undefined;
    });
   
    if (!targetImage) {
        return;
    }

    showImgFullScreen(targetImage);
});



