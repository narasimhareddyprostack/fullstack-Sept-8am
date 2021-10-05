let size = [38, 40, 42, 44];
//Reading Array
console.log(size);
//Print Array Length
console.log(size.length);
//Reading Array Values
console.log(size[0]);
console.log(size[1]);
console.log(size[2]);
console.log(size[3]);

/*
    initlization  : let i=0
    condition     : i<=3/ i<= size.length - 1
    incr          : i = i+1
*/

console.log("...............");

for (let i = 0; i <= size.length - 1; i = i + 1) {
  console.log(size[i]);
}
