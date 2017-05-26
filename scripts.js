function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({now, then});   // run test in console, timer(10)
}
