const Notes = require('../models/notes');

const notes = (req, res) => {
    Notes.find().sort({createdAt: -1})
    .then((result) => {
        res.render('note/notes', {title: 'All Notes', notes: result })
    })
    .catch((err) => {
        console.log(err)
    })
}

const notes_search = (res, req) => {
    const id = req.params.id;
    Notes.findOne
        .then((result) => {
            res.render('note/details', {note: result, title: 'Note Details'});
        })
        .catch((err) => {
            res.status(404).render('404', {title: 'Note Not Found'});
         });
}

const notes_details = (req, res) => {
    const id = req.params.id;
    Notes.findById(id)
        .then((result) => {
            res.render('note/details', {note: result, title: 'Note Details'});
        })
        .catch((err) => {
            res.status(404).render('404', {title: 'Note Not Found'});
         });
}

const notes_create_get = (req, res) => {
    res.render('note/create', {title: 'Create A New Note'});
}

const notes_create_post = (req, res) => {
    const note = new Notes(req.body);
    note.save()
    .then(() => {
       res.redirect('/notes');
    })
    .catch((err) => {
       console.log(err);
    });
}

const notes_delete = (req, res) => {
    const id = req.params.id;
    Notes.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/notes'} );
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = { 
    notes, 
    notes_details,
    notes_create_get,
    notes_create_post,
    notes_delete
}