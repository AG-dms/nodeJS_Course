const colors = require('colors');

function trafficLights(arg1, arg2) {
  let color = 1;
  if (arg2 < 0) {
    console.log(colors.red('в диапазоне нет простых чисел.'));
  } else {
    for (let i = arg1; i <= arg2; i++) {
      for (let j = arg1 + 1; j < i; j++) {
        if (i % j === 0) {
          break;
        } else {
          if (color === 1) {
            console.log(colors.green(i));
            color += 1;
          } else if (color === 2) {
            console.log(colors.yellow(i));
            color += 1;
          } else if (color === 3) {
            console.log(colors.red(i));
            color = 1;
          }
          break;
        }
      }
    }
  }
}

trafficLights(1, 10);

// Если запускать программу передавая ей переменные через пробел node index.js 1 10
// а вызывать функции как указанно ниже, почему то работает не корректно
// trafficLights(process.argv[2], process.argv[3]);
