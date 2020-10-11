const removeFromArray = function(arr) {
    let args = Array.prototype.slice.call(arguments, 1);
    console.log("args:\n");
    console.log(args);
    for (let i = 0; i < args.length; i++)
    {
        const itemIndex = (element) => element === args[i];
        let index = (arr.findIndex(itemIndex));
        console.log("index:" + index);
        if (index > -1)
        {
            let newArr = arr.splice(index, 1);
            console.log(newArr);
        }
        
    }
    
    
    console.log(arr);
    console.log("\n");
    return arr;


}

module.exports = removeFromArray
