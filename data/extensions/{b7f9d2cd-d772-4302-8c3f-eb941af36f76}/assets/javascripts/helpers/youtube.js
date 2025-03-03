const targets = [
  "m.youtube.com",
  "youtube.com",
  "img.youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
  "youtu.be",
  "s.ytimg.com",
  "music.youtube.com",
  "piped.video",
];
/*
    Please remember to also update the manifest.json file
    (content_scripts > matches, 'persist-invidious-prefs.js')
    when updating this list:
  */
const redirects = [
  "https://inv.nadeko.net",
  "http://inv.nadekonw7plitnjuawu6ytjsl7jlglk2t6pyq6eftptmiv3dvqndwvyd.onion",
];

export default {
  targets,
  redirects,
};
