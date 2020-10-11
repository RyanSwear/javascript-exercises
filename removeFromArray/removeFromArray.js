const removeFromArray = function(arr, item) {
    
    const itemIndex = (element) => element == item;
    let index = (arr.findIndex(itemIndex));
    console.log(index);
    let newArr = arr.splice(index, 1);
    console.log(newArr);
    return arr;
}

module.exports = removeFromArray
