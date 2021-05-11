import React from 'react'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';

function End() {
    return (
        
     <div>
       <Footer size="mini">
         <FooterSection type="left" logo="Celebrity-Profile"></FooterSection>
         <FooterSection type="right" logo="Social">
         <FooterLinkList>
            <a href="https://www.facebook.com/">FB</a>
            <a href="https://www.instagram.com/">INSTA</a>
            <a href="https://fr.linkedin.com/">lkdn</a>
            <a href="https://twitter.com/">Twit</a>
        </FooterLinkList>
         </FooterSection>
       </Footer>
     </div>

)
}

export default End