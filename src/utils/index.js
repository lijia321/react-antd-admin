/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-07-22 18:33:31
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 11:19:27
 */
export const getFlatMap = (data) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item);
        if (item.children) {
            keys.push(...getFlatMap(item.children))
        }
    });
    return keys;
}
export const getFirstNode = (tree) => {
    var temp = []
    var forFn = function (arr) {
        if (arr && arr.length > 0) {
            temp.push(arr[0])
            if (arr[0].children) {
                forFn(arr[0].children)
            }
        }
    }
    forFn(tree)
    return temp
}
export const familyTree = (tree, id) => {
    var temp = []
    var forFn = function (arr, id) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]
            if (item.id === id) {
                temp.push(item.key)
                forFn(tree, item.pid)
                break
            } else {
                if (item.children) {
                    forFn(item.children, id)
                }
            }
        }
    }
    forFn(tree, id)
    return temp
}
