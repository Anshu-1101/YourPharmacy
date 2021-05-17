import Card from "./Card";
import SearchBar from "../../components/SearchBar/Search";
import Fuse from "fuse.js";
import "./Orders.css";
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getProductAction} from '../../actions/products'
import nodata from './nodata.svg';

function Cart() {
  const data = useQuery([], async () => await getProductAction());

  useEffect(()=>{
    if (!data.isLoading && data.isSuccess)
      {
        // setResult(data.data.data)
        console.log(data.data.data)
      }
  },[data])
   
  const fuse = new Fuse(data, {
    keys: ["name", "brandname", "composition"],
  });

  const [results, setResult] = useState([]);

  const searchData = (pattern) => {
    if (!pattern) {
      setResult(data);
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
        onChange={(e) => searchData(e.target.value)}
      />
      <div className="Container">
        {results.map((item) => (
          <Card
            image={item.url}
            medname={item.name}
            medcomposition={item.composition}
            brandname={item.brandname}
            // description={item.description}
            price={item.price}
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

export default Cart;
