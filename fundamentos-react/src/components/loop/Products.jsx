import React from "react";
import ProductList from "../../data/products";

const Products = () => {
    const row = ProductList.map(product => {
        return (
            <tr key={product.id}>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.price}</th>
            </tr>
        );
    });

    return (
        <div>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {row}
        </div>
    );
};

export default Products;
