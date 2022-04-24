import React, { Component } from 'react'
import AllTasks from './AllTasks';

export default class TaskForm extends Component {
    constructor(){
        super();
        this.state ={
            titel:'',
            description:'',
            AllTasks:[],
            err:''
        }
    }
    handlechenge = (e) =>{

        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick = () =>{
        if(this.state.titel!==''&& this.state.description!==''){
            let newTasks = this.state.AllTasks;
            let taskObj ={
            titel: this.state.titel,
            description: this.state.description,
           
            
        }
        newTasks.push(taskObj)
        this.setState({
            AllTasks:newTasks,
            titel:'',
            description:'',
           
            err:''
        })

        }else{
            this.setState({
                err:'All fields are Required'
            })
        }
        
        
    }
    deletTask =(taskIndex) =>{
        let currentArray = this.state.AllTasks;
        let newArray = [];
        currentArray.forEach((val,index) =>{
            if(taskIndex!== index){
                newArray.push(val);

            }
            this.setState({
                AllTasks: newArray
            })
        })

    }
  render() {
   //console.log(this.state)
    return (
      <div>
          <div className='taskform'>
          
              <input value={this.state.titel} name='titel' type="text"  placeholder='Titel' onChange={this.handlechenge}/>
              <input value={this.state.description} name='description' type="text"  placeholder='Description'onChange={this.handlechenge}/>
              <button onClick={this.handleClick}>Add New Task</button>
              <h5>{ this.state.err ? this.state.err : null}</h5>
          </div>
          <div>
              <AllTasks tasks={this.state.AllTasks} deletTask={this.deletTask}/>
          </div>
      </div>
    )
  }
}
