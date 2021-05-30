const ages = [12, 14, 15];
const ages2 = [15, 16, 17, 18];
const ages3 = [25, 26, 27, 28, 23, 45];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];/*for spread out by using 3dots*/
// console.log(allAges2);
const business = 659;
const sochib = 450;
const minister = 390;
const takaPoisha = [659, 450, 390, 850];
const maximum = Math.max(...takaPoisha);
console.log(maximum);
