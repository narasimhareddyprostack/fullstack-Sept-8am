let product = {
  product_Name: "Iphone 5s",
  price: 45000,
  color: ["red", "blue", "green"],
  is_Avail: true,
  discount: undefined,
  usage: { desc: "Lorem lorem lorem" },
  get_Product_Details: function () {
    //console.log("Please Wait , you will get");
    return this.price;
  },
};

console.log(product.get_Product_Details());
console.log(product.get_Usage());
