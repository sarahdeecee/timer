const args = (process.argv).slice(2);
if (args.length < 1) {
  console.log("Please enter numbers for the timer");
  process.exit();
}
for (let arg of args) {
  if (arg > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  } else if (typeof arg !== 'number') {
    console.log("Please enter numbers only");
  }
}