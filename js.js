let secondsHand = document.querySelector('.hand.sec'),
    minutesHand = document.querySelector('.hand.min'),
    hoursHand = document.querySelector('.hand.hour'),
    date,
    hour,
    min,
    sec;

function clock() {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hour > 12 ? hour -= 12 : hour = hour;

    secondsHand.style.transform = `translate(-50%, -50%) rotate(${sec * 6}deg)`;
    minutesHand.style.transform = `translate(-50%, -50%) rotate(${min * 6}deg)`;
    hoursHand.style.transform = `translate(-50%, -50%) rotate(${(hour * 30) + ((min * 6) / 12)}deg)`;

}

let startClock = setInterval(() => {
    clock()
}, 100);

let switchingBtn = document.querySelector('.switch-mode span');

switchingBtn.onclick = function (e) {
    e.target.classList.toggle("dark");
    e.target.classList.toggle("light");

    if (e.target.classList.value.includes("light"))
        document.getElementsByTagName('html')[0].classList.add('light-mode');
    else
        document.getElementsByTagName('html')[0].classList.remove('light-mode');

}