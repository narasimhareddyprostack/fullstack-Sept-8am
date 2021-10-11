let emp = {
  name: "Narasimha",
  getName: function () {
    return "Hello,GM";
  },
};

//How to read object property
console.log(emp.name);
console.log(emp.getName);
console.log(emp.sal); //undefined
console.log(emp.getName());
