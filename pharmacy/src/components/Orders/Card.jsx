import{React, useState} from 'react';
import './Card.css';
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

const Card = ({image, medname, medcomposition,brandname, price, quantity, date}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const cost = parseFloat(price.substr(1))*parseFloat(quantity);
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
          <img className="Img" src={image} alt={medname} />
        </div>
        <div className="ColDetail" style={{paddingLeft:'30px', paddingTop:'20px'}}>
          <div className="Header">
            <div className="Bookname" style={{color:'green'}}>{medname}</div>
          </div>
          {/* <div className="description">{medcomposition}</div> */}
          <div className="Description">{brandname}</div>
          {/* <div className="Description">{price}</div> */}
         
          <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
        View Details
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
          <div  style={{backgroundColor:'#78AB46', width:'600px',height:'auto', borderRadius:'20px'}} className={classes.paper}>
            <h2 id="transition-modal-title">
            <div className="Bookname" style={{color:'green'}}>{medname}</div>
            <div className="Description" style={{color: "black"}}>{brandname}</div>
            <div className="description" style={{color: "black"}}>{medcomposition}</div>
            <div className="Description" style={{color: "black"}}>Cost: ₹{cost}</div>
            <div className="Description" style={{color: "black"}}>{date}</div>
            </h2>
            
                     
          </div>
        </Fade>
      </Modal>
        </div>
      </div>
      </>
    );
  };

export default Card;