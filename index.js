function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet)
};

function distanceFromHqInFeet(loc) {
    return distanceFromHqInBlocks(loc) * 264;
};

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
};

function calculatesFarePrice(start, destination) {
    route = distanceTravelledInFeet(start, destination);
    if (route > 2500){
        return "cannot travel that far";
    }
    else if (route < 400){
        return 0;
    }
    else if (route < 2000){
        return (route-400) * 0.02;
    }
    else if (route <= 2500){
        return 25;
    }
};