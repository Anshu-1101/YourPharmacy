import Card from "./Card";
import SearchBar from "../../components/SearchBar/Search";
import Fuse from "fuse.js";
import "./Orders.css";
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getProductAction} from '../../actions/products'
import nodata from './nodata.svg';
import { getOrder } from "../../api";

function Order() {
  const data = useQuery("get Orders", async () => await getOrder());
  const [products, setProducts] = useState([])
  const [search, finshsearch] = useState(false)
  useEffect(()=>{
    if (!data.isLoading && data.isSuccess)
      {
        if (!search){
          setProducts(data.data.data)
          setResult(products)
        }
      }
  }, [data])
   
  const fuse = new Fuse(data, {
    keys: ["name", "brandname", "composition"],
  });

  const [results, setResult] = useState([]);

  const searchData = (pattern) => {
    if (!pattern) {
      setResult(products);
      finshsearch(false);
      return;
    }

    const fuse = new Fuse(results, {
      keys: ["name", "brandname", "composition"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setResult([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setResult(matches);
    }
  };

  return (

    (results && results.length>0 )?

    
   ( <div className="page">
      <SearchBar
        placeholder="search"
        onChange={(e) => {finshsearch(true); searchData(e.target.value)}}
      />
      <div className="Container">
        {results.map((item) => (
          <Card
          _id={item.product._id}
          image={item.product.url}
          medname={item.product.name}
          medcomposition={item.product.composition}
          brandname={item.product.brandname}
          price={item.product.price}
          date={item.date}
          quantity={item.quantity}
        />
        ))}
      </div>
    </div>
   ):
   <>
   <img style={{height:'400px', width:'400px', justifyContent:'center', display:'block', marginLeft: 'auto',
   marginRight: 'auto'}} src={nodata}></img>
   <h1 style={{textAlign:'center', justifyContent:'center', color:'green', marginBottom:'10px'}}>No Orders Yet!</h1>
   </>
  );
}

export default Order;
