import React from "react";

class Input extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: "",
            createdAt: new Date()
        }

        this.onJudulHandler = this.onJudulHandler.bind(this)
        this.onNoteHandler = this.onNoteHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onJudulHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onNoteHandler(event){
        this.setState(()=> {
            return{
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state)
    }
    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <div className="note-app__body">
                    <h2>Buat Catatan</h2>
                </div>
                <div className="note-input__title">
                    <div className="note-input__title__char-limit">Sisa Karakter : 0</div>
                    <input type="text" placeholder="Masukkan Judul" value={this.state.title} onChange={this.onJudulHandler}/>
                </div>
                <textarea cols="30" rows="10" placeholder="Masukkan Catatan Anda" value={this.state.body} onChange={this.onNoteHandler}></textarea>
                <button type="submit">Buat Catatan</button>
            </form>
        )
    }

    
}

export default Input;