//Following Lesson 4: List Rendering
//Video Challenge: Add an array of sizes to your data object, then use v-for to display them as a list.
var app = new Vue(
    {
        el: '#app',
        data:
        {
            product: `Socks`,
            image: './assets/vmSocks-green-onWhite.jpg',
            inventory: 4,
            onStock: true,
            details:["80% cotton,","20% polyester","Gender-neutral"],
            variants:
            [
                {
                 variantsId:2234,
                 variantColor: "green"
                }
                ,
                {
                 variantsId:2235,
                 variantColor: "blue"
                }
            ],
            sizes:[`extra-small`,`small`,`medium`,`large`,`extra-large`]
        }
    })
