"strict mode";

/*
1. dùng array destructuring đế lấy dữ liệu từ array và hiển thị các phần tử
*/

let values = [1, "a", { b: 3 }, 4];

let [a, b, c, d] = values;

console.log(`first :>>`, a);
console.log(`second :>>`, b);
console.log("third :>> ", c);
console.log(`four :>>`, d);

// let first = values[0];

// let third = values[2];

// console.log(`first :>>`, first);
// console.log("third :>> ", third);
//   first :>> 1
//   third :>> {b: 3}

console.log("/*------------------------------*/");





/*
2. dùng object destructuring đế lấy dữ liệu và hiển thị tên đầy đủ của profile
*/

let profileA = {
    fname: "CFD",
    lname: "Circle",
    age: 1,
};

const {fname, lname, age} = profileA;

console.log('name :>> ', fname, lname);

// let fname = profileA.fname;

// let lname = profileA.lname;

// console.log('name :>> ', fname, lname); //CFD Circle

console.log("/*------------------------------*/");



/*
3. dùng object destructuring đế lấy dữ liệu và link website của profile
*/

let profileB = {
    fnameB: "CFD",

    lnameB: "Circle",

    social: {
        website: "https://www.cfdtraining.vn/",
        facebook: "https://www.facebook.com/cfdcircle",
    },
};

const {fnameB, lnameB, social} = profileB;

console.log('website :>> ', social.website);



// let website = profileB.social.website;

// console.log('website :>> ', website); // website :>> https://www.cfdtraining.vn/