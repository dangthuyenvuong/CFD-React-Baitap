"strict mode";

let products = [
    {
        id: 33996665,
        sku: 2692455386181,
        categories: 1789,
        discount: 50,
        name: "Điện Thoại iPhone 11 128GB  - Hàng Nhập Khẩu",
        disable: true
    },
    {
        id: 74489817,
        sku: 5624191820930,
        categories: 1789,
        discount: 25,
        name: "Điện Thoại Samsung Galaxy S3",
        disable: false
    },
    {
        id: 436278911,
        sku: 8674431825432,
        categories: 1800,
        discount: 10,
        name: "Máy tính bảng Samsung 2020",
        disable: true
    }
];

/*
1. dùng Spread để clone products => newProducts1
*/
/*----Code here-----*/

const newProducts1 = [...products];

console.log(newProducts1);

/*------------------------------*/

console.log("/*------------------------------*/");





/*
2. tạo array newProducts2 chỉ chứa tên của tất cả sản phẩm trong products (Hint: dùng Map method)
*/
/*----Code here-----*/

let newProducts2 = products.map(element => element.name);

console.log(newProducts2);

/*------------------------------*/

console.log("/*------------------------------*/");






/*
3. Lọc ra những sản phẩm có discount > 10 (Hint: dùng filter method)
*/
/*----Code here-----*/

let filter = products.filter(element => element.discount > 10);

console.log(filter);

/*------------------------------*/

console.log("/*------------------------------*/");




/*
4. Tìm sản phẩm có id = 74489817 (Hint: dùng find method)
*/
/*----Code here-----*/

let findId = products.find(element => element.id = 74489817);

console.log(findId);

/*------------------------------*/

console.log("/*------------------------------*/");




/*
5. Cập nhật disable của tất cả sản phẩm thành false (Hint: dùng find map)
*/
/*----Code here-----*/

let updateDisable = products.map(element => element.disable = false);

console.log(updateDisable);

/*------------------------------*/

console.log("/*------------------------------*/");