function swap(arr,i,j) {
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
function pivot(arr,start=0,end=arr.length) {
    var pivot = arr[start];
    var swapIndex = start;
    for(var i = start+1;i<arr.length;i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }
    swap(arr,start,swapIndex)
    return swapIndex;
}
function quickSort(arr,start=0,end=arr.length-1) {
    let pivotIndex = pivot(arr,start,end);
    if(start < end){
        quickSort(arr,start,pivotIndex-1)
        quickSort(arr,pivotIndex+1,end)
    }
    return arr
}
console.log(quickSort([4,8,2,1,5,7,6,3]))
