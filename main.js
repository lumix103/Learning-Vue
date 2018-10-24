//Following Lesson 1: The Vue Instance
//Video Challenge: Add a description to your data object.
//Then use an expression to display the description beneath the h1.
var app = new Vue(
    {
        el: '#app', //This the element property where we connect
                    //our vue instance to the div element with id app in the html file
        data:
        {
            product: `Boots`,
            description: `They're boots nothing much going on here.` // Very descriptive I see
        }
    });
