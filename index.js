// Code your solution in this file!
function distanceFromHqInBlocks(station) {
    return Math.abs(station - 42);
  }
  
    console.log(distanceFromHqInBlocks(50)); // 8
    console.log(distanceFromHqInBlocks(43)); // 1
    console.log(distanceFromHqInBlocks(34)); // 8


function distanceFromHqInFeet(station) {
        const blocks = distanceFromHqInBlocks(station);
        const feet = blocks * 264;
        return feet;
      }
      console.log(distanceFromHqInFeet(50)); // 2112
      console.log(distanceFromHqInFeet(34)); // 2112
      console.log(distanceFromHqInFeet(43)); // 264
      

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const travel = Math.abs(destination - start) * 264;
    return(travel)
  }

  console.log(distanceTravelledInFeet(43, 48));
  console.log(distanceTravelledInFeet(50, 60));
  console.log(distanceTravelledInFeet(34, 28));//1584

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

  console.log(calculatesFarePrice(43, 44));
  console.log(calculatesFarePrice(34, 32));
  console.log(calculatesFarePrice(50, 58));
  console.log(calculatesFarePrice(34, 24));
  