
const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


function sum() {

}

async function consoleYo() {
    for (let x = 0; x < 10; x++) {
        console.log("!!!!!!!!!!Yo!!!!!!!!!");
        sum();
        await sleep(1000);

    }
}

function main() {
    consoleYo();
}

main();