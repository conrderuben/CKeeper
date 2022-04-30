import React,{Component, useState} from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from "styled-components";
import * as bootstrap from 'bootstrap';

const Container =styled.div`

margin-bottom: 10px;
`


export default class File extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props);
        this.state = 
            {file: [],}
        
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files);
       
        for (let i = 0; i <= this.fileObj.length-1; i++) {

          this.fileArray[i]=(URL.createObjectURL(this.fileObj[i][0]));
        this.setState({ file: this.fileArray });
        
        }
    }
    uploadFiles(e) {
        e.preventDefault();
        console.log(this.state.file);
    }

   render(){
    return (
  <div>
    
       <h3>Add new Photo</h3>
     <label htmlFor="foto" style={{cursor:"pointer"}} >   <AddBoxIcon style={{fontSize:60}} /> </label>
     <input type="file" onChange={this.uploadMultipleFiles} onInput={(e) => {this.props.onChange(e);}} multiple id="foto" name="foto" style={{display:"none",visibility:"none"}} />
        
     
<div className="form-group multi-preview">
         { this.fileArray.map( (url,index) => (
             <img src={url} key={index} alt="..." width="400px" height="300px"/>
         ))}
       </div>
  </div>
 )}







}





