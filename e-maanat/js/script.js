function addOne(number) {
    console.log(number);
    if (checkLength())
    inner.value+=number;
    
}

function checkLength () {
    if (inner.value.length <=9)
        return true;
        else return false;
}
