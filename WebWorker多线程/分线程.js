function callback(num) {
  // 1 1 2 3 5 8 13
  // 1 2 3 4 5 6 7
  //f(n) = f(n-1) + f(n-2)
  return num <=2 ? 1 : callback(num-1) + callback(num-2)
}

var onmessage = function (event) {
  var num = event.data
  console.log('分线程接收到：' + num);
  var result = callback(num)
  postMessage(result)
  console.log('分线程返回的数据：' + result);
}
