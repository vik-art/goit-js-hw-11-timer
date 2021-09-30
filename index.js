const refs = {
    daysRef: document.querySelector('span[data-value="days"]'),
    hoursRef: document.querySelector('span[data-value="hours"]'),
    minutesRef: document.querySelector('span[data-value="mins"]'),
    secondsRef: document.querySelector('span[data-value="secs"]')
}


class CountdownTimer {
    constructor({ targetDate, onTick}) {
        this.targetDate = targetDate,
        this.onTick = onTick,
        this.start()
    }
    start() {
        setInterval ( () =>{
        const cutterntTime = Date.now();
        const deltaTime = this.targetDate - cutterntTime;
        const time = this.getTimeComponents(deltaTime);
        this.onTick(time)
        }, 1000) 
    }    
    getTimeComponents(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
   //     console.log(`${days} :: ${hours} :: ${mins} :: ${secs}`);
    }
    pad(value) {
        return String(value).padStart(2, '0');
      }
    }
const timer = new CountdownTimer({    
    selector: '#timer-1',
    targetDate: new Date('Dec 01, 2021'),
    onTick: updateClockFace
})
function updateClockFace({days, hours, mins, secs}) {
    refs.daysRef.textContent = `${days}`,
    refs.hoursRef.textContent = `${hours}`,
    refs.minutesRef.textContent = `${mins}`,
    refs.secondsRef.textContent = `${secs}`
}