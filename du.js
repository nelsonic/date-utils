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
        if(typeof input === 'undefined') {
            input = new Date();            // today's date
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
        date = new Date(parts[0], parts[1]-1, parts[2]); // Note: months are 0-based
        // console.log(input +" >> " +date);
        return date;
    };

    // addapted from :https://github.com/brycebaril/node-ago/blob/master/index.js
    function addDayToDate(input) {
        var day, ms, nextDay;
        // if(typeof input === 'undefined') {
        //     console.log("No input supplied to addDayToDate!");
        //     return false;
        // }

        if(typeof input !== "object") {
            // console.log("Parsing date ... "+input);
            input = parseDate(input);
        }
        ms = input.getTime();
        day = 1000 * 60 * 60 * 24;
        nextDay = new Date(ms + day);
        // console.log(input + " | +1 day >> " +nextDay);
        return nextDay;
    }


    // returns array of days between startDate and endDate
    // endDate defaults to today if not specified
    // expects format YYYY-MM-DD
    function dateRange(startDate, endDate) {
        var d = parseDate(startDate), range = [];

        if(typeof endDate === 'undefined') {       // if endDate is not set
            endDate  = new Date();            // today's full JS date
            endDate  = simpleDate(endDate);
            endDate  = parseDate(endDate);
        } else {
            endDate = parseDate(endDate);
        }

        while(d < endDate) {
            range.push(simpleDate(d));
            d = addDayToDate(d);
        }
        range.push(simpleDate(endDate));

        return range;
    }


    // Return the public facing methods for the App
    return {
        addLeadingZero: addLeadingZero,
        simpleDate: simpleDate,
        parseDate : parseDate,
        addDayToDate: addDayToDate,
        dateRange: dateRange
    };
}());