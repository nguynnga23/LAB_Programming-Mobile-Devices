/*
Kiểm tra xem liệu ít nhất một phần tử trong mảng có vượt qua bài kiểm tra do hàm được cung cấp thực hiện hay không
 */

function isBiggerThan10(element, index, array){
    return element > 10;
}

console.log([12, 5, 8].some(isBiggerThan10));
console.log([1, 5, 8].some(isBiggerThan10));


