import photo from '../../images/image1.svg';
import photo2 from '../../images/image2.svg';

export const homeObjOne={
     lightBg: false,
     primary:true,
     imgStart:'',
     lightTopLine:true,
     lightTextDesc:true,
      buttonLabel:'Products',
      description: 'Buy Medicines, Book Appointments with Your Pharmacy, We provide best doctors and consultants in your service. ', 
      headline: "Your Pocket Pharmaceuticals" ,
      lightText:true,
      topLine:'Anywhere, Anytime, We are for you. ',
      img:photo,
      alt:'Image',
      primary:true,
      darkText:false,
      dark:true,
      link:"/product"
      

      
}


export const homeObjTwo={
      lightBg: true,
      primary:false,
      imgStart:'start',
      lightTopLine:false,
      lightTextDesc:false,
       buttonLabel:'Book Appointments',
       description: 'Book Appointments with our best doctors and medical facilities.',
       lightText: false,
       headline: "Choose Your Doctors" ,
       topLine:'Anywhere, Anytime, We are for you   ',
       img:photo2,
       link:"/doctors",
       alt:'Image',
        start:'true'
       
 };

 