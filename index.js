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
    fill="white" x="125px" y="50%"
    dominant-baseline="central"
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
const ICONS="./icons";

main(`${PATH}/pixiv.svg`, `${ICONS}/pixiv_mono.svg`, 'Pixiv', '#0096fa', 300);
main(`${PATH}/twitter.svg`, `${ICONS}/twitter_mono.svg`, 'Twitter', '#1DA1F2', 350);
main(`${PATH}/osu.svg`, `${ICONS}/osu_mono.svg`, 'osu!', '#ff7cbb', 300);
main(`${PATH}/anilist.svg`, `${ICONS}/anilist_mono.svg`, 'AniList', '#3577ff', 350);
