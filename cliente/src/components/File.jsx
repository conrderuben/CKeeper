import React,{useState} from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from "styled-components";

const Container =styled.div`

margin-bottom: 10px;
`

const File = () => {  
     const [hide, setHide] = useState(true)
    const [image, setImage] = useState(null)
const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setHide(false);
    }
   }
    return (
      <Container>
          <h3>Add new Photo</h3>
          <label htmlFor="filetype" style={{cursor:"pointer"}}>   <AddBoxIcon  style={{fontSize:60}} /> </label>
          <input type="file" onChange={onImageChange} id="filetype"className="filetype" style={{display:"none",visibility:"none"}} />
          
          <div id="image" hidden={hide} ><img src={image} width="500px" height="300px" alt="preview image" /></div>
         
          


                </Container>
   
   );
  };
  
  export default File;