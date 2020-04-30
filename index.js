var transform = function(key, arr) {
    var newArr = [];
    var data = [];
    newArr.push(arr[0]);
    data.push(newArr);
    for (var i = 1; i < arr.length; i++) {
        var flag = 1;
        var row = arr[i];
        for (var j = 0; j < data.length; j++) {
            for (var k = 0; k < data[j].length; k++) {
                if (row[key] == data[j][k][key]) {
                    data[j].push(row);
                    flag = 0;
                    break;
                }
            }
        }
        if (flag) {
            var temp = [];
            temp.push(row);
            data.push(temp);
        }
    }
    return(data);
}
console.log('master');

module.exports = transform;