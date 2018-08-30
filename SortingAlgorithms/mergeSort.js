function merge(arr1,arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            results.push(arr2[j])
            j++;
        }else{
            results.push(arr1[i])
            i++;
        }
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    return results;
}
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = parseInt(arr.length/2)
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right)
}
console.log(mergeSort([5,256,1050,3,25,18,100,50]))
