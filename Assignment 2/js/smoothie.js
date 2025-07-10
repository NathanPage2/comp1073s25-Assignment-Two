//Done by Nathan Page (200609542)
//June 10th, 2025

const output = document.getElementById("order");
//Grabbing the id of order
class Smoothie{
    name;
    flavor;
    size;
    //Creating our class and declaring properties
    constructor(name, flavor, size){
        //Using our constructor to initalize the values for the class
        this.name = name;
        this.flavor = flavor;
        this.size = size;
    }
    drinkOrder(){
        return `Hello ${this.name}, we have got you're order for a ${this.flavor} flavored drink that is ${this.size} sized. We hope you enjoy you're drink! `;
        //We call this method to format the info we are getting from the user
    }
}
const orderBtn = document.querySelector("button");
//Selecting our html button so we can use it to submit the form
orderBtn.addEventListener("click", function(){
    //Creating a function that happens when the button is clicked
const name = document.getElementById("firstName").value;
//We can just simply grab the value from this one
const form = document.forms[0]; 
//Grabbing the object of form
const flavor = form.flavChoice.value;
const size = form.sizeChoice.value;
//Then grabbing flavor and size in the same way as name through the form through whatever one they selected

const smoothieOrder = new Smoothie (name, flavor, size);
//Creating a new instance of the smoothieOrder that displays over our this. values
output.textContent = smoothieOrder.drinkOrder();
//Outputting the new instance and method on the html page

});
