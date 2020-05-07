// 阮一峰的快排
function quicksort(arr) {
  if (arr.length <= 1) return arr;
  var m = Math.floor(arr.length / 2);
  var q = arr.splice(m, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < q)  {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat([q], quicksort(right));
}

var arr = [3, 4, 7, 1, 0, 9, 6, 2, 8, 5];
console.log(quicksort(arr));