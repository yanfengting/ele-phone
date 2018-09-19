function chunk(array, size) {
    let length = array == null ? 0 : array.length;
    if (!length || size < 1) {
        return []
    }
    let index = 0,
        resIndex = 0,
        result = Array(Math.ceil(length / size));
    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result
}

// 根据ele api返回的imghash值，转换成正确的图片路径
// 比如：返回的imghash值是9b9c8e482821be2080edcffbb3a8d376png
// 7d8a867c870b22bc74c87c348b75528djpeg
// http://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg
// 处理后则返回http://fuss10.elemecdn.com/9/b9/c8e482821be2080edcffbb3a8d376png.png
function formatImagePath(imghash) {
    // console.log(imghash);
    if (!imghash) {
        return "";
    }
    var s1 = imghash.slice(0, 1); // 截取第1个字符 比如： 9
    var s2 = imghash.slice(1, 3); // 截取第2-3个字符 比如： b9
    var s3 = imghash.slice(3); // 截取从第3个字符后的所有字符 比如：c8e482821be2080edcffbb3a8d376png
    var s4 = imghash.slice(32); // 截取从第32个字符后的所有字符，取图片后缀名, 比如： png
    return "http://fuss10.elemecdn.com/" + s1 + "/" + s2 + "/" + s3 + "." + s4;
}

// "eleme://restaurants?search_source=1&activity_id=10016665&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D&navType=0&color_type=1&target_name=%E7%BE%8E%E9%A3%9F&entry_id=20004689&page_type=2&business_flag=1&animation_type=1"
function formatUrl(link) {
    return link.replace('eleme://restaurants?', 'https://h5.ele.me/msite/food/#')
}

export default {
    chunk,
    formatImagePath,
    formatUrl
}