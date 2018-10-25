//Following Lesson 5: Event Handling
//Video Challenge: Create a new button and use v-on to trigger a method that decrements
//the value of cart
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
                 variantColor: "green",
                 variantImage: `./assets/vmSocks-green-onWhite.jpg`
                }
                ,
                {
                 variantsId:2235,
                 variantColor: "blue",
                 variantImage: `./assets/vmSocks-blue-onWhite.jpg`
                }
            ],
            sizes:[`extra-small`,`small`,`medium`,`large`,`extra-large`],
            cart: 0,
        },
        methods:
            {
                addToCart: function()
                {
                    this.cart += 1;
                },
                updateProduct: function(variantImage)
                {
                    this.image = variantImage;
                },
                removeFromCart: function()
                {
                    if(this.cart > 0)
                        this.cart -= 1;
                }
            }
    })
