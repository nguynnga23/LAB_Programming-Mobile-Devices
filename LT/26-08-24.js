// const number = [45, 4, 9, 16, 25];
//
// Array.prototype.myfilter = function (callback) {
//     let newarr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             newarr.push(this[i]);
//         }
//     }
//     return newarr;
// }
//
// // Hàm callback để kiểm tra số lớn hơn một giá trị
// const isGreaterThan = (threshold) => (element) => element > threshold;
//
// // Sử dụng hàm callback
// var value = number.myfilter(isGreaterThan(10));
// console.log(value);

const numbers = [45, 4, 9, 16, 25];
Array.prototype.myfilter = function (callback) {
    let result = [];
    this.forEach((element, index, array) => {
        if (callback(element, index, array)) {
            result.push(element);
        }
    })
    return result;
};
let value = numbers.myfilter((element, index, array) => element > 10);
console.log(value);