function totalBirdCount(birdsPerDay) 
{
    let sum = 0    
    for (let x of birdsPerDay)
    {
        sum += x
    }
    return sum
}

function birdsInWeek(birdsPerDay, week) {
    let end = week * 7
    let start = end - 7
    return totalBirdCount(birdsPerDay.slice(start, end))
}
function fixBirdCountLog(birdsPerDay) {
    for (let x = 0; x < birdsPerDay.length; x += 2) 
    {
        birdsPerDay[x] += 1;
    }
    return birdsPerDay;
  }

  console.log(fixBirdCountLog(
    [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]
));