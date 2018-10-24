//Following Lesson 3: Conditional Rendering
//Video Challenge: Adda an onSale property to your data object, then use v-if to display that says "On sale!"
//whenever onSale is true.
var app = new Vue(
    {
        el: '#app',
        data:
        {
            product: `Socks`,
            image: './assets/vmSocks-green-onWhite.jpg',
            inventory: 4,
            onSale: true
        }
    })