var array = [0,1,1,2,3,5,8,13,21,34,55];
var str = array.join(', ');
str = "";
for (var i = 0; i < array.length; i++) {
    str += '(' + i + ',' + array[i] + ')';
}
console.log(str);
