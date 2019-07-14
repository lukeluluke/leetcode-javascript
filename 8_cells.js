function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE

    for (let i = 0; i<days; i++) {
        states = helper(states);
    }

    return states;
}

function helper(states) {
    const newCells = [];
    for (let i = 0; i<states.length; i++) {
        newCells.push((states[i-1] || 0) + (states[i+1] || 0) === 1? 1: 0);
    }

    return newCells;
}

const nums = [1, 0, 0, 0, 0, 1, 0, 0];

console.log(cellCompete(nums, 1));
