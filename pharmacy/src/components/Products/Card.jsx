import{React, useState} from 'react';
import './Card.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useMutation} from 'react-query';
import { addToCartAction } from '../../actions/user';

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

const Card = ({_id, image, medname, medcomposition,brandname, price, addToCart}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const cartResource = useMutation((data) => addToCartAction({...data}))
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAdd = () => {
    console.log(_id)
    cartResource.mutate({"id": _id});
  };

  

 
    return (
      <>
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={medname} />
        </div>
        <div className="ColDetail" style={{paddingLeft:'30px', paddingTop:'20px'}}>
          <div className="Header">
            <div className="Bookname" style={{color:'green'}}>{medname}</div>
          </div>
          <div className="description">{medcomposition}</div>
          <div className="Description">{brandname}</div>
          <div className="Description">{price}</div>
         
          <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleAdd}>
        Add To Cart
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
            <h2 id="transition-modal-title">Order Added To Cart</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
 
                     
          </div>
        </Fade>
      </Modal>
        </div>
      </div>

       

      </>



      
    );
  };

export default Card;