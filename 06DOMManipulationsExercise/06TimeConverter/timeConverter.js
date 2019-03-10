function attachEventsListeners() {
    let buttons = document.querySelectorAll('[value="Convert"]');
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');


    for (let btn of buttons) {
        btn.addEventListener('click', convertTime);
    }

    function convertTime() {
        if (this.id === 'daysBtn') {
            convertFromDays(+daysElement.value);
        } else if(this.id === 'hoursBtn'){
            convertFromHours(+hoursElement.value);
        } else if(this.id === 'minutesBtn'){
            convertFromMinutes(+minutesElement.value);
        } else {
            convertFromSeconds(+secondsElement.value);
        }
    
    }

    function convertFromDays(days){
        hoursElement.value = days * 24;
        minutesElement.value = days * 24 * 60;
        secondsElement.value = days *  24 * 60 * 60;
    }

    function convertFromHours(hours){
        daysElement.value = hours / 24;
        minutesElement.value = hours * 60;
        secondsElement.value = hours * 60 * 60;
    }
    
    function convertFromMinutes(minutes){
        daysElement.value = minutes / 60 / 24;
        hoursElement.value = minutes / 60;
        secondsElement.value = minutes * 60;
    }

    function convertFromSeconds(seconds){
        daysElement.value = seconds / 60 / 60 / 24;
        hoursElement.value = seconds / 60 / 60;
        minutesElement.value = seconds / 60;
    }
    
}
