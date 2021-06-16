 class CountdownTimer {
  constructor ({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();     
  }

start() {   
    this.getTimeComponents(0)

      setInterval(() => {
      const currentTime = Date.now();
      console.log(currentTime);
      const deltaTime = currentTime - this.targetDate;
      console.log(deltaTime);
      this.getTimeComponents(deltaTime);
      
    }, 1000); 
  }  
  getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));  
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    console.log({days, hours, mins, secs});
    return {days, hours, mins, secs};
    }
            
    pad(value) {
      return String(value).padStart(2, '0');
    }      
       
      daysEl = document.querySelector('[data-value="days"]').innerHTML = `${'days'}`;
      hoursEl = document.querySelector('[data-value="hours"]').innerHTML = `${'hours'}`;
      minsEl = document.querySelector('[ data-value="mins"]').innerHTML = `${'mins'}`;
      secEl = document.querySelector('[data-value="secs"]').innerHTML = `${'secs'}`;
};
 
  
new CountdownTimer({ 
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

