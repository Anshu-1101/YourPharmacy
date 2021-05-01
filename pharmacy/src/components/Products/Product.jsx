import Card from './Card';
import SearchBar from '../../components/SearchBar/Search';
import Fuse from "fuse.js";
import './Product.css';
import React, { useEffect, useState } from "react";


function Product() {
    const data = [
        {
            "medname": "HealthKart Multivitamin with Multimineral",
            "image": "https://img4.hkrtcdn.com/14378/prd_1437793-HealthKart-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_o.jpg",
            "medcomposition":"Amino Acids, Taurine & Ginseng Extract, 60 tablet(s)",
            "brandname": "Healthkart",
            "price" : "₹389",
        
                     },

            {
            "medname": "Digine",
            "image": "https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/v1593157590/mojx6v5n8cptfgf1uo8q.png",
            "medcomposition":"Magnesium Hydroxide, Antacid",
            "brandname": "Abbott ",
            "price" : "₹99",
                     },
                     
        {
            "medname": "Combiflam Tablet",
            "image": "https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1600150823/cropped/niowfyzxquufm1i2zqgo.jpg",
            "medcomposition":"ibuprofen",
            "brandname": "sanfoi manufacturers",
            "price" : "₹33.5",
                     },

                     {
            "medname": "Chawanprash",
            "image": "https://rukminim1.flixcart.com/image/416/416/kesv0y80/ayurvedic/f/b/r/500-chyawanprash-dabur-original-imafve8aemrnsvgz.jpeg?q=70",
            "medcomposition":"(500 gm) sugar, honey, ghee, Indian gooseberry (amla) jam, sesame oil, berries and various herbs and spices",
            "brandname": "Dabur",
            "price" : "₹159",
                     },
 
    ]

    const fuse = new Fuse(data, {
        keys: ["medname", "brandname", "medcomposition"],
      });

    const [results, setResult] = useState(data);
    
    const searchData = (pattern) => {
        if (!pattern) {
          setResult(data);
          return;
        }
    
        const fuse = new Fuse(results, {
           keys: ["medname", "brandname", "medcomposition"],
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
                        medname={item.medname}
                        medcomposition={item.medcomposition}
                        brandname={item.brandname}
                        // description={item.description}
                    price = {item.price}
                         />)
                }
            </div>
        </div>
    );
}

export default Product;