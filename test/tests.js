(function () {
    "use strict";

    test( "addLeadingZero adds a leading zero to a number less than 10", function() {
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
        var now, simple, DD, MM, YYYY;
        now    = new Date();           // date to use below
        simple = DU.simpleDate(now);   // simple format YYYY-MM-DD (no time)
        DD     = now.getDate();
        MM     = now.getMonth();
        YYYY   = now.getFullYear();
        expect = new Date(YYYY, MM, DD);
        console.log("Simple :", simple)
        console.log("Expect :", expect.toString());
        console.log("Got    :", DU.parseDate(simple).toString());
        // comparing two objects requires deepEqual: https://api.qunitjs.com/deepEqual/
        deepEqual( DU.parseDate(simple), expect, true );
    });

}());