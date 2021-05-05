const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
    // sort the incoming word and store separately
    this.lower_sorted = this.sortWord(this.word); 
}

AnagramFinder.prototype.findAnagrams = function(otherWords) {
    const anagrams = otherWords.filter((word) => {
        // 1: compare sorted words                         2: check for duplicate words 
        return (this.sortWord(word) === this.lower_sorted) && (this.word !== word.toLowerCase());
    });
    return anagrams;
};

AnagramFinder.prototype.sortWord = function(word) {
    // make the word lowercase, split into a character array, sort it (ascending or descending doesnt matter), 
    // then join the letters again to make a sorted string. 
    return word.toLowerCase().split("").sort().join("");
}

module.exports = AnagramFinder;
