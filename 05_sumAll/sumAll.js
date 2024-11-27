const sumAll = function(startNum, endNum) {
    let total = 0;


    if (Number.isInteger(startNum) && Number.isInteger(endNum)) {
        if (startNum < 0 || endNum < 0) {
            return "ERROR";
        }


        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                total += i;
            }
        }
        if (startNum > endNum){
            for (let i = startNum; i >= endNum; i--) {
                total += i;
            }
        }
    }

    else {
        return "ERROR";
    }

    

    return total;

};

// Do not edit below this line
module.exports = sumAll;
