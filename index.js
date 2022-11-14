const express = require( 'express' )
const app = express();
app.use( express.json() );
app.get( '/', ( req, res ) => {
    res.send( 'Hellow world' )
} );
const port = process.env.PORT || 3000;
const courses = [{ id: 1, name: "Javascript" }, { id: 2, name: "Java" }, { id: 3, name: "Kotlin" },
{ id: 4, name: "Flutter" }, { id: 5, name: "React Native" }, { id: 6, name: "React Js" }]
app.listen( port, () => console.log( `Listening to port ${port}...`) )

app.get( '/api/courses/', ( req, res ) => {
    res.send(JSON.stringify([{id:1,name:"Javascript"},{id:2,name:"Java"},{id:3,name:"Kotlin"}]))
} )
//passing params
app.get( '/api/courses/:id', ( req, res ) => {
    res.send( req.params.id );
} )
//let get all the courses
app.get( '/api/allCourses/', ( req, res ) => {

    res.send( JSON.stringify( courses ) )
} );
//get a course using an Id
app.get( '/api/course/:id', ( req, res ) => {
    let id = req.params.id;
    let data = courses.filter( element => element.id == id );
    if ( data.length == 0 ) {
        res.status(404).send('Data not found...')
    }
    else{  res.send( JSON.stringify( data ) );}
  
} )
//let's try adding a new course
app.post( '/api/addCourse', ( req, res ) => {
    if ( !req.body.name || req.body.name.length < 3 ) {
        res.status(404).send('Not successful')
    }
    const course = {
        id: courses.length + 1,
        name:req.body.name
    }
    courses.push( course );
    res.send(course)
})