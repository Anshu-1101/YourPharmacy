import Card from '../../components/Card/cards';
import SearchBar from '../../components/SearchBar/Search';
import Fuse from "fuse.js";
import './Doctors.css';
import React, { useEffect, useState } from "react";


function Doctors() {
    const data = [
        {
            "name": "dr. RP Tripathi",
            "image": "https://shardahospital.org/uploads/doctor/doc_r_p_tripathi.jpg",
            "specialisation":"MBBS",
            "designation": "General & Family Physician",
            "location" : "Sharda Hospital, Gorakhpur",
                     },
        {
          "name": "dr. Radha Jeena"
          "image": "https://content3.jdmagicbox.com/comp/gorakhpur/b4/9999px551.x551.180421102256.e9b4/catalogue/dr-radha-jina-rapti-nagar-gorakhpur-gynaecologist-and-obstetrician-doctors-0nu7h28zzw-250.jpg",
          "specialisation":"MBBS, MD",
          "designation": "Gynocologist",
          "location" : "Medical College, Gorakhpur",
          
      },
      {
        "name": "dr. Pankaj beniwal",
        "image": "https://www.sehat.com/doctor_logos/1562840802yush-mathur.JPG",
        "specialisation":"MBBS, MD, DM",
        "designation": "Nephrology",
        "location" : "SMS Hospital, Jaipur",
         
    },
    {
      "name": "dr. RP Tripathi",
      "image": "https://shardahospital.org/uploads/doctor/doc_r_p_tripathi.jpg",
      "specialisation":"MBBS",
      "designation": "General & Family Physician",
      "location" : "Sharda Hospital, Gorakhpur",
       
  },
  {
    "name": "dr. RP Tripathi",
    "image": "https://shardahospital.org/uploads/doctor/doc_r_p_tripathi.jpg",
    "specialisation":"MBBS",
    "designation": "General & Family Physician",
    "location" : "Sharda Hospital, Gorakhpur",
    
},
    ]

    const fuse = new Fuse(data, {
        keys: ["name", "designation", "specialisation"],
      });

    const [results, setResult] = useState(data);
    
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
          result.forEach(({item}) => {
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
                        location = {item.location}
                         />)
                }
            </div>
        </div>
    );
}

export default Doctors;