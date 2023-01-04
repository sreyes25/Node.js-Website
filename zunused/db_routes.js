//mongoose and mongo sandbox routes
app.get('/add-note', (req, res) => {
    const note = new Notes({
        title: 'new note 3',
        snippet: 'about my note',
        body: 'more about my note'
    });

    note.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    });

});

app.get('/all-notes', (req, res) => {
    Notes.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/single-note', (req, res) => {
     Notes.findById('63aa416c17f4d47fd5ef8e1c')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});