
var arr = [9, 2, 7, 3, 5, 4, 6, 0, 1, 8];
let count = 0;
function sort(arr) {
  for (var i = arr.length - 1 ; i > 0 ; i--) {
    for (var j = 0 ; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        var m = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = m;
        count++
      }
    }
  }
  return arr
}
console.log(sort(arr), count)
