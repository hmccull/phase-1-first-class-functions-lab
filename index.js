const returnFirstTwoDrivers = function(drivers) {
    const newArray = drivers.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function(drivers) {
    const newArray = drivers.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
  return function(value) {
      return fareMultiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
}