import{React, useState} from 'react';
import './Card.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useQuery} from 'react-query'
import {useMutation} from 'react-query';
import { removeFromCartAction } from '../../actions/user';

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

const Card = ({_id, image, medname, medcomposition,brandname, price, quantity}) => {

  const cartResource = useMutation((data) => removeFromCartAction({...data}))
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleRemove = () => {
    console.log(_id)
    cartResource.mutate({'id': _id});
  }
  const handleOpen = () => {
    handleRemove();
    setOpen(true);
    
  };
  const cost = parseFloat(price.substr(1))*parseFloat(quantity);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
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
          
          <div className="Description">Quantity: {quantity}</div>
          <div className="Description">Cost: ₹{cost}</div>
{/*          
          <button style={{color:'#fff', backgroundColor:'#78AB46', padding:'8px', outline:'none', cursor:'pointer', borderRadius:'10px'}} type="button" onClick={handleOpen}>
        Remove Item
      </button> */}
     
       
        </div>
      </div>
      </>
    );
  };

export default Card;