import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemText:'',
             radio:false
        }
    }
    radioChenge=()=>{
        //turn off/on radio button
        if(this.state.radio==true)
        {
            this.setState({radio:false})
        }
        else
        {
            this.setState({radio:true})
        }
    }
    text=()=>{
     this.props.addItem(this.state.radio,this.state.itemText)
    }
    render() {
        return (
            <div className="edit">
                <input type="checkbox" onChange={this.radioChenge}/><span className="checkboxSpan"></span>
                <input type="text" className="input" style={{width:'30%', marginLeft:'5px'}} onChange={(e)=>{this.setState({itemText:e.target.value})}} placeholder="add item"/>
                <button id="addItem" onClick={this.text}><b>add</b></button>
            </div>
        )
    }
}
