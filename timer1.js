
var args = process.argv.slice(2);

const timer = function(duration) {

  if(duration <= 0 || isNaN(duration)) {
  return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, duration);
}

timer(args);