const obj = {
    items: [1,2,3,4],
    offset: 10,
    double: function () {
        return this.items.map(function (i) {
            return this.offset + (i * 2)
        }.bind(this))
    },
    triple: function () {
        return this.items.map(i => this.offset + (i * 3))
    }
}
