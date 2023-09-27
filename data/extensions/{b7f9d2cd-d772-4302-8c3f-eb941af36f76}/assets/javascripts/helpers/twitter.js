/*
    Please remember to also update the src/manifest.json file 
    (content_scripts > matches, 'remove-twitter-sw.js') 
    when updating this list:
  */
const targets = [
  "twitter.com",
  "www.twitter.com",
  "mobile.twitter.com",
  "pbs.twimg.com",
  "video.twimg.com",
];
/*
    Please remember to also update the 
    src/assets/javascripts/remove-twitter-sw.js file 
    (const nitterInstances) when updating this list:
  */
const redirects = [
  "https://nitter.net",
  "https://nitter.unixfox.eu",
  "https://nitter.poast.org",
  "https://nitter.cz",
  "https://nitter.privacydev.net",
  "https://nitter.d420.de",
  "https://nitter.x86-64-unknown-linux-gnu.zip",
  "https://nitter.services.woodland.cafe",
  "https://nitter.catsarch.com",
  "https://nitter.perennialte.ch",
  "https://nitter.salastil.com",
  "http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion",
  "http://26oq3gioiwcmfojub37nz5gzbkdiqp7fue5kvye7d4txv4ny6fb4wwid.onion",
  "http://vfaomgh4jxphpbdfizkm5gbtjahmei234giqj4facbwhrfjtcldauqad.onion",
  "http://nitraeju2mipeziu2wtcrqsxg7h62v5y4eqgwi75uprynkj74gevvuqd.onion",
  "http://nitter.esmail5pdn24shtvieloeedh7ehz3nrwcdivnfhfcedl7gf4kwddhkqd.onion",
  "http://ibsboeui2im5o7dxnik3s5yghufumgy5abevtij5nbizequfpu4qi4ad.onion",
  "http://fbdi323aj3t6hdx4jtkuwxrnafzskquciowu2yu3jizfssaq35aow6ad.onion",
  "http://nitterqdyumlovt7tjqpdjrluitgmtpa53qq3idlpgoe4kxo7gs3xvad.onion",
  "http://aaaaaxx74hbzeibageieowryhsqvimbdiitfkfe47tvgawkwkjh3coqd.onion",
  "http://wiio4sgs4247brk7hj6qck2jxnvldwfdbguigc5ivpxrsegnliyfvuqd.onion",
  "http://qwikxx2erhx6qrymued6ox2qkf2yeogjwypqvzoif4fqkljixasr6oid.onion",
  "http://4g47cxugkohbweao2x66nnxxfoe3k7gdfzxej537nhdbwr522sbjxeqd.onion",
  "http://nt.vernccvbvyi5qhfzyqengccj7lkove6bjot2xhh5kajhwvidqafczrad.onion",
  "http://r2eqimhkvxboaltbdsectoo3hkf476pyemsdykclexzajbfx5v6ojlyd.onion",
  "http://a5xyidyppowvblric6k6nixgf2eqwnb7zzeaarj7slqbv7tb6ip5t3ad.onion",
  "http://bird.habeehrhadazsw3izbrbilqajalfyqqln54mrja3iwpqxgcuxnus7eid.onion",
  "http://codeine3hsqnnkb3dsu6ft4tunlomr3lmuml5hcoqmfkgiqfv2brdqqd.onion",
  "http://nitter.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion",
  "http://jdadsqkjereqronxzovgvd453snh5jsvo7mukfwt2feth353nobqotad.onion",
  "http://nitter.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
  "http://twitter.cepyxplublbyw2f4axy4pyztfbxmf63lrt2c7uwv6wl4iixz53czload.onion",
  "http://nitter.coffee2m3bjsrrqqycx6ghkxrnejl2q6nl7pjw2j4clchjj6uk5zozad.onion",
  "http://nitter.daturab6drmkhyeia4ch5gvfc2f3wgo6bhjrv3pz6n7kxmvoznlkq4yd.onion",
  "http://n.sneed4fmhevap3ci4xhf4wgkf72lwk275lcgomnfgwniwmqvaxyluuid.onion",
];

export default {
  targets,
  redirects,
};
