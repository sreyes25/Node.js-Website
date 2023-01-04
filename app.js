const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const NotesRoutes = require('./routes/notesRoutes');
const port = process.env.PORT || 5000;
const send = require('./sms');

//Envirenment
require('dotenv').config();

//Express App
const app = express();

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    //Listener wait until db is connected
    app.listen(port);
    console.log('DB Connected')
    
})
.catch((err) => console.log('DB Connection Error', err));

//Register view engine
app.set('view engine', 'ejs');

//Middleware & static files
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


//routes
app.get('/', (req, res) =>{
    res.render('index', {title: 'Home'});
});
app.get('/about', (req, res) =>{
    res.render('about', {title: 'About'});
});
app.get('/sayhi', (req, res) => {
    res.render('sayhi', {title: 'SayHi'});
});

app.get('/send', (req, res) => {
    const e = send();
   console.log('sent')
   res.render('sent', {title: 'Sent', emoji: e} );
});

//notesRoutes
app.use('/notes', NotesRoutes);

app.use((req, res) =>{
    res.status(400).render('404', {title: '404'});
});  
