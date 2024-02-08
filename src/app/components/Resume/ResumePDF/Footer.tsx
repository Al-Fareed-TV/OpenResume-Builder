import React from 'react';
import { ResumePDFText } from "./common";

export const Footer = ({themeColor}:{
themeColor:string
}) =>{
    return(
        <footer style={{ marginTop: '5px', marginBottom: '2px', position: 'fixed', bottom: '0',boxSizing:'border-box'}}>
            <ResumePDFText style={{textAlign:'center',fontWeight:'bold'}}>CIN:U72200KA2014PTC075831</ResumePDFText>
            <hr style={{color:themeColor,height:'3px',backgroundColor:themeColor,boxShadow:'2px 2px 2px grey'}} />
            <ResumePDFText style={{textAlign:'center',fontWeight:'bold'}}>TESTVAGRANT TECHNOLOGIES PRIVATE LIMITED</ResumePDFText>
            <b><ResumePDFText  style={{textAlign:'center',fontWeight:'bold'}}>#284, Hothur Sqaure, 1st Floor, 100 Feet Rd, Bengaluru,Karnataka 560008| <a href={`mailto:info@testvagrant.com`}> info@testvagrant.com</a></ResumePDFText></b>
        </footer>
    )
}