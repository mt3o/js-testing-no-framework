// app.js
self.myapp = myapp; // All the methods in myapp will be exposed globally

myapp.sum = function(a, b) {
  return a + b;
}

// test.js
function it(desc, fn) {
  try {
    fn();
    console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
  } catch (error) {
    console.log('\n');
    console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
    console.error(error);
  }
}

function assert(condition) {
  if (!condition) {
    throw new Error();
  }
}

it('should return a sum of two integers', function(){
  assert(myapp.sum(5, 10) === 15);
});


// test.html - This is your test runner for the front end
<html>
...
<body>
...
<script src="app.js"></script>
<script src="test.js"></script>
</body>
</html>
