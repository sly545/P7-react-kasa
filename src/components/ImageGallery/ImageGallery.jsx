import Accomodation from "../../pages/Accomodation/Accomodation";

export default function ImageGallery () {
   
     const images = Accomodation.pictures   

  return (

    <div>
  
        <Accomodation images={images}/>
      
    </div>
  );
  
}
    
console.log(Accomodation);
   



