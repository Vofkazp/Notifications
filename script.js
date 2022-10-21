const array = [
    {
        type: 'timer',
        title: 'Coffee Break',
        text: 'in 5 minute'
    },
    {
        type: 'error',
        title: 'Oh No',
        text: 'Something really bad happened'
    },
    {
        type: 'message',
        title: 'Changes saved',
        text: ''
    },
    {
        type: 'reminder',
        title: 'Reminder',
        text: 'You will receive more notifications'
    },
    {
        type: 'notifications',
        title: 'Notifications',
        text: 'Notifications may include alerts, sounds, and icon badges'
    },
    {
        type: 'upgrade',
        title: 'Upgrade Now',
        text: 'The current version will soon be obsolete. What are you waiting for?'
    },
];

const block = document.querySelector('.notifications-block');

function getElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function Close() {
    console.log();
}

function createBlock(el) {
    let element;
    switch(el.type) {
        case 'timer':
            element = `<div class="content"><div class="icon time"></div><div><h5 class="title">${el.title}</h5>
<p class="text">${el.text}</p></div></div><div class="button-block"><button class="btn" onclick="Close()">Close</button>
<button class="btn">Snooze</button></div>`;
            break;
        case 'error':
            element = `<div class="content"><div class="icon close"></div><div><h5 class="title">${el.title}</h5>
<p class="text">${el.text}</p></div></div><div class="button-block"><button class="btn">Close</button></div>`;
            break;
        case 'message':
            element = `<div class="content"><div class="icon ok"></div><div><h5 class="title">${el.title}</h5>
</div></div><div class="button-block"><button class="btn">Ok</button></div>`;
            break;
        case 'reminder':
            element = `<div class="content"><div class="icon warn"></div><div><h5 class="title">${el.title}</h5>
<p class="text">${el.text}</p></div></div><div class="button-block"><button class="btn">Close</button></div>`;
            break;
        case 'notifications':
            element = `<div class="content"><div class="icon warn"></div><div><h5 class="title">${el.title}</h5>
<p class="text">${el.text}</p></div></div><div class="button-block"><button class="btn">Don't Allow</button>
<button class="btn">Allow</button></div>`;
            break;
        case 'upgrade':
            element = `<div class="content"><div class="icon up"></div><div><h5 class="title">${el.title}</h5>
<p class="text">${el.text}</p></div></div><div class="button-block"><button class="btn">Install</button>
<button class="btn">Details</button></div>`;
            break;
    }
    return element;
}

function events() {
    document.querySelectorAll('.msg-item').forEach(item => {
        const btn = item.querySelector('.btn');
        btn.addEventListener('click', () => {
            item.classList.add('remove');
            setTimeout(()=>{item.remove()}, 900);
        });
    })
}

let timerId = setInterval(()=>{
    let div = document.createElement('div');
    div.innerHTML = createBlock(getElement(array));
    div.className = 'msg-item';
    block.append(div);
    setTimeout(()=>{block.lastChild.classList.add('add')}, 10);
    events();
}, 3000);

events();
