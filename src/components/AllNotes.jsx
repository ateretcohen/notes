import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AllNotes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
           <div className="card" style={{backgroundColor:'rgb(207, 230, 253)'}}>
               <div className="row">
               <div className="col-9">
                <b>{this.props.name}</b><br/>
                <span id="createDate">{this.props.date}</span>
               </div>
                <div className="col-1">
                <Link to="/EditNote"><button className="allNoteButtons" onClick={()=>{this.props.saveI(this.props.index)}}><img className="allNotesImg" src="https://cdn2.iconfinder.com/data/icons/business-and-internet/512/Note-512.png"/></button></Link> 
                </div>
                <div className="col-1">
                <button className="allNoteButtons" onClick={()=>{this.props.deleteFromNotes(this.props.index)}}><img className="allNotesImg" src="https://image.flaticon.com/icons/png/512/61/61848.png"/></button>
                </div>
                <div className="col-1"></div>
               </div>
            </div>
        )
    }
}
