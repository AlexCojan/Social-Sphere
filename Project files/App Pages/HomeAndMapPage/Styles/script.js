const list = document.querySelectorAll('.list');

function setActiveLink() {
    const currentPageId = document.body.id;
    list.forEach((item) => item.classList.remove('active'));

    if (currentPageId) switch (currentPageId) {
        case 'home-page':
            list[0].classList.add('active');
            break;
        case 'create-event-page':
            list[1].classList.add('active');
            break;
        case 'view-events-page':
            list[2].classList.add('active');
            break;
        case 'profile-page':
            list[3].classList.add('active');
            break;
        default:
            break;
    }
}

setTimeout(setActiveLink, 100); // Delay execution by 100 milliseconds

list.forEach((item) =>
    item.addEventListener('click', setActiveLink));