const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    contect: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
     cart: {
        items: [
          {
            productId: {
              type: Schema.Types.ObjectId,
              ref: 'Product',
              required: true
            },
            quantity: { type: Number, required: true }
          }
        ]
      }
    });

    authSchema.methods.addToCart = function(product) {
      const productInCart = this.cart.items.findIndex(cp => {
        return cp.productId.toString() === product._id.toString();
      });
      let newQty = 1;
      const updatedCartItems = [...this.cart.items];
      if(productInCart >= 0 ) {
        newQty = this.cart.items[productInCart].quantity + 1;
        updatedCartItems[productInCart].quantity = newQty; 
      }else {
        updatedCartItems.push({
          productId : product._id,
          quantity : newQty
        });
      }
      const updatedCart = {
        items : updatedCartItems
      };
      this.cart = updatedCart;
      return this.save();
    }
    
    authSchema.methods.removeFromCart = function(productId) {
      const updatedCartItems = this.cart.items.filter(item => {
        return item.productId.toString() !== productId.toString();
      });
      this.cart.items = updatedCartItems;
      return this.save();
    };
    
    authSchema.methods.clearCart = function() {
      this.cart = { items: [] };
      return this.save();
    };

module.exports = mongoose.model('Auth', authSchema);