import{React, useState} from 'react';
import "./style.css";

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

const Adminservice = () => {
  const handleOpen = () => {
    handleRemove();
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
    return (
        <>
        <div className="heading">
          <h1 style={{textAlign:'center' }}>Your Pharmacy Administrator Services</h1>
        </div>
    { }
     <div class="container">
      <div class="btn"><a href="#">Add New Doctor</a></div>
      <button class="btn" style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
         Add New Doctor
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
            <h2 id="transition-modal-title"> Thankyou for Ordering ! Your Order will be delivered soon.</h2>             
          </div>
        </Fade>
      </Modal>



      <div class="btn"><a href="#">Add new Product</a></div>
        
    </div>
    </>
     
    )
}

export default Adminservice
