function shout(string ){
    return string .toUpperCase();

}
function whisper(string) {
    return string .toLowerCase();
}
function logShout(string){
    console.log('Hello'.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    }
     else if (string.toUpperCase() ===string)
        {
        return 'YES INDEED!';

    }
    else if (string === "Let's have dinner together!"){
        return "I would love to!"

    }
}
/*function sayHiToHeadphonedRoommate(string){
    if (string.toUpperCase()=== string) {
        return 'YES INDEED!'
    }
}
    */