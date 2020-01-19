import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';

import './style.scss'

const Shelf = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  const productList = products.map(product => {
    return (
      <Grid item xs={3}>
        <Product product={product} key={product.id} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      { productList }
    </Grid>
  );
}

export default Shelf;
