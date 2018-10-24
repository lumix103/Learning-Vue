//Following Lesson 2: Attribute Binding
//Video Challenge: Add a link to your data object
//Then use v-bind to bind that link to an anchor tag's href attribute.
var app = new Vue(
    {
        el: '#app',
        data:
        {
            product: `Socks`,
            image: './assets/vmSocks-green-onWhite.jpg',
            link: `https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding`
        }
    })