//Following Lesson 8: Communicating Events
//Video Challenge: Add a button that removes
// the product from the cart array by emitting an event
// with the id of the product to be removed

Vue.component(`product-details`,
{
    props:[`details`],
    template: `<ul>
                    <li v-for="detail in details">{{detail}}</li>
               </ul>`,
    data: function()
    {
        return {value: 0}
    },

})

Vue.component(`product`,
{
    props: {
        premium:
        {
            type: Boolean,
            required: true,
            
        }
           },
    data: function() 
    {
        return {brand: 'Vue Mastery',
        product: `Socks`,
        selectedVariant: 0,
        inventory: 4,
        onSale: false,
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
        sizes:[`extra-small`,`small`,`medium`,`large`,`extra-large`]
    }
    },
    methods:
    {
        addToCart: function()
                {
                this.$emit(`add-to-cart`,this.variants[this.selectedVariant].variantsId);
                },
                updateProduct: function(index)
                {
                    this.selectedVariant = index;
                },
                removeFromCart: function()
                {
                    this.$emit(`remove-from-cart`,this.variants[this.selectedVariant].variantsId);
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
            },
            shipping: function()
            {
                if(this.premium)
                {
                    return "Free"
                }
                else
                    return "2.99"
            }
    },
    template: `<div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>

    <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="onSale">On Sale: {{title}}</p>
        <p>Shipping: {{shipping}}</p>
        <!--The Video Challenge is ^^^^ right above not sure if will keep that in later-->
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{outOfStock: !inStock}">Out of stock</p>
        <product-details :details="details"></product-details>
        <div v-for="(variant,index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)">
        </div>
        <div>
            <h4>Sizes</h4>
            <ul>
                <li v-for="i in sizes">{{i}}</li>
            </ul>
            
        </div>

        <button v-on:click="addToCart"
                :disabled="!inStock"
                :class="{disabledButton: !inStock}">Add to cart</button>
        <button @click="removeFromCart">Remove item</button>
        

    </div>

</div>`
})

var app = new Vue(
    {
        el: '#app',
        data: {premium: true,
            cart: []},
        methods:
        {
            addToCart: function(id)
            {
                this.cart.push(id);
            },
            removeFromCart(id)
            {
                if(this.cart.length > 0)
                    this.cart.pop(id);
            }
        }
    })
/*
    Going to add this later into the product component
    <select name="sizes">
        <option v-for="size in sizes" value="{{size}}">{{size}}</option>
    </select>
*/