const fs = require('fs');

const svgBubble = (text, color) => `\
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font: 50px sans-serif;
    }
  </style>
  <rect
    fill="${color}"
    width="100%" height="100%" ry="50%"
  />
  <text
    fill="white" x="50%" y="50%"
    dominant-baseline="central" text-anchor="middle"
  >
    ${text}
  </text>
</svg>`

function main(filename, icon, text, color, width=400) {
  const svgIcon = fs.readFileSync(icon);
  fs.writeFileSync(filename, `\
<svg width="${width}" height="100" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  ${svgBubble(text, color)}${svgIcon}
</svg>`);
}

const PATH="./assets/badge";

main(`${PATH}/pixiv.svg`, `./icons/pixiv_mono.svg`, 'Pixiv', '#0096fa');
main(`${PATH}/twitter.svg`, `./icons/twitter_mono.svg`, 'Twitter', '#1DA1F2');
main(`${PATH}/osu.svg`, `./icons/osu_mono.svg`, 'osu!', '#ff7cbb');