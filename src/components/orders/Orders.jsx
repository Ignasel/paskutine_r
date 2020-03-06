import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Products from '../products/Products'
import Product from '../product/Product'



class Orders extends Component {
    constructor(props) {
        super(props);
        const esamasId = this.props.orderId;
        console.log(this.props.orderId);
        this.state = {buyerName: '', buyerSurname:'', buyerAddress:'', ItemId: esamasId,
            productQuantity:'', orderSum:''};

        this.handleBuyerName = this.handleBuyerName.bind(this);
        this.handleBuyerSurname = this.handleBuyerSurname.bind(this);
        this.handleBuyerAddress = this.handleBuyerAddress.bind(this);
        this.handleProductQuantity = this.handleProductQuantity.bind(this);
        this.handleOrderSum = this.handleOrderSum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBuyerName(event) {
        this.setState({buyerName: event.target.value});
    }

    handleBuyerSurname(event) {
        this.setState({buyerSurname: event.target.value});
    }


    handleBuyerAddress(event) {
        this.setState({buyerAddress: event.target.value});
    }


    handleProductQuantity(event) {
        this.setState({productQuantity: event.target.value});
    }

    handleOrderSum(event) {
        this.setState({orderSum: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://skelbimai.test/api/store-orders`, {
            method:'post',
            headers:{
                Accept: 'application/json', 'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        })
            console.log(JSON.stringify(this.state))
            .then(response => response.json())
            .catch(error => console.error('Error:', error)
            .then(response => console.log('Success:', response)));}

    render() {
        console.log(this.props.orderId)
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row form-group">
                    <div className="col-md-12">
                <label>Buyer Name:</label>
                    <input type="text" className="form-group" value={this.state.buyerName} onChange={this.handleBuyerName} />
                </div>
                </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                <label>
                    Buyer Surname:</label>
                    <input type="text" className="form-group" value={this.state.buyerSurname} onChange={this.handleBuyerSurname} />
                </div>
                    </div>
                <div className="form-group">
                <label>Buyer Address:</label>
                    <input type="text" className="form-group" value={this.state.buyerAddress} onChange={this.handleBuyerAddress} />
                </div>

                <div className="form-group">
                <label>Product Quantity:</label>
                    <input type="text" className="form-group" value={this.state.productQuantity} onChange={this.handleProductQuantity} />
                </div>
                <div className="form-group">
                <label>Order Sum:</label>
                    <input type="text" className="form-group" value={this.state.orderSum} onChange={this.handleOrderSum} />
                </div>
                <Button type="submit" className="btn btn-primary" value="Submit" />
            </form>

        );
    }
}

export default Orders;