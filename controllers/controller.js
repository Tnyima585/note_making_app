

const notes = [
    {
      noteId: 1,
      noteContent: "Hey, you can add your important notes here",
    },
  ];

const homePage =  function (req, res) {
    return res.render("home", { data: notes });
  };

const createNote = (req, res) => {
    const noteContent = req.body.noteContent;
    const noteId = notes.length + 1;
  
    notes.push({
      noteId: noteId,
      noteContent: noteContent,
    });
    console.log(req.body);
    console.log(notes);
    return res.render("home", { data: notes });
  }


  const updateNote = (req, res) => {
    var noteId = req.body.noteId;
    var noteContent = req.body.noteContent;
  
    notes.forEach((note) => {
      if (note.noteId == noteId) {
        note.noteContent = noteContent;
      }
    });
    return res.render("home", {
      data: notes,
    });
  }


  const deleteNote=(req, res) => {
    var noteId = req.body.noteId;
  
    var j = 0;
    notes.forEach(note=> {
      j = j + 1;
      if(note.noteId == noteId) {
        notes.splice((j-1), 1)
      }
    })
  return res.render('home', { 
    data:notes
  })
  }

  module.exports={homePage,createNote,updateNote,deleteNote}