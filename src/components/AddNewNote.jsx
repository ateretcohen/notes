import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddNewNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }
    addItem=()=>{
       this.props.onFlag() 
    }
    render() {
        return (
            <div>
               <hr/>
               <Link to="/"><button className="buttonNaveBar" onClick={()=>{this.props.addNoteToList(this.state.name,false)}}><img className="ImgNaveBar" src="https://www.inventicons.com//uploads/iconset/1168/wm/512/Arrow-back-left-arrow-previous-iconsvg-66.png"/><b>all notes</b></button></Link>      
               <Link to="/EditNote"><button className="buttonNaveBar" onClick={()=>{this.props.addNoteToList(this.state.name,true)}}><img className="ImgNaveBar" src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/check-circle-512.png"/><b> add item</b></button></Link> 
               <Link to="/"><button className="buttonNaveBar" onClick={()=>{this.props.addNoteToList(this.state.name,false)}}><b>done</b></button></Link> 
               <hr/>
               <input type="text" className="input" placeholder="note name" onChange={(e)=>{this.setState({name:e.target.value})}}/>  
            </div>
        )
    }
}
