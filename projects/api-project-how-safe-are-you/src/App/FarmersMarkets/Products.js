import React from 'react'

function parseStr(str) {
    if (!str) return;
    return str.split(";")
    // console.log(newStr);
};

function Products(props) {
    console.log(props);
    const { productStr } = props;
    const arrOfStrings = parseStr(productStr);
    
    const oneProduct = arrOfStrings.map((product, i) => <li key={product + i} {...product} />)

    return (
        <ul>
            {oneProduct}
        </ul>
    )
}
export default Products;