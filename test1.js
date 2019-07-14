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
        if(songDurations[i]<=totalDuration) {
            if (result[songDurations[i]] !== undefined) {
                const longSong = Math.max(songDurations[result[songDurations[i]]], songDurations[i]);
                console.log(longSong);
                if (longSong > longestSong) {
                    longestSong = longSong;
                    pairs[0] = [result[songDurations[i]], i];
                }
            } else {
                result[totalDuration-songDurations[i]] = i;
            }
        }

    }
    return pairs[0];
}

const nums = [100,180, 40, 120, 10];

console.log(IDsOfPackages(250, nums));
