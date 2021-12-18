

console.log("my spotify clone//.");


let songs = [
    { songName: "first", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "second", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "third", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "fourth", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "fifth", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "sixth", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "seventh", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "eigth", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "ninth", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "tenth", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]




let songindex = 0;
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");

let gif = document.getElementById("gif");
let AudioElement = new Audio("songs/1.mp3");


//event listener on masterPlay

//fa-play-circle and add fa-pause-circle

masterPlay.addEventListener("click", function () {


    if (AudioElement.pause() || AudioElement.currentTime <= 0) {

        AudioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;



    }
    else {

        AudioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;




    }




});




// updating progress bar acc to audio time duration
// myProgressBar,

let myProgressBar = document.getElementById("myProgressBar");


AudioElement.addEventListener("timeupdate", function () {

    audioprogress = ((AudioElement.currentTime / AudioElement.duration) * 100);
    myProgressBar.value = audioprogress;
    console.log(`audio : ${songindex}`);
    console.log(`current audio progress : ${audioprogress}`);






});

//updating progress bar

myProgressBar.addEventListener("change", function () {

    // seeking progress bar
    AudioElement.currentTime = ((AudioElement.duration * myProgressBar.value) / 100);
    myProgressBar.value = AudioElement.currentTime;





});


// updating songname, song image
//songItem


let songItem = Array.from(document.getElementsByClassName("songItem"));

songItem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;

    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;







});




//updating play || pause btn for each songItemPlay

let timestamp = document.getElementsByClassName("timestamp");

const chngotherplays = () => {

    Array.from(document.getElementsByClassName("songItemPlay")).forEach(function (element) {



        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");












    });
}


//audio elements::
Array.from(document.getElementsByClassName("songItemPlay")).forEach(function (element) {


    element.addEventListener("click", function (e) {

        chngotherplays();


        if (e.target.classList.contains("fa-play-circle")) {
            songindex = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            //updating songs on clicking...
    
    
            AudioElement.src = `songs/${songindex + 1}.mp3`;
            AudioElement.currentTime = 0;
    
            AudioElement.play();
    
            masterSongName.innerText = songs[songindex].songName;
            gif.style.opacity = 1;
    
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
            
        }
        
    });





});




//prev || next updt

//next::

//updating songname and  add gif: masterSongName,
document.getElementById("next").addEventListener("click", function () {


    if (songindex >= 9) {
        songindex = 0;

    }
    else {

        songindex += 1;
    }


    AudioElement.src = `songs/${songindex + 1}.mp3`;
    AudioElement.currentTime = 0;
    masterSongName.innerText = songs[songindex].songName;

    AudioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");












});


//prev::
document.getElementById("previous").addEventListener("click", function () {


    if (songindex <= 0) {
        songindex = 9;

    }
    else {

        songindex -= 1;
    }


    AudioElement.src = `songs/${songindex + 1}.mp3`;
    AudioElement.currentTime = 0;
    masterSongName.innerText = songs[songindex].songName;

    AudioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");












});





































