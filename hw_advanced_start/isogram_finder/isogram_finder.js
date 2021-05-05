const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split('').sort();
}

IsogramFinder.prototype.isIsogram = function () {
    isUnique = this.word.every((letter, index) => {
        return index === this.word.findIndex((first) => first===letter);
    });
    return isUnique;
}

module.exports = IsogramFinder;
