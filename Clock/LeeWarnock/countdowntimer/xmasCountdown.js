//set target date
const deadline = 'December 31 2020';

//Calculate remaining time
function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

//Create Date.parse function and store in total
const total = Date.parse(endtime) - Date.parse(new Date());

//Convert milliseconds to days, hours, minutes, seconds
const seconds = Math.floor( (t/1000) % 60 );

//Return the converted milliseconds to a reusable object
return {
  total,
  days,
  hours,
  minutes,
  seconds
};

//Get time remaining in minutes
getTimeRemaining(deadline).minutes
