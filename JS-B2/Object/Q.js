let product = { p1: "one", p2: "two", p10: "Ten" };
if (product.p11 == undefined) {
  console.log("Property not avaiable");
}

//=========
console.log(Object.keys(product)[0] =='p11');