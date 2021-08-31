// Code your solution in this file!
const returnFirstTwoDrivers= function (array){
    return array.slice(0,2)
}

const returnLastTwoDrivers= function (array){
     return [array[array.length-2], array[array.length-1]] 
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier= function(fare){
  return function(integer){
      return fare * integer
  }

}

const fareDoubler= function (fare) { 
    return createFareMultiplier(fare)(2)
}
  
const fareTripler= function (fare) { 
    return createFareMultiplier(fare)(3)
}

// const createFareMultiplier = function (multiplyValue) {
//     return function (value) {
//       return multiplyValue * value;
//     };
//   };
  
//   const fareDoubler = createFareMultiplier(2);
  
//   const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback){
     return callback(drivers)
}