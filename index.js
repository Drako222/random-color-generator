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

/* import emoji from 'node-emoji';

// const index = Math.floor(Math.random()) * 10 * emojis.length;

console.log(emoji.get(process.argv[2]));

if (process.argv.length > 2 && emoji.hasEmoji(process.argv[2])) {
  console.log(emoji.get(process.argv[2]));
} else if(process.argv.length > 2 && !emoji.hasEmoji(process.argv[2])) {
  console.log("Invalid emoji");
} else {
  console.log(emoji.random().emoji));
}

if (process.argv.length < 3) {
  console.log(emoji.random().emoji)
} else if (emoji.hasEmoji(process.argv[2]){
  console.log(emoji.get(process.argv[2]));
} else {
  console.log("Invalid emoji");
}

} else ) {
} else {
  );
} */
