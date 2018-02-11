import React, { Component, Fragment } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSearch from '../components/ProductSearch';

export default class PLP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            keyword: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        fetch('products.json').then(data => {
            return data.json();
        }).then(response => {
            this.setState({
                products: response.products
            });
        }).catch(error => {
            console.log(error);
        })
    }

    handleSearch(key) { 
        this.setState({
            keyword: key
        });
    };

    createProductCards() {
        let products = this.state.products,
            keyword = this.state.keyword;

        if(keyword) {
            products = products.filter((product) => {
                return (keyword === product.name);
            });
        }
        let productCards = products.map((product, index) => {
            return <ProductCard key={index} product={product} />
        });
        return productCards;
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-10">{
                        <ProductSearch handleSearch = {this.handleSearch}/>
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10">{
                        this.createProductCards()
                    }
                    </div>
                </div>
            </Fragment>
        )
        
    }
}