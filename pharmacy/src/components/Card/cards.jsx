import{React, useState} from 'react';
import './cardcss.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FormWrap, Icon, FormButton,Text,FormH1,Form,FormInput, FormLabel, FormContent} from "../Register/RegisterElements";
import Alert from 'react-popup-alert';
import { addAppointment } from '../../actions/user';
import {useMutation} from 'react-query';

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

const Card = ({id, image, name, designation,specialisation, location, fee}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const appointmentResource = useMutation((data) => addAppointment({...data}))

  const handleConfirm =(e)=>{
    e.preventDefault();
    appointmentResource.mutate({"id": id, time, date});
    console.log(time, date)
    console.log(id)
  }

  const [alert, setAlert] = useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })

  const handleTime = (e) => { setTime(e.target.value) }
  const handleDate = (e) => { setDate(e.target.value) }

  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: 'Appointment is confirmed',
      show: true
    })
  }

    return (
      <>
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={name} />
        </div>
        <div className="ColDetail" style={{paddingLeft:'30px', paddingTop:'20px'}}>
          <div className="Header">
            <div className="Bookname" style={{color:'green'}}>{name}, {designation}</div>
          </div>
          <div className="Description">{specialisation}</div>
          <div className="Description">{location}</div>
          <div className="Description">₹{fee}</div>
         
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
<FormWrap>
                    <Icon  style={{textTransform:'uppercase', textAlign:'center'}} to="/">{name}</Icon>
                    <FormContent>
                        <Form  onSubmit={handleConfirm}  action="#" >
                            <FormH1>Enter your Details</FormH1>
                            <FormLabel htmlFor='for'  >Time</FormLabel>
                            <FormInput name="time" type='time' required value={time} onChange={handleTime}step="900" ></FormInput>
                            <FormLabel htmlFor='for'  >Date</FormLabel>
                            <FormInput name="date" type='date' required value={date}  onChange={handleDate}></FormInput>
                            <FormButton type='submit' onClick={() => onShowAlert('success')}>Confirm Booking</FormButton>  
                            <Alert
        header={""}
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={false}
        alertStyles={{color:'white', textAlign:'center', padding:'12px'}}
        headerStyles={{color:'white', textAlign:'center', padding:'12px'}}
        textStyles={{color:'white', textAlign:'center', padding:'12px'}}
        buttonStyles={{color:'red',textAlign:'center', paddingtop:'12px', backgroundColor:'black', textDecoration:'none'}}
      />                    
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