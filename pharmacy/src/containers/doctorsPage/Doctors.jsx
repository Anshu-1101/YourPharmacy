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
            "designation": "Physcian",
            "location" : "Gorakhpur, India"
        },
    ]

    const fuse = new Fuse(data, {
        keys: ["name", "designation"],
      });

    const [results, setResult] = useState(data);
    
    const searchData = (pattern) => {
        if (!pattern) {
          setResult(data);
          return;
        }
    
        const fuse = new Fuse(results, {
          keys: ["title", "author"],
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
                        designation={item.designation}
                        location = {item.location} />)
                }
            </div>
        </div>
    );
}

export default Doctors;