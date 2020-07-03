console.log(123);
type Mix = string | number;
function add(val1 : Mix , val2 : Mix) : Mix {
    if(typeof val1 === "string" && typeof val2 === "string")
    {
        return val1+val2;
    }
    else if(typeof val1 === "number" && typeof val2 === "number"){
        return val1+val2;
    }

}