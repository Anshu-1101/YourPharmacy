import Card from '../../components/Card/cards';
import SearchBar from '../../components/SearchBar/Search';
import Fuse from "fuse.js";
import './Doctors.css';
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getDoctorAction} from '../../actions/doctors'

function  Doctors() {

  const data =  useQuery("doctor data", async ()=> await getDoctorAction())
  const [products, setProducts] = useState([])
  const [search, finshsearch] = useState(false)
  

  useEffect(()=>{
    if (!data.isLoading && data.isSuccess)
      if (!search){
        setProducts(data.data.data)
        setResult(products)
      }
  },[data])

  const [results, setResult] = useState([]);

  const searchData = (pattern) => {
    if (!pattern) {
      setResult(products);
      finshsearch(false);
      return;
    }

    const fuse = new Fuse(results, {
      keys: ["name", "designation", "specialisation", "fee"],
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
    <div className="page">
      <SearchBar
        placeholder="search"
        onChange={(e) => {finshsearch(true); searchData(e.target.value)}}

      />
      <div className="Container">
        {results.map(item =>
          <Card
            image={item.image}
            name={item.name}
            specialisation={item.specialisation}
            designation={item.designation}
            description={item.description}
            location={item.location}
            fee={item.fee}
          />)
        }
      </div>
    </div>
  );
}

export default Doctors;