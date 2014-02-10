Date Utils [![Code Climate](https://codeclimate.com/github/nelsonic/date-utils.png)](https://codeclimate.com/github/nelsonic/date-utils)
====

A handful of useful (unit tested) JavaScript date methods

![Tests Passing](http://i58.tinypic.com/71gw0g.png "Tests Passing")


### Why?

Why build *another* date utilities library when *several* already exist?
(see list below)

- For fun. 
- Coding (JS TDD) practice
- Discover interesting features
- only build/load what I need (*minimalist*)

### Try it

```sh
git clone git@github.com:nelsonic/date-utils.git
cd date-utils
python -m SimpleHTTPServer
```
Then visit: http://localhost:8000/?coverage=true/


## Background / Researh

If you have never played with JavaScript **Date** try the
comprehensive introduction to the JavaScript Date <br />
(*built-in methods*) on **M**ozilla **D**eveloper **N**etwork:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date



### Existing (Popular) JS Date Libaries

- Moment.js: http://momentjs.com/
- Date.js: http://www.datejs.com/
- Node Date Utils: https://github.com/JerrySievert/node-date-utils

### Other JS Related Libraries (Low Usage)

- Ago: https://github.com/brycebaril/node-ago 
(two elegant methods, simple tests, low traction)
- To-date https://github.com/vesln/to-date 
(good tests. *zero* watchers! strange... uses **ago** see above)
- JS Date https://github.com/coolaj86/javascript-date (rudimentary tests)
- DT: https://github.com/peterbraden/dt.js (namespace squatting)


#### Name

**Date Uitls** is prety generic but tells people exactly what 
the script does.

### JSHint for test.js

see: https://gist.github.com/zackd/794998