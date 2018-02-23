
import { createSelector } from 'reselect';

const getKeyword = state => state.keyword;

const getProducts = state => state.products;

const findProducts = createSelector([getKeyword, getProducts], (keyword, productSet) => {
    if (keyword) {
        productSet = productSet.filter(product => {
            return (product.name.indexOf(keyword) >= 0);
        });
    }
    return productSet;
})


export default findProducts;