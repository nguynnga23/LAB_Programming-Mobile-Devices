/*
Kiểm tra xem tất cả các phần tử trong mảng có pass điều kiện của hàm cung cấp hay không
Trả về một giá trị Boolean
 */

// Kiểm tra xem 1 mảng có phải là 1 tập con của mảng khác không
const isSubnet = (array1, array2) =>
    array2.every((element) => array1.includes(element));

console.log(isSubnet([1, 2, 3, 4, 5, 6, 7], [5, 6, 7]));
console.log(isSubnet([1, 2, 3, 4, 5, 6, 7], [7, 8, 9]));

// Calling every() on non-array objects
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: 345, // ignored by every() since length is 3
};

console.log(Array.prototype.every.call(arrayLike, (x) => typeof x === 'string'),)