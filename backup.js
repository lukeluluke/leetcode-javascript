function IDsOfPackages(rideDuration, songDurations)
{
    // WRITE YOUR CODE HERE

    if (songDurations.length <=2) {
        return [];
    }

    let result = {};
    let pairs = [];
    let longestSong = 0;

    const totalDuration = rideDuration -30;
    for (let i =0; i<songDurations.length; i++) {
        if (result[songDurations[i]] !== undefined) {
            const longSong = Math.max(result[songDurations[i]], i);
            if (longSong > longestSong) {
                pairs[0] = [result[songDurations[i]], i];
            }
        } else {
            result[totalDuration-songDurations[i]] = i;
        }
    }
    // let index = 0;
    // let max = 0;
    // for (let i = 0; i<pairs.length; i++) {
    //     const duration = Math.max(songDurations[pairs[i][0]], songDurations[pairs[i][1]]);
    //     if (duration > max) {
    //         index = i;
    //         max = duration;
    //         console.log(max);
    //     }
    // }
    return pairs;
}

const nums = [30,30, 25, 35, 60];

console.log(IDsOfPackages(90, nums));
