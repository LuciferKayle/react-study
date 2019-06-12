// 洗牌算法
export const shuffle = function(array) {
    var m = array.length,
    t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}