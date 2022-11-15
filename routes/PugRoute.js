const express = require( 'express' );
const route = express.Router();
route.get( '/', ( req, res ) => {
    res.render( 'index',{title:"My Express App",message:"Hello Express App..."} )
} );
module.exports = route;