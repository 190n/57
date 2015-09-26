// Given a number of values per character and length of the shortlink's ID,
// return a function to generate a suitable randomized ID.

module.exports = function(values, length) {
    // Calculate the maximum value for the random number calculated.
    var rmax = Math.pow(values, length);

    // Return a function to generate an ID.
    return function() {
        // Generate a random integer from 0 to rmax, and convert it to a string
        // with the radix specified when this function was created.
        var str = Math.floor(Math.random() * rmax).toString(values);
        // If the string's length is less than the specified length, pad it with
        // 0s at the beginning until it is the correct length.
        while(str.length < length) str = '0' + str;
        // Return the string.
        return str;
    };
};