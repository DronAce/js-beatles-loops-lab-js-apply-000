// add solution here
function theBeatlesPlay(musicians , instruments) {
  var x = [];
  for (var i = 0; i < musicians.length; i++) {
      x.push(musicians[i] + ' plays ' + instruments[i]);
    }
  return x;
}

function johnLennonFacts(a) {
  var i= 0;
  while (i < a.length) {
    a[i] = a[i] + "!!!";
    i++
  }
  return a;
}

function iLoveTheBeatles() {
  var x = [];
  var i = 0;
  do-while( i < 15) {
    x[i] = ['I Love the Beatles!'];
    i++;
  }
  return x;
}
