const refs = {
timerEl: document.querySelector('#timer-1'),
daysEl: document.querySelector('[data-value="days"]'),
hoursEl: document.querySelector('[data-value="hours"]'),
minsEl: document.querySelector('[ data-value="mins"]'),
secEl: document.querySelector('[data-value="secs"]')
};
console.log(refs.timerEl);
console.log(refs.daysEl);
console.log(refs.hoursEl);
console.log(refs.minsEl);
console.log(refs.secEl);

 class CountdownTimer {
  constructor ({onTick}) {
    this.intervalId = null;
    this.onTick = onTick;

    this.init();   
  }
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

start() {
    const startTime = Date.now(); 

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000); 
  }
  

  stop() {
    clearInterval(this.intervalId);
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  
  getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));  
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return {days, hours, mins, secs};
    }
            
    pad(value) {
      return String(value).padStart(2, '0');
    }    
};

const timer = new CountdownTimer({
  onTick: updateClockface,
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
console.log(timer);

function updateClockface({ days, hours, mins, secs }) {
  console.log(`${days}:${hours}:${mins}:${secs}`); 
  return `${days}:${hours}:${mins}:${secs}`;
}
