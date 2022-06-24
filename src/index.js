import memeMaker from "@erickwendel/meme-maker";

const options = {
  image: './img/sorry.jpg',       // Required
  outfile: './img/spiderman-meme.png',  // Required
  topText: 'irineu',                    // Required
  bottomText: 'você não sabe nem eu',           // Optional
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));