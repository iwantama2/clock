let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

let hrta = document.querySelector('#hrta');
let mnta = document.querySelector('#mnta');
let scta = document.querySelector('#scta');

let hrt = document.querySelector('#hrt');
let mnt = document.querySelector('#mnt');
let sct = document.querySelector('#sct');

setInterval(() =>{

    // WIB
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // WITA
    let dayta = new Date();
    let hhta = (day.getHours() + 1) * 30;
    let mmta = day.getMinutes() * 6;
    let ssta = day.getSeconds() * 6;

    hrta.style.transform = `rotateZ(${hhta +(mm / 12)}deg)`;
    mnta.style.transform = `rotateZ(${mmta}deg)`;
    scta.style.transform = `rotateZ(${ssta}deg)`;

    // WIT
    let dayt = new Date();
    let hht = (day.getHours() + 2) * 30;
    let mmt = day.getMinutes() * 6;
    let sst = day.getSeconds() * 6;

    hrt.style.transform = `rotateZ(${hht + (mm / 12)}deg)`;
    mnt.style.transform = `rotateZ(${mmt}deg)`;
    sct.style.transform = `rotateZ(${sst}deg)`;

    // Digital clock

    // WIB
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // Add 2 digit digital
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    // WITA
    let hoursta = document.getElementById('hoursta');
    let minutesta = document.getElementById('minutesta');
    let secondsta = document.getElementById('secondsta');

    let hta = new Date().getHours() + 1;
    let mta = new Date().getMinutes();
    let sta = new Date().getSeconds();

    // Add 2 digit digital
    hta = (hta < 10) ? "0" + hta : hta
    mta = (mta < 10) ? "0" + mta : mta
    sta = (sta < 10) ? "0" + sta : sta

    hoursta.innerHTML = hta;
    minutesta.innerHTML = mta;
    secondsta.innerHTML = sta;

    // WIT
    let hourst = document.getElementById('hourst');
    let minutest = document.getElementById('minutest');
    let secondst = document.getElementById('secondst');

    let htt = new Date().getHours() + 2;
    let mtt = new Date().getMinutes();
    let stt = new Date().getSeconds();

    // Add 2 digit digital
    htt = (htt < 10) ? "0" + htt : htt
    mtt = (mtt < 10) ? "0" + mtt : mtt
    stt = (stt < 10) ? "0" + stt : stt

    hourst.innerHTML = htt
    minutest.innerHTML = mtt;
    secondst.innerHTML = stt;
})
