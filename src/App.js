import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router,Switch,Route, Link} from 'react-router-dom'
import AddNewNote from './components/AddNewNote';
import AllNotes from './components/AllNotes';
import EditNote from './components/EditNote';
import Item from './components/Item';
import AllItems from './components/AllItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';


export default class App extends Component {
  state={
    noteList:[],
    noteIndex:{},
    index:0,
    flag:false
  }
  addNoteToList=(name,flag)=>{
    if(this.state.noteList.length===10)
    {
      alert('u can add just ten notes!!');
    }
    else
    {
      var date=this.getDate();
      //create new note
     this.setState({noteList:[{name:name , date:date, editDate:'',items:[]},...this.state.noteList]})
     this.setState({noteIndex:{name:name , date:date, editDate:'',items:[]}})
     if(flag===true)
     {
       this.setState({index:0})
       this.setState({flag:true})
     }
    }
  }
  getDate=()=>{
    //function return my full date d/m/y
    var d=new Date();
    var fullDate= d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    return fullDate;
  }
  deleteFromNotes=(index)=>{
    //delete note from noteList
    var newList=this.state.noteList.filter((e,i)=>(index!=i));
    this.setState({noteList:[...newList]})
  }
  saveIndex=(index)=>{
    //save index and noteList[index] to edit note.
    const note=this.state.noteList[index];
    this.setState({noteIndex:note})
    this.setState({index:index})
    this.setState({flag:true})
  }
  updateNote=()=>{
    //delete my note in this.state.index from list
    var newList=this.state.noteList.filter((e,index)=>(index!==(this.state.index)));
    this.setState({noteList:[...newList]})

    //update date edit
    var editNote=this.state.noteIndex;
    editNote.editDate=this.getDate();

    //update list notes
    this.setState({noteList:this.state.noteList})
  }
  
  //to add new item
  onFlag=()=>{
    //onclike to add item show the componnent item
    this.setState({flag:true})
  }
  showItems=()=>{
    if(this.state.flag===true)
    {
      //if u in edit show componnent items of note
      //and componnent add item
      return(<div>
        {
          this.state.noteIndex.items.map((e,i)=>{
            return <AllItems index={i} checkBox={e.radio} textItem={e.textItem} updateCheckBox={this.updateCheckBox}/>
          })
        }
        <Item addItem={this.addItem}/>
      </div>)
    }
  }
  addItem=(radio,text)=>{
    //add item to noteList[index].items
    const itemN={radio:radio, textItem:text}
    this.setState(state=>{
    const notes=this.state.noteList;
    notes[this.state.index].items.push(itemN)
    })
    //update state noteIndex
    const noteHelp=this.state.noteList[this.state.index];
    this.setState({noteIndex:noteHelp})
  }

  updateCheckBox=(check,index)=>{
       //delete my note in this.state.index from list
       var newList=this.state.noteList.filter((e,index)=>(index!==(this.state.index)));
       this.setState({noteList:[...newList]})
   
       //update date edit
       var editNoteItem=this.state.noteIndex.items[index];
       editNoteItem.radio=check;
   
       //update list notes
       this.setState({noteList:this.state.noteList})
  }
  render() {
    return (
      <div className="container">
        <Router>
          
          <Link to="/AddNewNote"><button id="addNewNoteButton" style={{marginBottom:'4%'}}><img id="addNewNote" src="https://cdn2.iconfinder.com/data/icons/business-and-internet/512/Note-512.png"/></button></Link>
          <Switch>
          <Route exact path='/' component={()=>{
            return (<div>
              <Logo/>
              {
                this.state.noteList.map((e,i)=>{
                  return <AllNotes name={e.name} index={i} date={e.date} deleteFromNotes={this.deleteFromNotes} saveI={this.saveIndex}/>
                })
              }
            </div>)
           }}/>
          <Route exact path='/AddNewNote' component={()=>{
            return <AddNewNote addNoteToList={this.addNoteToList}/>
           }}/>
           <Route exact path='/EditNote' component={()=>{
            return(<div>
              <EditNote name={this.state.noteIndex.name} updateNote={this.updateNote} index={this.state.index} deleteFromNotes={this.deleteFromNotes}/>
              {this.showItems()}
            </div>) 
           }}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

      // <header className="App-header">

      // </header>


