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
                <input type="text" className="input" style={{width:'70%', marginLeft:'5%'}} onChange={(e)=>{this.setState({itemText:e.target.value})}} placeholder="add item"/>
                <button id="addItem" onClick={this.text} style={{width:'15%',marginLeft:'5%',backgroundColor:'rgb(151, 199, 247)',padding: '1% 3%',borderRadius:'4px',marginTop:'2%'}}><b>add</b></button>
            </div>
        )
    }
}
