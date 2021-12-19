"strict mode";

let profile = {
    fname: "CFD",
    lname: "Circle",
    age: 1
};


/*
1. dùng Spread để clone profile => newProfile1
*/
/*----Code here-----*/

let newProfile1 = {...profile};

console.log(newProfile1);

/*------------------------------*/

console.log("/*------------------------------*/")




/*
2. dùng Spread để clone profile => newProfile2 và thay đổi age thành 2
*/
/*----Code here-----*/

let newProfile2 = {...profile};

newProfile2.age = 2

console.log(newProfile2);

/*------------------------------*/

console.log("/*------------------------------*/")




/*
3. dùng Spread để clone profile => newProfile và thêm giá trị address: "Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM"
*/
/*----Code here-----*/

let newProfile = {...profile};

newProfile.address = "Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM";

console.log(newProfile);

/*------------------------------*/

console.log("/*------------------------------*/")



/*
4. dùng Spread để kết hợp 2 object: profile và newProfile2  =>  newProfile 3
*/
/*----Code here-----*/

let newProfile3 = {...profile, ...newProfile2};

console.log(newProfile3);

/*------------------------------*/