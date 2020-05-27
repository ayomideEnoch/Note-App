import React, {Component} from 'react';
// You have fourty five minutes time. Please create a basic note taking app, use any resource. The app should alow you to take notes, save them, use them later. No need for a database or anything, the user's notes will be lost once they exit the session. Make it look good, both desktop mobile. Do whatever you can to blow me away in 45 minutes. 12:15 Central Time
class takeNote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addNote = this.addNote.bind(this);
  }

  addNote(event) {
    console.log('Working');

    if( this.theTitle.value !== '' ) {
      var newItem = {
        title: this.theTitle.value,
        note: this.theNote.value
      };
    }

    this.setState((prevState) => {
      return {
        items:  prevState.items.concat(newItem)
      }
    });
    
    this.theNote.value = '';
    this.theTitle.value = '';

    console.log(this.state.items);


    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Note Taking App</h1>
        </header>     
      <div className='main-content'>
        <ul>
          {this.state.items.map( (val) => <li>{val.title} = {val.note} </li> )}
        </ul>
      </div>
      <footer>
        <form onSubmit={this.addNote}>
          <input        
            type='text' 
            placehoder='Enter Note Title Here'
            ref={(title) => this.theTitle = title}
            />
           placeholder='Enter Your Note Here'
           ref={(note) =>this.theNote = note}
          <textarea />
          <button type='submit' value='Add Note'>Add Note</button>
        </form>
      </footer>
      </div>
    );
  }
}

export default takeNote;