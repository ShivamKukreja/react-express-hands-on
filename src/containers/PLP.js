import React, { Component, Fragment } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSearch from '../components/ProductSearch';
import { connect } from 'react-redux';
import ProductActions from '../actions/ProductAction';
import ProductFindSelector from '../selectors/ProductFindSelector';

class PLP extends Component {

    constructor(props) {
        super(props);
        /* this.state = {
            //products: [],
            keyword: ""
        } */
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        /* fetch('products.json').then(data => {
            return data.json();
        }).then(response => {
            this.props.dispatch({
                type: "GET_PRODUCTS",
                payload: response
            });
            this.setState({
                products: response.products
            });
        }).catch(error => {
            console.log(error);
        }) */
        this.props.dispatch(ProductActions.getAllProducts());
    }

    handleSearch(key) { 
        /* this.setState({
            keyword: key
        }); */
        this.props.dispatch(ProductActions.findProducts(key));
    };

    createProductCards() {
        let products = this.props.products;/* ,
            keyword = this.props.keyword; */

        /* if(keyword) {
            products = products.filter((product) => {
                return (keyword === product.name);
            });
        } */
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

const mapStateToProps = (state) => {
    /* let productSet = [...state.products],
        keyword = state.keyword;
    if (keyword) {
        productSet = productSet.filter(product => {
            return (product.name.indexOf(keyword) >= 0);
        });        
    } */
    return {
        products: ProductFindSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PLP);