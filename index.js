// NOTE: To run NodeJS's debugger in terminal, use the 'node inspect index.js' command
// NOTE: Use the 'cont' command to step through code while using the debugger
// NOTE: Use the '.exit' command to exit the debugger at any time
let count = 1;
while (count < 5) {
    debugger;
    if (count === 1) {
	console.log(`The loop has executed ${count} time.`);
    } else {
	console.log(`The loop has executed ${count} times.`);
    }
    count += 1;
    debugger;
}
