// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
function findIndex(arr, target) {
  let s = 0;
  let e = arr.length - 1;
  let m = Math.floor(e / 2);
  let ture = arr[s] < arr[e];

  while(s < e && arr[m] !== target) {
    if (arr[m] > target) {
      ture ? (e = m - 1) : (s = m + 1);
    } else {
      ture ? (s = m + 1) : (e = m - 1);
    }
    m = Math.floor((s + e) / 2)
  }
  if (arr[m] === target) {
    return m;
  } else {
    return - 1;
  }
}