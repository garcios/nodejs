//console.log('Starting notes.js');

const fs = require('fs');

const filename = 'notes-data.json';

var addNote =  (title, body) =>{
    console.log('Adding note', title, body);

    var notes = fetchNotes();
 
    
    var note = {
      title,
      body
    };

    var duplicateNotes = notes.filter( (note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

    return null;

};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) =>{
     var notes = fetchNotes();
     var filteredNote = notes.filter( (note) => note.title === title);
     return filteredNote[0];
};

var removeNote = (title) =>{
    //fetch notes
    var notes = fetchNotes();
    //filter notes, removing the one with title of the argument
    var filteredNotes = notes.filter( (note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var fetchNotes = () =>{
    var notes = [];
    try {
        var notesString = fs.readFileSync(filename);
        if (notesString.length > 0){
           notes = JSON.parse(notesString);
        }
      }catch(e){
           console.log(e);
       }  

     return notes;  
};

var saveNotes = (notes) => {
    fs.writeFileSync(filename, JSON.stringify(notes));
};

var logNote = (note) =>{
    console.log('---');
    console.log(`Title: ${note.title} `);
    console.log(`Body: ${note.body} `);
};

module.exports= {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
