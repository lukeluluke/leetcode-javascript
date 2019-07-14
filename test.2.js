function optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList)
{
    // WRITE YOUR CODE HERE

    if (maxTravelDist<=0) {
        return  [];
    }
    const exactMatch = [];
    const lessMatch = [];
    let mostMatch = 0;
    for (let i = 0; i<forwardRouteList.length; i++) {
        const routes = forwardRouteList[i];
        const forwardDistance = routes[1];

        if (forwardDistance<=maxTravelDist) {
            for (let j = 0; j<returnRouteList.length; j++) {
                const returnDistance = returnRouteList[j][1];
                if (returnDistance <= maxTravelDist ) {
                    if((forwardDistance + returnDistance) === maxTravelDist) {
                        exactMatch.push([i+1, j+1]);
                    } else if ((forwardDistance + returnDistance)  < maxTravelDist) {
                        const distance = forwardDistance + returnDistance;
                        if (distance > mostMatch) {
                            lessMatch[0] = ([i+1, j+1]);
                            mostMatch = distance;
                        }
                    }
                }
            }
        }
    }

    if (exactMatch.length === 0 && lessMatch.length === 0) {
        return  [];
    } else {
        return  exactMatch.length === 0 ? lessMatch: exactMatch;
    }
}


const a = [[1, 8], [2, 7], [3,14]];
const b = [[1, 5], [2, 10], [3, 14]];
const d = 30;

console.log(optimalUtilization(d,  a,  b));
