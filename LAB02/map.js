/*
Tạo ra một mảng mới chứa kết quả của việc gọi một hàm được cung cấp trên mọi phần tử mảng gọi
Trả về : một mảng mới với mỗi phần tử là kết quả của hàm gọi lại
 */

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(numbers);
console.log(roots);

// Sử dụng map để định dạng lại các đối tượng trong 1 mảng
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({key, value})=>({[key]: value}));
console.log(reformattedArray);
console.log(kvArray);