
var arr = [9, 2, 7, 5, 3, 4, 6, 0, 1, 8];
console.time('计时器1')
function devide(arr, start, end) {
  if (start >= end) return arr;
  var baseIndex = Math.floor((start + end) / 2);
  var i = start;
  var j = end;
  while (i <= j) {
    while (arr[i] < arr[baseIndex]) {
      i++;
    }
    while (arr[j] > arr[baseIndex]) {
      j--;
    }
    if (i <= j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}
function quickSort(arr, start, end) {
  if (arr.length <= 1) return arr;
  var index = devide(arr, start, end);
  if (start < index - 1) {
    quickSort(arr, start, index - 1);
  }
  if (end > index) {
    quickSort(arr, index, end);
  }
  return arr;
}

var arr = [];
for(var i = 0; i< 1000000; i++) {
  arr.push(parseInt(Math.random() * 1000000))
}
quickSort(arr, 0, arr.length - 1);
console.timeEnd('计时器1')