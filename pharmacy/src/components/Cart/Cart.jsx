import Card from "./Card";
import SearchBar from "../../components/SearchBar/Search";
import Fuse from "fuse.js";
import "./Cart.css";
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getProductAction} from '../../actions/products'
import emptycart from './emptycart.svg';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Cart() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const data = useQuery("cartdata", async () => await getProductAction());
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
        onChange={(e) => {finshsearch(true); searchData(e.target.value)}}
      />
      <div className="Container">
        {(results)?results.map((item) => (
          <Card
            image={item.url}
            medname={item.name}
            medcomposition={item.composition}
            brandname={item.brandname}
            price={item.price}
          />
        )): 
        <img style={{height:'400px', width:'400px', justifyContent:'center', display:'block', marginLeft: 'auto',
        marginRight: 'auto'}} src={emptycart}></img>
        }
      </div>
      <div className="Container">
      <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
        Checkout
      </button>
  
      <Modal

       style={{backdropFilter:'blur(5px)'}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div  style={{backgroundColor:'#78AB46', width:'300px',height:'auto', borderRadius:'20px'}} className={classes.paper}>
            <h2 id="transition-modal-title">Your Order will be delivered within 2 days.</h2>
 
                     
          </div>
        </Fade>
      </Modal>
      </div>
      {/* </div>
      <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
        Checkout
      </button>
      <Modal

       style={{backdropFilter:'blur(5px)'}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div  style={{backgroundColor:'#78AB46', width:'500px',height:'auto', borderRadius:'20px'}} className={classes.paper}>
<FormWrap>
                    <Icon  style={{textTransform:'uppercase', textAlign:'center'}} to="/">{name}</Icon>
                    <FormContent>
                        <Form  onSubmit={handleOrder}  action="#" >
                            <FormH1>Enter your Details</FormH1>
                            <FormLabel htmlFor='for'  >Name</FormLabel>
                            <FormInput name="user" type='text' required value={cart.user}  onChange={handleInput}></FormInput>
                            
                            <FormLabel htmlFor='for' >Address</FormLabel>
                            <FormInput name="address" type='text' required value={cart.address} onChange={handleInput} ></FormInput>
                            <FormButton type='submit'>Proceed for Order</FormButton>    
                        </Form>
                    </FormContent>
                </FormWrap>
          </div>
        </Fade>
      </Modal> */}
    </div>
  );
}

export default Cart;
