//Following Lesson 7: Computed Properties
//Video Challenge: Add a new boolean data property called onSale. Then
//create a computed property that prints out a string using brand and product
//whenever onSale is true

var app = new Vue(
    {
        el: '#app',
        data:
        {
            brand: 'Vue Mastery',
            product: `Socks`,
            selectedVariant: 0,
            inventory: 4,
            onSale: true,
            details:["80% cotton,","20% polyester","Gender-neutral"],
            variants:
            [
                {
                 variantsId:2234,
                 variantColor: "green",
                 variantImage: `./assets/vmSocks-green-onWhite.jpg`,
                 inventory: 10
                }
                ,
                {
                 variantsId:2235,
                 variantColor: "blue",
                 variantImage: `./assets/vmSocks-blue-onWhite.jpg`,
                 inventory: 0
                }
            ],
            sizes:[`extra-small`,`small`,`medium`,`large`,`extra-large`],
            cart: 0
        },
        methods:
            {
                addToCart: function()
                {
                    this.cart += 1;
                },
                updateProduct: function(index)
                {
                    this.selectedVariant = index;
                },
                removeFromCart: function()
                {
                    if(this.cart > 0)
                        this.cart -= 1;
                }
            },
        computed: 
        {
            title: function()
            {
                return this.brand + '-' + this.product
            },
            image: function()
            {
                return this.variants[this.selectedVariant].variantImage;
            },
            inStock: function()
            {
                return (this.variants[this.selectedVariant].inventory > 0);
            }
        }
    })
