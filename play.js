var myMusic1=document.getElementById("song1");
var myMusic2=document.getElementById("song2");
var myMusic3=document.getElementById("song3");

let track_index = 0;
let track_list = [myMusic1, myMusic2, myMusic3];

function next() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
      track_index += 1;
    else track_index = 0;
    
    // Load and play the new track
    load(track_index);
    play();
    }

function prev() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
      track_index -= 1;
    else track_index = track_list.length - 1;
          
    // Load and play the new track
    load(track_index);
    play();
    }
    

function play()
    {
        track_list[track_index].play();
    }

function pause()  
    {  
        track_list[track_index].pause();  
    }  
    
function setVolume(val) {
        
        track_list[track_index].volume = val / 100;

    }

