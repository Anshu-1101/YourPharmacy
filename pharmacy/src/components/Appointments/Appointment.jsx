import Card from './Card';
import SearchBar from '../../components/SearchBar/Search';
import Fuse from "fuse.js";
import './Appointment.css';
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getDoctorAction} from '../../actions/doctors'
import nodata from './nodata.svg'

function  Doctors() {

  const data =  useQuery([], async ()=> await getDoctorAction())
  console.log("data: ",data)

  const fuse = new Fuse(data, {
    keys: ["name", "designation", "specialisation", "fee", "time", "date"],
  });
  

  useEffect(()=>{
    if (!data.isLoading && data.isSuccess)
      {
        // setResult(data.data.data)
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
      keys: ["name", "designation", "specialisation", "fee", "time", "date"],
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

    (results&& results.length>0)?

    (<div className="page">
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
            fee={item.fee}
            time={item.time}
            date={item.date}
          />)
        }
      </div>
    </div>):
   <>
    <img style={{height:'400px', width:'400px', justifyContent:'center', display:'block', marginLeft: 'auto',
    marginRight: 'auto'}} src={nodata}></img>
    <h1 style={{textAlign:'center', justifyContent:'center', color:'green',marginBottom:'10px'}}>No Appointment To Show</h1>
    </>
  );
}

export default Doctors;