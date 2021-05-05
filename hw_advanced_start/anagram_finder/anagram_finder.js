const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
    // sort the incoming word and store separately
    this.lower_sorted = this.sortWord(this.word); 
}

AnagramFinder.prototype.findAnagrams = function(otherWords) {
    const anagrams = otherWords.filter((word) => {
        return this.sortWord(word) === this.lower_sorted && this.word !== word.toLowerCase();
    });
    return anagrams;
};

AnagramFinder.prototype.sortWord = function(word) {
    // sorting words to reveal anagrams
    // make the word lowercase, split into a character array, sort it (ascending or descending), 
    // then join the letters again to make a character-sorted word. 
    return word.toLowerCase().split("").sort().join("");
}

module.exports = AnagramFinder;
