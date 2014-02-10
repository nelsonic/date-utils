var DU = (function () { // If T (Timer) is not defined, create module
    "use strict";

    // if a number is below 10 and we want it to have a leading zero
    // 01 or 06 instead of 1 or 6 we need to add the leading zero mannually
    function addLeadingZero(input) {
        if(parseInt(input, 10) < 10){
            return "0"+input;
        } else {
            return input;  // no need ot add leading zero
        }
    }
     
    // Takes full JS Date e.g: Thu Feb 06 2014 13:04:44 GMT+0000 (GMT)
    // and returns YYYY-MM-DD e.g. 2014-02-06
    function simpleDate(input) {

        var DD, MM, YYYY;
        // if input is undefined or not a valid date
        if(typeof input === 'undefined' || !input.getDate()) {
            var input = new Date();            // today's date
        }

        DD            = input.getDate();
        MM            = input.getMonth()+1;    // +1 because January is 0!
        YYYY          = input.getFullYear();
        return YYYY+"-"+addLeadingZero(MM)+"-"+addLeadingZero(DD);
    }


    // We need to parse the first date in our learnersbydate series
    // parse a date in yyyy-mm-dd format return full JS Date object
    // see: http://stackoverflow.com/questions/2587345/javascript-date-parse
    var parseDate = function (input) {
        var parts = input.split('-'),
      // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        date = new Date(parts[0], parts[1]-1, parts[2]); // Note: months are 0-based
        // console.log(input +" >> " +date);
        return date;
    };
    // parseDate("2014-01-23");

    // Return the public facing methods for the App
    return {
        addLeadingZero: addLeadingZero,
        simpleDate: simpleDate,
        parseDate : parseDate
    };
}());