import React from "react";
import ProductList from "../../data/products";

const Products = () => {
    const rows = ProductList.map(product => {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R${product.price.toFixed(2)}</td>
            </tr>
        );
    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
