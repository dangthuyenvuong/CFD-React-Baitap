let values = [1, "a", { b: 3 }, 4];

let first = values[0];

let third = values[2];

let [a,b,c,d] = values;

console.log(a,b,c,d)

console.log('----------------')

// let profileA = {
//     fname: "CFD",

//     lname: "Circle",

//     age: 1,
//   };

// let {fname,lname,age} = profileA

// console.log(fname,lname,age)

// console.log('----------------')

let profileB = {
    fname: "CFD",

    lname: "Circle",

    social: {
      website: "https://www.cfdtraining.vn/",
      facebook: "https://www.facebook.com/cfdcircle",
    },
  };

let website = profileB.social.website;

let {fname, lname, social} = profileB



  