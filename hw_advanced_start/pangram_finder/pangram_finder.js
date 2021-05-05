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
