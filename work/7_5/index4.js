// convert datetime
const gigasecond = (date) => {
    const gs = 1 * (10**12)
    const newDate = new Date(date)
    newDate.setMilliseconds(gs)
    return newDate
};

//fizbuzz ish
const convert = (input) => {
    let output = ''
    input % 3 === 0 ? output += 'Pling' : '';
    input % 5 === 0 ? output += 'Plang' : '';
    input % 7 === 0 ? output += 'Plong' : '';
    return output.trim() || input.toString();
};

//leapyear
const isLeap = (year) => {
    // if year divides evenly by 4 => if then is divisible by 100 or 400 => true else false 
    return year % 4 === 0 ? (year % 100 !== 0 || year % 400 === 0) : false;
}

console.log(isLeap(2015));