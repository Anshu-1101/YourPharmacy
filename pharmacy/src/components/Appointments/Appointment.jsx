import Card from './Card';
// import SearchBar from '../../components/SearchBar/Search';
import Fuse from "fuse.js";
import './Appointment.css';
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getDoctorAction} from '../../actions/doctors'
import nodata from './nodata.svg'
import { getAppointment } from '../../actions/user';

function  Doctors() {

  const data = useQuery("getAppointment", async () => await getAppointment());
   
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
      
      <div className="Container">
        {results.map(item =>
          <Card
            image={item.doctor.image}
            name={item.doctor.name}
            specialisation={item.doctor.specialisation}
            designation={item.doctor.designation}
            description={item.doctor.description}
            location={item.doctor.location}
            fee={item.doctor.fee}
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