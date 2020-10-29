import data from './data.json';
import React from 'react';
import styled, {css} from 'styled-components';

const Form = styled.form`
  width:50%;
  margin-left:auto;
  margin-right:auto;
  font-family: 'Open Sans', sans-serif;
  text-align: left;
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #d6d2c4;
  color: #d6d2c4;
  margin: 20px 10px;
  padding: 0.25em 1em;

  :hover{
    color: black; 
    background:#d6d2c4;
  }

  ${props => props.primary && css`
    background: transparent;
    color: white;
  `}
`;

const Result= styled.h3`
 color: black;
 border: 2px solid #d6d2c4;
 border-radius: 3px;
 text-align: center;
`

const Green = styled.span`
  color:green;
`

const Red = styled.span`
  color:red;
`

const Final = styled.div`
  text-align: center;
`

class Question extends React.Component {   
    state={
      isSubmit: false,
      isCorrect:false,
      num:0,
      score:0,
      currentValue:''
    }
   
 
    handleSubmit=(e)=>{
        const {num, score} =this.state
        e.preventDefault();
        
      if(e.target.choice.value=== data[num].correct){
       
          this.setState({
            isSubmit:true,
            isCorrect:true,
            score:score+1,   
          })     
      }else{
        this.setState({
            isSubmit:true,        
          }) 
          
      }
    }
    handleNext=()=>{ 
        this.setState({
            isSubmit:false,  
            num: this.state.num +1, 
            isCorrect:false,
            isCheck:false,
            currentValue: ''
          })     
    }

    handleCheckRadio=(e)=>{
        this.setState({
            currentValue: e.target.value
        })
    }
    handleRestart=()=>{
        window.location.reload()
    }
   
    render(){
        
        const { isCorrect, isSubmit, num, score,currentValue}= this.state
        const {data}=this.props
        
        return (
        
        <Form onSubmit={this.handleSubmit}>
         <h3>{data[num].question}</h3>
         <ul >
           {data[num].incorrect.map((e, i)=>{
               return  <li key={i}><label htmlFor={i} ><input type='radio' name='choice' onChange={this.handleCheckRadio} checked={currentValue===e} value={e} id = {i} required/>{e}</label></li>
           })}
           </ul>
           {!isSubmit &&<Button primary type='submit'> Submit</Button>}
           {isSubmit && <Result><p>The correct Answear is {data[num].correct}</p><p>Your Answear is
           {isCorrect? <Green> Correct</Green>: <Red> Wrong</Red>}</p>
           <br></br>
           {(num<9)&&<Button onClick={this.handleNext}>Next</Button>}</Result> }
           {(num===9 &&  isSubmit)&& <Final><h2>You got {score} out of 10 !</h2> <Button onClick={this.handleRestart}>Restart</Button></Final>}
                     
        </Form>
    )
 }
}

export default Question


