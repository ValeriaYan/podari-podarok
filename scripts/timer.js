function getTimeRemaining(deadline){  
    const t = Date.parse(deadline) - Date.parse(new Date());  
    const seconds = Math.floor( (t/1000) % 60 );  
    const minutes = Math.floor( (t/1000/60) % 60 );  
    const hours = Math.floor( (t/(1000*60*60)) % 24 );  
    const days = Math.floor( t/(1000*60*60*24) );  

    return {  
     'total': t,  
     'days': days,  
     'hours': hours,  
     'minutes': minutes,  
     'seconds': seconds  
    };  
}


function initializeClock(id) {
    const timer = document.getElementById(id);
    const deadline = timer.dataset.deadline;
    
    const days = timer.querySelector('.Timer_days');
    const hours = timer.querySelector('.Timer_hours');
    const minutes = timer.querySelector('.Timer_minutes');
    
    function updateClock() {
        const t = getTimeRemaining(deadline);
        const stringDays = ('0' + t.days).slice(-2);
        const stringHours = ('0' + t.hours).slice(-2);
        const stringMinutes = ('0' + t.minutes).slice(-2);

        days.firstElementChild.textContent = stringDays[0]
        days.lastElementChild.textContent = stringDays[1];
    
        hours.firstElementChild.textContent = stringHours[0]
        hours.lastElementChild.textContent = stringHours[1];
    
        minutes.firstElementChild.textContent = stringMinutes[0]
        minutes.lastElementChild.textContent = stringMinutes[1];
    
        if(t.total<=0){  
            clearInterval(timeInterval);  
        } 
    }

    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
}


initializeClock('timer');