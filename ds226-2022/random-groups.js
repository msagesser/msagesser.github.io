var array = ["elem1", "elem2", "elem3"],
randomElement = array.randomElement();


Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

