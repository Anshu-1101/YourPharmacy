import{React, useState} from 'react';
import './cardcss.css';
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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Card = ({image, name, designation,specialisation, location, fee}) => {
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
            <div className="Bookname" style={{color:'green'}}>{name}, {specialisation}</div>
          </div>
          {/* <div className="description">{specialisation}</div> */}
          <div className="Description">{designation}</div>
          <div className="Description">{location}</div>
          <div className="Description">{fee}</div>
         
          <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
        Book Appointment
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
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}

<FormWrap>
                    <Icon  style={{textTransform:'uppercase', textAlign:'center'}} to="/">{name}</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Enter your Details</FormH1>
                            
                            <FormLabel htmlFor='for' >Time</FormLabel>
                            <FormInput type='time' required></FormInput>
                            <FormLabel htmlFor='for' >Date</FormLabel>
                            <FormInput type='date' required></FormInput>
                            <FormButton type='submit'>Confirm Booking</FormButton>    
                        </Form>
                    </FormContent>
                </FormWrap>
          </div>
        </Fade>
      </Modal>
        </div>
      </div>

       

      </>



      
    );
  };

export default Card;