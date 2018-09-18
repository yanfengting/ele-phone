function distance(value) {
    if (typeof value === 'number') {
        return (value / 1000).toFixed(2) + 'km'
    }
}

export default {
    distance
}