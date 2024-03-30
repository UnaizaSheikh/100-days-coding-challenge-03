//make a flexible object using interface with index signature
var FlexibleObject = {
    object1: { color: "black", style: "roman" },
    //object1 properties
    object2: { theme: "pink", background: "purple" },
    //object2 properties
};
//changing object name on user choice
FlexibleObject["user selection"] = { color: "blue", theme: "white" };
console.log(FlexibleObject);
