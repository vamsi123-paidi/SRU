
// function greet(a,b){
//     console.log(a+b);
// }
// greet(10,20);

// // function(){
// //     console.log("Hello World");
// // }



// const greet1 =function(){
//     console.log("Hello World");
// }
// greet1();

// const greet2 = ()=>{
//     console.log("Hello World");
// }
// greet2();

// function greet4(a,b){
//     console.log(a+b);
// }(10,20);

// const arr = [1,"string",true,undefined,null];
// // arr.push("hello")
// // arr.pop()
// console.log(arr.splice(1,4,"hello"))
// console.log(arr)


// const arr = [1,2,3,4]
// const even = arr.filter((data)=>{
//     return data%2==0
// })
// console.log(even)


// const arr = [1,2,3,4]
// const sum = arr.reduce((acc,cur)=>{
//     return acc+cur
// },0)
// console.log(sum)

// const age = new Promise((res, rej) => {
//     setTimeout(() => {
//         const age = 17;
//         if (age >= 18) {
//             res("success")
//         } else {
//             rej("rejected")
//         }
//     }, 2000);
// })

// age.then((data) => { console.log(data) })
//     .catch((error) => { console.log(error) })



// const obj = {
//     name:"adam",
//     age:100,
//     items:[1,2,3,4]
// }
// obj.items[1] = 200
// console.log(obj)


// function validateOrder(order) {
//   return new Promise((resolve, reject) => {
//     if (!order.customerId) {
//       reject(new Error('Customer ID is required'));
//     } else if (!order.items || order.items.length === 0) {
//       reject(new Error('Order must contain items'));
//     } else {
//       console.log('✅ Order validated');
//       resolve(order);
//     }
//   });
// }

// // 2. Check inventory availability
// function checkInventory(order) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('📦 Inventory checked');
//       order.inventoryVerified = true;
//       resolve(order);
//     }, 800);
//   });
// }

// // 3. Process payment
// function processPayment(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const paymentSuccess = Math.random() > 0.2; // 80% success rate
//       if (paymentSuccess) {
//         console.log('💳 Payment processed');
//         order.paymentStatus = 'completed';
//         resolve(order);
//       } else {
//         reject(new Error('Payment declined'));
//       }
//     }, 1200);
//   });
// }

// // Execute the pipeline
// validateOrder({
//   customerId: 'cust789',
//   items: [{ id: 'prod456', qty: 1 }]
// })
// .then(checkInventory)
// .then(processPayment)
// .then(order => {
//   console.log('🎉 Order completed:', order);
// })
// .catch(err => {
//   console.error('❌ Order failed:', err.message);
// });


function processSingleOrder(orderId) {
  return new Promise(resolve => {
    const processTime = 500 + (Math.random())*100+2000;
    setTimeout(() => {
      resolve({
        orderId,
        status: 'processed',
        processTime: Math.round(processTime)
      });
    }, processTime);
  });
}

const orderBatch = ['order101', 'order102', 'order103', 'order104'];

// Process all orders in parallel
Promise.any(orderBatch.map(processSingleOrder))
  .then(results => {
    console.log('All orders processed:');
    console.table(results);
    const totalTime = results.reduce((sum, order) => sum + order.processTime, 0);
    console.log(`Total processing time: ${totalTime}ms`);
  })
  .catch(error => {
    console.error('Batch processing failed:', error);
  });



