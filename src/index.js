 class CountdownTimer {
  constructor ({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();          
  }

start() {   
    this.getTimeComponents(0)
    
    setInterval(() => {
      let currentTime = Date.now();        
      const deltaTime =  this.targetDate -currentTime;      
      this.getTimeComponents(deltaTime);        
    }, 1000); 
  }  

  getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));  
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    console.log({days, hours, mins, secs});
      document.querySelector('[data-value="days"]').innerHTML = days;
      document.querySelector('[data-value="hours"]').innerHTML = hours;
      document.querySelector('[ data-value="mins"]').innerHTML = mins;
      document.querySelector('[data-value="secs"]').innerHTML = secs;      
      }
            
    pad(value) {
      return String(value).padStart(2, '0');
    }   
  }; 
  
const timer = new CountdownTimer({ 
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

