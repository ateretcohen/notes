import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class EditNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
           
          
            <Link to="/"><button className="buttonNaveBar" onClick={()=>{this.props.updateNote()}}><img className="ImgNaveBar" src="https://www.inventicons.com//uploads/iconset/1168/wm/512/Arrow-back-left-arrow-previous-iconsvg-66.png"/><b>all notes</b></button></Link>  
            <Link to="/"><button className="buttonNaveBar" onClick={()=>{this.props.deleteFromNotes(this.props.index)}}><img className="allNotesImg" src="https://image.flaticon.com/icons/png/512/66/66847.png"/><b>  delete</b></button></Link>  
           
            <Link to="/"><button className="buttonNaveBar" onClick={()=>{this.props.updateNote()}}><b>done</b></button></Link>  
             <br/>
            <b className="edit" style={{marginTop:'10px'}}>{this.props.name}</b>

            </div>
        )
    }
}
