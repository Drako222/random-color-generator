import chalk from 'chalk';
import randomColor from 'randomcolor';

let color;

const lum = process.argv[3];
const hu = process.argv[2];

if (process.argv.length < 3) {
  color = randomColor();
} else {
  color = randomColor({
    luminosity: lum,
    hue: hu,
  });
}

const textblock = `###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`;

console.log(chalk.hex(color)(textblock));
