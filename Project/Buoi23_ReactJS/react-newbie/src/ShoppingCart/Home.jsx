import React, { Component } from 'react'
import Cart from './Cart'
import Detail from './Detail'
import ProductList from './ProductList'

export default class Home extends Component {

    products = [
        {
          id: "sp_1",
          name: "iphoneX",
          price: 3000,
          screen: "screen_1",
          backCamera: "backCamera_1",
          frontCamera: "frontCamera_1",
          img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
          desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
        },
        {
          id: "sp_2",
          name: "Note 7",
          price: 2000,
          screen: "screen_2",
          backCamera: "backCamera_2",
          frontCamera: "frontCamera_2",
          img: "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
          desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
        },
        {
          id: "sp_3",
          name: "Vivo",
          price: 1200,
          screen: "screen_3",
          backCamera: "backCamera_3",
          frontCamera: "frontCamera_3",
          img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
          desc: "A young global smartphone brand focusing on introducing perfect sound quality",
        },
        {
          id: "sp_4",
          name: "Blacberry",
          price: 1800,
          screen: "screen_4",
          backCamera: "backCamera_4",
          frontCamera: "frontCamera_4",
          img: "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
          desc: "BlackBerry is a line of smartphones, tablets, and services originally designed",
        },
      ];

    constructor(props) {
        super(props);
        this.state = {
            selectedProduct : null,
            cart : []
        }
    }

    totalCardQuantity = 0;

    setSelectedProduct = (item) => {
    // setSelectedProduct = function(item) {
        this.setState ({
            selectedProduct: item
        });
        console.log(item);
    } 
    
    addToCart = (prod) => {
        this.totalCardQuantity++;
        console.log(prod);
        const cloneCart = [...this.state.cart];
        // Ki???m tra s???n ph???m c?? n???m trong gi??? h??ng ch??a
        const foundIndex = cloneCart.findIndex((item) => {
            return item.product.id === prod.id;
        });
        // n???u ch??a th?? th??m m???i, const cartItem = {product: item , quantity: 1}
        if(foundIndex === -1) {
            const cartItem = {product: prod, quantity: 1};
            cloneCart.push(cartItem);
        } else {
            // n???u c?? r???i th?? quantity + 1
            cloneCart[foundIndex].quantity++;
        }

        this.setState(
            {
                cart: cloneCart,
            },
            () => {
                console.log(this.state.cart);
            }
        )
    }
    
    increaseQuantity = (id) => {
        const cloneCart = this.state.cart;
        // Ki???m tra th??? t??? s???n ph???m trong cart array
        const foundIndex = cloneCart.findIndex((item) => {
            return item.product.id === id;
        });
        if(foundIndex === -1) {
            return;
        } else {
            cloneCart[foundIndex].quantity++;
            this.totalCardQuantity++;
        }
        this.setState({
            cart : cloneCart
        })
    }

    decreaseQuantity = (id) => {
        const cloneCart = this.state.cart;
        // Ki???m tra th??? t??? s???n ph???m trong cart array
        const foundIndex = cloneCart.findIndex((item) => {
            return item.product.id === id;
        });
        if(foundIndex === -1) {
            return;
        } else {
            cloneCart[foundIndex].quantity--;
            this.totalCardQuantity--;
        }
        this.setState({
            cart : cloneCart
        })
    }

    deleteCartItem = (id) => {
        const cloneCart = this.state.cart;
        // Ki???m tra th??? t??? s???n ph???m trong cart array
        const foundIndex = cloneCart.findIndex((item) => {
            return item.product.id === id;
        });
        this.totalCardQuantity -= cloneCart[foundIndex].quantity;
        cloneCart.splice(foundIndex,1);
        this.setState({
            cart : cloneCart
        })
    }

    render() {
        return (
            <div className="container">
                <h1>B??i t???p gi??? h??ng</h1>
                <p data-toggle="modal" data-target="#modelId" className="text-center">Gi??? h??ng: {this.totalCardQuantity}</p>
                <ProductList products={this.products} setSelectedProduct={this.setSelectedProduct} addToCart={this.addToCart}></ProductList>
                {this.state.selectedProduct ? (
                    <Detail selectedProduct = {this.state.selectedProduct}></Detail>
                ) : null
                }
                <Cart cart={this.state.cart} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteCartItem={this.deleteCartItem}></Cart>
            </div>
        )
    }
}
