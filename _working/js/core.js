/** core.js
 *  Created by Richard Bennett
 *  v1.0.0
 */

var meta = {
    referrer : '',
    name : '',
    email : '',
    description : ''
};

var menu = {
    initialize : function(){
        //DEBUG
        console.log('Menu init');
        menu.remE().done(menu.addE);
    },
    show : function(){
        return $.Deferred(function(f){
            f.resolve();
        }).promise();
    },
    hide : function(){
        return $.Deferred(function(f){
            f.resolve();
        }).promise();
    },
    addE : function(){
        return $.Deferred(function(f){
            f.resolve();
        }).promise();
    },
    remE : function(){
        return $.Deferred(function(f){
            f.resolve();
        }).promise();
    }
};


$(function(){
    //DOM is ready, so do stuff
    Parse.initialize("RGLDASQJXG3YDU1QZSPA4KPQJJMZ2BI6C4LZ3ZRG", "B4XRQMQV2BGME2QUP2680SCFFQ3KCSUDV1NJ2OKT");
    Parse.serverURL = 'http://app.simplecalc.co/';

    menu.initialize();

});