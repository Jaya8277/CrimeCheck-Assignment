// function name1(){
//     var  j = "node";
//     console.log(j);
//     function name() {
//         // let c = 
//         var inner = "nod1";
//         console.log(inner);
//         console.log(j);
// }
// name();
// }   name1();


let arr = [1,2,3,4];
let temp ;
for(let i=0; i<arr.length; i++){

    temp = arr[i];
    arr[i]=arr[i+1];
   arr[i+1] = temp
   break;

}
console.log(arr);



