import {
    PROFILE_PUBLICATIONS,
    HEADER_POPUP_BODY,
    CAROUSEL_NEXT_BUTTON,
    CAROUSEL_PREV_BUTTON,
    CAROUSEL_ARROW_WRAPPER,
    FULLSCREEN_MODAL,
    publicationImagesSrcArr
} from './constants';

const body = document.body;
const publicationImagesSrcArrLength = publicationImagesSrcArr.length;

export function addProfilePublications() {
    const footer = document.getElementById('footer');
    const publications = document.createElement('div');

    publications.id = PROFILE_PUBLICATIONS;
    publications.className = 'profile-publications feed';

    for (let index = 0; index < publicationImagesSrcArrLength; index++) {
        const publication = document.createElement('div');
        const img = document.createElement('img');

        publication.className = 'publication';
        img.className = 'publication-img';
        img.dataset.imgIndex = index;

        if (index === 0) {
            img.dataset.imageNext = index + 1 ;
        } else if (index === publicationImagesSrcArrLength - 1) {
            img.dataset.imagePrev = index - 1;
        } else {
            img.dataset.imagePrev = index - 1;
            img.dataset.imageNext = index + 1;
        }

        img.setAttribute('src', publicationImagesSrcArr[index]);
        img.setAttribute('alt', '');

        publication.append(img);
        publications.append(publication);
    }

    footer.before(publications);
}

export function addHeaderPopup() {
    const headerPopup = document.getElementById('headerPopupContainer');
    const headerPopupBody = document.createElement('div');
    const a = document.createElement('a');
    const i = document.createElement('i');

    headerPopupBody.className = "header-popup-body";
    headerPopupBody.id = HEADER_POPUP_BODY;
    a.setAttribute('href', 'https://www.instagram.com/k____margarita/');
    a.setAttribute('target', "blank");
    a.className = "pop-up-profile-option";
    i.className = "far fa-user-circle";
    a.append(i);
    a.append('Visit my Instagram account');

    headerPopupBody.append(a);
    headerPopup.append(headerPopupBody);

    document.addEventListener('click', handleProfilePopupOutsideClick);
}

export function removeHeaderPopup() {
    document.removeEventListener('click', handleProfilePopupOutsideClick);
    removeHeaderPopupBody();
}

export function showImgFullScreen(img) {
    const elemSrc = img.src;
    const imageFullscreenModal = document.createElement('div');
    const imageFullscreen = document.createElement('img');
    const closeButton = document.createElement('div');
    const carouselNextBtn = document.createElement('div');
    const btnNextIcon = document.createElement('i');
    const carouselPrevBtn = document.createElement('div');
    const btnPrevIcon = document.createElement('i');
    const closeIcon = document.createElement('i');
    const indexDataset = img.dataset.imgIndex;

    carouselNextBtn.id = CAROUSEL_NEXT_BUTTON;
    carouselPrevBtn.id = CAROUSEL_PREV_BUTTON;
    carouselNextBtn.className = CAROUSEL_ARROW_WRAPPER;
    carouselPrevBtn.className = CAROUSEL_ARROW_WRAPPER;
    btnNextIcon.className = 'fas fa-arrow-circle-right arrowIcon';
    btnPrevIcon.className = 'fas fa-arrow-circle-left arrowIcon';
    
    imageFullscreen.dataset.imgIndex = indexDataset;
    imageFullscreen.src = elemSrc;
    imageFullscreen.setAttribute('alt', 'fullImage');

    imageFullscreenModal.id = FULLSCREEN_MODAL;
    imageFullscreen.className = "fullscreen-img";
    closeButton.className = 'close-button';
    closeIcon.className = "fas fa-times";

    setImgSwitchingButtonsState(img, carouselNextBtn, carouselPrevBtn);

    closeButton.append(closeIcon);
    carouselPrevBtn.append(btnPrevIcon);
    carouselNextBtn.append(btnNextIcon);
    imageFullscreenModal.append(carouselPrevBtn);
    imageFullscreenModal.append(carouselNextBtn);
    imageFullscreenModal.append(imageFullscreen);
    imageFullscreenModal.append(closeButton);
    
    body.classList.add('noscroll');
    body.append(imageFullscreenModal);

    const fullscreenModal = document.getElementById(FULLSCREEN_MODAL);

    fullscreenModal.addEventListener('click', handleFullsreenImgOutsideClick);
}

function handleFullsreenImgOutsideClick(imgOutsideClickEvent) {
    const nextImgButton = imgOutsideClickEvent.path.find((elem) => {
        return elem.id === CAROUSEL_NEXT_BUTTON;
    });
    const prevImgButton = imgOutsideClickEvent.path.find((elem) => {
        return elem.id === CAROUSEL_PREV_BUTTON;
    });
    const didImgOutsideClick = 
        imgOutsideClickEvent.target.dataset.imgIndex === undefined &&
        !nextImgButton &&
        !prevImgButton;

    if (didImgOutsideClick) {
        removeFullscreenModal();

        return;
    }
    
    if (nextImgButton) {
        const carouselPrevBtn = document.getElementById(CAROUSEL_PREV_BUTTON);
        const imgIndexToSwitch = nextImgButton.dataset.imgIndexToSwitch;
        const imgToSwitch = document.querySelector(`[data-img-index='${imgIndexToSwitch}']`);
        
        switchFullscreenImgClickButton(imgToSwitch);
        setImgSwitchingButtonsState(imgToSwitch, nextImgButton, carouselPrevBtn);
    } else if (prevImgButton) {
        const carouselNextBtn = document.getElementById(CAROUSEL_NEXT_BUTTON);
        const imgIndexToSwitch = prevImgButton.dataset.imgIndexToSwitch;
        const imgToSwitch = document.querySelector(`[data-img-index='${imgIndexToSwitch}']`);

        switchFullscreenImgClickButton(imgToSwitch);
        setImgSwitchingButtonsState(imgToSwitch, carouselNextBtn, prevImgButton);
    }
}

function switchFullscreenImgClickButton(imgToSwitch) {
    const fullscreenModal = document.getElementById(FULLSCREEN_MODAL);
    const imgElem = Array.from(fullscreenModal.children).find((img) => {
        return img.dataset.imgIndex !== undefined;
    });

    imgElem.src = imgToSwitch.src;
    imgElem.dataset.imgIndex = imgToSwitch.dataset.imgIndex;
}

function setImgSwitchingButtonsState(img, carouselNextBtn, carouselPrevBtn) {
    if (img.dataset.imageNext) {
        carouselNextBtn.dataset.imgIndexToSwitch = img.dataset.imageNext;
        carouselNextBtn.classList.remove('hidden');
    } else {
        carouselNextBtn.classList.add('hidden');
        delete carouselNextBtn.dataset.imgIndexToSwitch;
    }

    if (img.dataset.imagePrev) {
        carouselPrevBtn.dataset.imgIndexToSwitch = img.dataset.imagePrev;
        carouselPrevBtn.classList.remove('hidden');
    } else {
        carouselPrevBtn.classList.add('hidden');
        delete carouselPrevBtn.dataset.imgIndexToSwitch;
    }
}

function removeFullscreenModal() {
    const fullscreenModal = document.getElementById(FULLSCREEN_MODAL);

    fullscreenModal.removeEventListener('click', handleFullsreenImgOutsideClick);
    document.getElementById(FULLSCREEN_MODAL).remove();
    body.classList.remove("noscroll");
}


function removeHeaderPopupBody() {
    document.getElementById(HEADER_POPUP_BODY).remove();
}

function handleProfilePopupOutsideClick(event) {
    if (event.target.id !== HEADER_POPUP_BODY){
        removeHeaderPopupBody();
    }
}