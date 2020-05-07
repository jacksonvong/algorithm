/**
 * 最后一个数作为参照物
 * 整个代码分成三部分，数组交换，拆分，qsort（主函数）三个部分
 */
function divide(arr, start, end) {
  var pivot = arr[end - 1];
  var i = start - 1;
  for (var j = start; j < end - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, end - 1);
  return i + 1;
}
function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
function quicksort(arr, start = 0, end) {
  end = end || arr.length;
  if (start < end - 1) {
    const m = divide(arr, start, end);
    quicksort(arr, start, m);
    quicksort(arr, m + 1, end);
  }
  return arr;
}
var arr = [3, 4, 7, 1, 0, 9, 6, 2, 8, 5];
console.log(quicksort(arr));