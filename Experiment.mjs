import chalk from 'chalk';

const message = " She's like MELODY in my head, that's what she is  Cause she don't like ROSES! 😌✨ ";

const showInTerminal = (text) => {

    const arr = text.split(" ");
    let num = 0;

    setInterval(() => {
        if (arr[num] === 'ROSES!' || arr[num] === 'MELODY') {
            console.log(chalk.red.bold(arr[num]))
        }
        else if (arr[num] === undefined) {

        } else {
            console.log(arr[num])

        }

        num++;
    }, 800);

} // MAIN-LOOP 🔚 

showInTerminal(message);