// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let orderPrice = 0
      const totalPrice = cartList.map(eachItem => {
        orderPrice += eachItem.quantity * eachItem.price
        return eachItem
      })
      return (
        <div>
          <h1>
            Order Total: <span>Rs {orderPrice}/-</span>
          </h1>
          <p>{cartList.length} Items in Cart</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
