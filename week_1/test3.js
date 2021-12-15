let products = [{
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
    },
];

const newProducts = [...products];
console.log(newProducts)

const newProducts2 = products.map((item) => {
    return {
        name: item.name
    }
})

console.log(newProducts2)

let discount = products.filter((item) => {
    return item.discount > 10
})

console.log(discount)

let find = products.find((item) => {
    return item.id == '74489817';
})

console.log(find)

let change = products.map((item) => {
    item.disable = false

    return item
})

console.log(change)