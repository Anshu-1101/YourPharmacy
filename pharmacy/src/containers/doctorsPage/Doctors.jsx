import Card from '../../components/Card/cards';
import SearchBar from '../../components/SearchBar/Search';
import Fuse from "fuse.js";
import './Doctors.css';
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getDoctorAction} from '../../actions/doctors'

function  Doctors() {

  const data =  useQuery([], async ()=> await getDoctorAction())
  console.log("data: ",data)

  const fuse = new Fuse(data, {
    keys: ["name", "designation", "specialisation"],
  });
  

  useEffect(()=>{
    if (!data.isLoading && data.isSuccess)
      {
        setResult(data.data.data)
        console.log(data.data.data)
      }
  },[data])

  const [results, setResult] = useState([]);

  const searchData = (pattern) => {
    if (!pattern) {
      setResult(data);
      return;
    }

    const fuse = new Fuse(results, {
      keys: ["name", "designation", "specialisation"],
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
        onChange={(e) => searchData(e.target.value)}
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
          />)
        }
      </div>
    </div>
  );
}

export default Doctors;