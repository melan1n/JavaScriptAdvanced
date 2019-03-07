function timer() {
      let secondsSpan = $('#seconds');
      let minutesSpan = $('#minutes');
      let hoursSpan = $('#hours');
      let isTicking = false;
    
      let timer;
    
      //events
        $('#start-timer').on('click', function(){
          if(!isTicking){
            timer = setInterval(secondsUpdate, 1000);
            isTicking = true;
          }
      });
    
      $('#stop-timer').on('click', function(){
          if(isTicking){
            clearInterval(timer);
            isTicking = false;
          }
      });
    
      function secondsUpdate(){
         secondsSpan.text(formatter(+secondsSpan.text() + 1));

         if(+secondsSpan.text() === 60){
            secondsSpan.text('00');
            minutesSpan.text(formatter(+minutesSpan.text() + 1));
         } else if(+minutesSpan.text() === 60){
            minutesSpan.text('00');
            hoursSpan.text(formatter(+hoursSpan.text() + 1));
         }
      }

      function formatter(time){
         return ("0" + time).slice(-2);
      }
    }
    
