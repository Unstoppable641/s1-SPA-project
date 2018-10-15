'use strict';

const sections = [
    ['login', 'окно логина'],
    ['profile', 'Мой профиль'],
    ['about', 'об игре'],
];



const nav = document.getElementById('navigation');
const application = document.querySelector('#application');

for (let section of sections) {
    const button = document.createElement('input');
    button.setAttribute('type','button');
    button.setAttribute('data-section', section[0]);
    button.value = section[1];
    nav.appendChild(button);
}

const LiveSectionsCollection = application.getElementsByTagName('section');

nav.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    console.log(sectionId);

    const LiveSectionsArray = Array.from(LiveSectionsCollection);

    LiveSectionsArray.forEach(function(sectionElement){
        sectionElement.hidden = true;
        if (sectionElement.id === sectionId) {
            sectionElement.hidden = false;
        }
    });
});