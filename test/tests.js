(function () {
    "use strict";

    test( "addLeadingZero adds a leading zero to a number less than 10 (used in simpleDate)", function() {
        var input = 7;
        equal( DU.addLeadingZero(input), "07", true );
        var input = 2;
        equal( DU.addLeadingZero(input), "02", true );
        var input = 0;
        equal( DU.addLeadingZero(input), "00", true );
    });

    test( "simpleDate returns the date as YYYY-MM-DD when you give it a Full JS Date object", function() {

        var input, DD, MM, YYYY, expect;
        input  = new Date()
        DD     = input.getDate();
        MM     = input.getMonth()+1;    // +1 because January is 0!
        YYYY   = input.getFullYear();
        expect = YYYY+"-"+DU.addLeadingZero(MM)+"-"+DU.addLeadingZero(DD);

        equal( DU.simpleDate(input), expect, true );
        equal( DU.simpleDate(), expect, true );       // without input, expect same result

    });

    test( "parseDate returns a full JS Date object for a simple date (YYYY-MM-DD)", function() {
        // exclude the time from expectation 
        var now, simple, DD, MM, YYYY, nyd, nydSimple;
        now    = new Date();           // date to use below
        simple = DU.simpleDate(now);   // simple format YYYY-MM-DD (no time)
        DD     = now.getDate();
        MM     = now.getMonth();
        YYYY   = now.getFullYear();
        expect = new Date(YYYY, MM, DD);
        // console.log("Simple :", simple)
        // console.log("Expect :", expect.toString());
        // console.log("Got    :", DU.parseDate(simple).toString());
        // comparing two objects requires deepEqual: https://api.qunitjs.com/deepEqual/
        deepEqual( DU.parseDate(simple), expect, true );

        // New Year's Day
        nyd       = new Date(2014, 0, 1);
        // console.log("New Year's Day: ",nyd.toString());
        nydSimple = DU.simpleDate(nyd);
        deepEqual( DU.parseDate(nydSimple), nyd, true );
    });

    test( "addDayToDate adds a day to date in full JS or simple format", function() {
        // New Year's Eve
        var newYearsEve, nextDay, nextDaySimple;
        newYearsEve = new Date(2014, 11, 31);
        nextDay = DU.addDayToDate(newYearsEve);
        nextDaySimple = DU.simpleDate(nextDay);
        equal( nextDaySimple, "2015-01-01", true );

    });


    test( "addDayToDate leap year test 2016-02-28 + 1 = 2016-02-29", function() {
        // New Year's Eve
        var leapYearTest, nextDay, nextDaySimple;
        // Leap Year Test expect nextDay to be 2016-02-29
        leapYearTest = "2016-02-28";
        nextDay = DU.addDayToDate(leapYearTest);
        nextDaySimple = DU.simpleDate(nextDay);
        equal( nextDaySimple, "2016-02-29", true );

    });

    test( "dateRange returns an array of dates between startDate and endDate", function() {
        // New Year's Eve
        var dateRange = ["2014-01-01", "2014-01-02", "2014-01-03", "2014-01-04"],
            startDate = "2014-01-01", endDate = "2014-01-04";
        deepEqual(DU.dateRange(startDate, endDate), dateRange, true);

    });

    test( "dateRange returns an array of dates without endDate", function() {
        // New Year's Eve
        var d, today, week, oneWeekAgo, dateRange = [];
        today = new Date();
        week  = 7 * 24 * 60 * 60 * 1000; 
        oneWeekAgo = new Date(today.getTime() - week);
        d = oneWeekAgo;
        while(d < today) {
            dateRange.push(DU.simpleDate(d));
            d = DU.addDayToDate(d);
        }
        dateRange.push(DU.simpleDate(d));

        deepEqual(DU.dateRange(DU.simpleDate(oneWeekAgo)), dateRange, true);

    });


}());