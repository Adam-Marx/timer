secondsToWait = process.argv.slice(2)
.filter(second => !isNaN(second))
.filter(second => second >= 0);

for (const second of secondsToWait) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, second * 1000);
};
