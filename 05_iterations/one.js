// for

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is a best number");
        
    }
    // console.log(element);
    
}
// console.log(element);

  for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
     for (let j = 0; j <=10 ; j++) {
//       console.log(`inner loop value : ${i} and outer loop value ${j}`)
     }
 }

for (let i = 0; i <=10 ; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 0 ; j <= 10; j++) {
    //console.log(`inner loop value: ${j} and outer loop value : ${i}`);
    //console.log(i + '*' + j + '=' + i*j); 
    }  
}

const myArray = [ "flash" , "superman" , "ironman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);  
}

// break  and continue 

for (let index = 1; index <=20; index++) {
   if (index === 5) {
    //console.log(`detected 5`);
    break
   }
    //console.log(`value i is : ${index}`);
    
}
for (let index = 1; index <=20; index++) {
   if (index === 5) {
    console.log(`detected 5`);
    continue
   }
    console.log(`value i is : ${index}`);
    
}