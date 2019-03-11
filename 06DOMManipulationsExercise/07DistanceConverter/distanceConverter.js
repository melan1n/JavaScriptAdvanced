function attachEventsListeners() {
    let btn = document.getElementById('convert');
    btn.addEventListener('click', convertDistance);
    distanceInMeters = 0;
    let result;

    function convertDistance() {
      let fromUnit = document.getElementById('inputUnits').value;
      let fromDistance = document.getElementById('inputDistance').value;
      
      if (fromUnit === 'km') {
        distanceInMeters = fromDistance * 1000;
      } else if (fromUnit === 'm') {
        distanceInMeters = fromDistance;
      } else if (fromUnit === 'cm') {
        distanceInMeters = fromDistance /100 ;
      } else if (fromUnit === 'mm') {
        distanceInMeters = fromDistance / 1000;
      } else if (fromUnit === 'mi') {
        distanceInMeters = fromDistance * 1609.34;
      } else if (fromUnit === 'yrd') {
        distanceInMeters = fromDistance * 0.9144;
      } else if (fromUnit === 'ft') {
        distanceInMeters = fromDistance * 0.3048;
      } else if (fromUnit === 'in') {
        distanceInMeters = fromDistance * 0.0254;
      }
    
      let outputUnit = document.getElementById('outputUnits').value;
      
      if(outputUnit === 'km'){
        result = distanceInMeters / 1000;
      } else if(outputUnit === 'm') {
        result = distanceInMeters;
      } else if(outputUnit === 'cm') {
        result = distanceInMeters * 100;
      } else if(outputUnit === 'mm') {
        result = distanceInMeters * 1000;
      } else if(outputUnit === 'mi') {
        result = distanceInMeters / 1609.34;
      } else if(outputUnit === 'yrd') {
        result = distanceInMeters / 0.9144;
      } else if(outputUnit === 'ft') {
        result = distanceInMeters / 0.3048;
      } else if(outputUnit === 'in') {
        result = distanceInMeters / 0.0254;
      }

      let outputField = document.getElementById('outputDistance');
      outputField.value = result;
    }
  }
  