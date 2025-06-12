// Code your solution in this file!
function distanceFromHqInBlocks(station) {
    return Math.abs(station - 42);
  }
  
    console.log(distanceFromHqInBlocks(50)); // 8
    console.log(distanceFromHqInBlocks(43)); // 1
    console.log(distanceFromHqInBlocks(34)); // 8
    // console.log(distanceFromHqInBlocks())


    function distanceFromHqInFeet(station) {
        const blocks = distanceFromHqInBlocks(station);
        const feet = blocks * 264;
        return feet;
      }
      console.log(distanceFromHqInFeet())

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const travel = Math.abs(destination - start) * 264;
    return(travel)
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  