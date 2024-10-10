var array = [3, 6, 8, 10, 1, 2, 1];
var left = 0;
var right = array.length - 1;

(function quicksort(arr, l, r) {
  if (l < r) {
    var pivotIndex = (function partition(arr, l, r) {
      var pivot = arr[r];
      var i = l - 1;
      for (var j = l; j < r; j++) {
        if (arr[j] <= pivot) {
          i++;
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      var temp = arr[i + 1];
      arr[i + 1] = arr[r];
      arr[r] = temp;
      return i + 1;
    })(arr, l, r);
    quicksort(arr, l, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, r);
  }
})(array, left, right);

console.log(array);
