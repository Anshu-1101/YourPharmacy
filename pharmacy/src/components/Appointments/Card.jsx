import{React, useState} from 'react';
import './Card.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FormWrap, Icon, FormButton,Text,FormH1,Form,FormInput, FormLabel, FormContent} from "../Register/RegisterElements";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Card = ({image,name,designation, specialisation, time, date}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
    return (
      <>
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={name} />
        </div>
        <div className="ColDetail" style={{paddingLeft:'30px', paddingTop:'20px'}}>
          <div className="Header">
            <div className="Bookname" style={{color:'green'}}>{name}</div>
          </div>
          <div className="description">{designation}</div>
          <div className="Description">{specialisation}</div>
          <div className="Description">{time}</div>
          <div className="Description">{date}</div>
        
         
          <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
Payment Details
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
   <div  style={{backgroundColor:'#78AB46', width:'400px',height:'auto', borderRadius:'20px'}} className={classes.paper}>
     <h2 id="transition-modal-title">Appointment Details</h2> 
             
   </div>
 </Fade>
</Modal>


      
        </div>
      </div>

      </>
      
    );
  };

export default Card;