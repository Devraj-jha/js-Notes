// 1
// 1 2
// 1 2 3
// 1 2 3 4

let n = 4;
let cout =  1;
for(let i = 1; i<=n; i ++){
  row = "";
  for (let j = 1; j<=n; j++){
    
   
    row = cout + row;
    cout++;
  }
  console.log(cout);
}