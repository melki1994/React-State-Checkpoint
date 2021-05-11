import React from 'react';
import './App.css';
import Start from './profile/Navbar';
import End from './profile/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-bootstrap';




class App extends React.Component {
  constructor(props){
super(props);
this.state={
  Person:{
    fullName:"Rowan Atkinson" ,
    bio:"Rowan Atkinson is a celebrated comic actor and writer, who is best-known for his role as ‘Mr. Bean’ in the hit television series and two feature films of the same name. He is a man with a pliant face, who can alter his look from a complete buffoon to a snooty grandee in a matter of seconds. He learnt of his flair for comedy while attending Oxford University and since then, there has been no looking back. Apart from the rib-tickling ‘Mr. Bean’ comedy series, he has gripped audiences with his performance in ‘The Black Adder’. He is often lauded for his black humor and his knack for physical comedy. During his early years, he was introduced to future screenwriter, Richard Curtis, with whom he wrote and performed comedy lampoons at the Oxford Playhouse and later at the Edinburgh Fringe. This led to local popularity and a stint in the popular television comedy series, ‘Not the Nine O’ Clock News’, which he wrote and acted in. He made his motion picture debut with the James Bond thriller, ‘Never Say Never Again’ and went on to star in a number of films including ‘The Witches’, ‘Four Weddings and a Funeral’, ‘The Lion King’, ‘Bean, ‘Johnny English’ and ‘Keeping Mum’" ,
    imgSrc:"/Rowan-Atkinson.jpg",
    profession:"Actor & Comedian" 
  },toggle:false,
  count:0
}
  }
handleClick=()=>{
  this.setState({toggle:!this.state.toggle})
}
componentDidMount(){
setInterval(()=>{
  this.setState({count:this.state.count+1})

},1000);
  
}


render(){
  
  
    return (this.state.toggle? 
  
     
    
    <div className='Menu'>
      <Start />
      <div  style={{textAlign:'center',marginTop:'4%'}}>
      <Button variant="secondary"  onClick={this.handleClick}>Hide profile</Button>
    <p style={{  color:'black',fontWeight: 'bold',fontSize:'larger'}}>{this.state.count}</p>
      </div>

      <div style={{margin:'3% 10% 4% 10%',lineHeight:'1.5',padding:'2%',background:'peachpuff',boxShadow: '3px 3px 5px #00000063',borderRadius:'20px'}}>
    <p style={{color:'rgb(120, 98, 150)',fontSize:'larger'}}> <span style={{  color:'black',fontWeight: 'bold',fontSize:'larger'}}>Full name:</span>  {this.state.Person.fullName}</p>
    <p style={{color:'rgb(120, 98, 150)',fontSize:'larger'}}><span style={{  color:'black',fontWeight: 'bold',fontSize:'larger'}}>Profession:</span> {this.state.Person.profession}</p>
    <p style={{color:'rgb(120, 98, 150)',fontSize:'larger'}}><span style={{  color:'black',fontWeight: 'bold',fontSize:'larger'}}>Bio:</span> {this.state.Person.bio}</p>
    <img src={this.state.Person.imgSrc} alt="myImage" style={{border: '1px solid wheat',
       boxShadow: '-3px 3px 5px rgb(120, 98, 150), -7px 7px 5px rgb(223, 207, 243)',
       marginLeft:'40%',marginTop:'3%' ,marginBottom:'3%', width:'25%',height:'40%'}} />
    </div>
       
       <End/>
       </div>:<div> <div style={{textAlign:'center',marginTop:'4%'}}>
      <Button variant="secondary"  onClick={this.handleClick}>Show profile</Button>
      </div>
      <img src="/Rowan-Atkinson-inspiration.jpg" alt='inspiration' style={{margin:'2% 10% auto 10%', height:'50%px',width:'80%',textAlign:'center'}} />
     </div>
      );
   
   

    };
  }
   

    export default App;