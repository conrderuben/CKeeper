import React,{Component, useState} from "react";
import styled from "styled-components";
import * as bootstrap from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlus,
  } from '@fortawesome/free-solid-svg-icons';
  
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
        console.log(this.fileArray)
    }
    uploadFiles(e) {
        e.preventDefault();
        console.log(this.state.file);
    }

   render(){
    return (
  <div className="mt-3 fileContainer">
    <div className="fotoContainer">
    <h3 style={{color:"white"}}>Add new Photo</h3>
     <label htmlFor="foto" style={{cursor:"pointer"}} > <FontAwesomeIcon icon={faPlus} className="addIcon" style={{fontSize:30,color:"white"}}/> </label>
     </div>
       <div className="fotoContainer">
       
     <input type="file" accept="image/png, image/gif, image/jpeg" required onChange={this.uploadMultipleFiles} onInput={(e) => {this.props.onChange(e);}} multiple id="foto" name="foto" style={{display:"none",visibility:"none"}} />
        
     
    <div className="form-group multi-preview foto d-flex" >
         { this.fileArray.map( (url,index) => (
             <img src={url} key={index}  width="50px" height="25px"/>
         ))}
       </div>
       </div>
  </div>
 )}







}





