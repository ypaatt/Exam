const mongoose=require("mongoose")
const {Schema}=mongoose

const cartSchema=new Schema({
    product_category:{
        type:String,
        required:true,
        trim:true
    },
    product_name:String,
    price:Number,
    productId:String
})
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;