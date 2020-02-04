import React, { Component } from 'react'

export default class AllItems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             radio:this.props.checkBox
        }
    }
    radioChenge=()=>{
        //turn off/on radio button
        if(this.state.radio==true)
        {
             //chenge
             this.props.updateCheckBox(false,this.props.index)
        }
        else
        {
             //chenge
             this.props.updateCheckBox(true,this.props.index)
        }
        
       
    }
    render() {
        return (
            <div className="edit">
                <input type="checkbox" defaultChecked={this.props.checkBox} onChange={this.radioChenge}/>
                <span style={{marginLeft:'5px'}}>{this.props.textItem}</span>
            </div>
        )
    }
}
