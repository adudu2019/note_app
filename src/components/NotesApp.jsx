import React, { Component } from 'react'
import Header from './Header'
import Input from './Input'
import Item from './ItemBody'
import NotesList from './NotesList'
import { getData } from '../utils/index'

export default class NotesApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: getData(),
    }

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
  }

  onAddNotesHandler({title, body, createdAt}){
    const date = new Date()
    
    this.setState((prevState) => {
      return{
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived:false
          }
        ]
      }
    })
  }

  onDeleteNotesHandler(id){
    const notes = this.state.notes.filter(notes => notes.id !== id);
    this.setState({notes})
  }

  render() {
    // const data = getData();
    const active = this.state.notes.filter(note => note.archived == false)
    return (
        <div className="container-root">
            <Header/>
            <Input addNotes={this.onAddNotesHandler}/>
            <NotesList activeData={active} notes={this.state.notes} onDelete={this.onDeleteNotesHandler}/>
        </div>
    )
  }
}
