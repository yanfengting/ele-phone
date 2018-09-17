function distince(value) {
    if (typeof value === 'number') {
        return (value / 1000).toFixed(2) + 'km'
    }
}

module.exports = {
    distince
}