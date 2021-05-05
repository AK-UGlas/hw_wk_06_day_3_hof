const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

PangramFinder.prototype.isPangram = function () {
  isPangram = this.alphabet.every(letter => {
    return this.phrase.includes(letter);
  });
  return isPangram;
};

module.exports = PangramFinder;


let pangram = "the quick brown fox jumps over the lazy dog";
const pgFinder = new PangramFinder(pangram);

console.log(pgFinder.isPangram())