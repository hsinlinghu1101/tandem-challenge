import Question from './Question'
import data from './data.json';
import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
    text-align: center;
    font-size:20;
    color:#fff5ea;
  ` 
const Header= styled.header`
    font-family: 'PT Mono', monospace;
    font-weight:bold;
    color:black;
    background-color: #f7dad9;
    margin:25px 0;
    padding:15px 0;
` 

class App extends React.Component {
  state={
    arr:data.sort(() => Math.random() - Math.random()).slice(0, 10)
  }
      
  componentDidMount(){
     const {arr}= this.state
    for(let i=0; i<arr.length; i++){
      arr[i].incorrect.splice(Math.floor(Math.random() * Math.floor(arr[i].incorrect.length)), 0, arr[i].correct)
      arr[i].incorrect=[...new Set(arr[i].incorrect)]
    }
    this.setState({
      arr: this.state.arr
    })
  }
 
  render(){ 
  return (
    <Body> 
       <Header><h1>Tandem Code Challenge</h1><h3>10 Questions</h3></Header>
       <Question data={this.state.arr}/>    
    </Body>
  );
}
}

export default App;
