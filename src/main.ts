
//  константы слип, которая присваивает на себя асинхронную функцию, принимающую на себя милисекунды, 
// и возвращающая Promis(переход к следующей функции) через заданное время в милисекундах 
const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// объявление функции, считающая сумму y и z, складывающая сумму в x, и возвращающая его
function sum() {
    let x: number
    let y = 15
    let z = 10; //объявление переменных
    x = z + y; //функция сложения
    return x; //возвращаем значение x 
}

// объявление функции, выводящая Йо, выводящая sum(), ожидающая константу sleep(), пока x меньше 10
async function consoleYo() {
    for (let x = 0; x < 10; x++) {   //  ->  https://www.tutorialsteacher.com/typescript/for-loop   
        console.log("!!!!!!!!!!Yo!!!!!!!!!"); // выводи то, шо в ковычках
        console.log(sum()); // выводим то, шо даёт ф-ция sum()
        await sleep(1000); // спим 1 сек.

    }
}
// объявление основной фунции main()
function main() { 
    consoleYo() ; // запускаем  consoleYo()
}

//////////////////////основной код программы///////////////////////

main(); // запускаем мэйн