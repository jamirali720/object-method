var name  = "jamir ali"
function add(num1, num2) {
    result = num1 + num2;
    console.log('result inside', result)
    function double(num) {
        return num * num;

    }
    var total =  double (result);
    return total;
}

const sum = add(23, 12);
console.log(result);
console.log(sum);