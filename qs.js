// const qs = require('./node_modules/qs');
// let url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
// console.log(qs.parse(url));

// const obj = {
//     method: 'post',
//     projectId: '85',
//     appToken: '7d22e38e'
//   }
//   console.log(qs.stringify(obj));
//   console.log(qs.stringify({ a: ['b', 'c', 'd'] })); // 'a[0]=b&a[1]=c&a[2]=d'
//   console.log(qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false })); // 'a=b&a=c&a=d'

// //   json
// // stringify()第二个参数指定序列化对象的对应key值, 第三个参数指定缩进用的空白字符串,如果为数字则为缩进的空格数量
// console.log(JSON.stringify(obj, ['method'], 2)); 
// let JSONurl = '{"method":"post","projectId":"85","appToken":"7d22e38e"}';
// console.log(JSON.parse(JSONurl));

setTimeout(function() {
    console.log('timeout')
  })
  
  process.nextTick(function(){
    console.log('nextTick 1')
  })
  
  new Promise(function(resolve){
    console.log('Promise 1')
    resolve();
    console.log('Promise 2')
  }).then(function(){
    console.log('Promise Resolve')
  })
  
  process.nextTick(function(){
    console.log('nextTick 2')
  })
  // 代码执行顺序 
// Promise 1
// Promise 2
// nextTick 1
// nextTick 2
// Promise Resolve
// timeout
// Promise.then() 中的回调函数确实是先被添加到事件循环队列中的，但是由于 
// process.nextTick() 中的回调函数是在当前执行栈中执行的，因此它会先于 Promise.then() 中的回调函数执行。

  