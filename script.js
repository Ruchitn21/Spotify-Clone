console.log("Hello World");


let songIndex= 0;
let masterPlay= document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let gif= document.getElementById("myGif");
let songItems= Array.from(document.getElementsByClassName("songItem"));
let songItemPlay= Array.from(document.getElementsByClassName("songItemPlay"));
let masterSongName= document.getElementById("masterSongName");



let songs= [
    {songName:"One Direction - Night Changes", filePath: "songs/one_direction.mp3", coverPath: "cover/1.png"},
    {songName:"Harry Styles - Watermelon Sugar", filePath: "songs/harry_styles.mp3", coverPath: "cover/2.png"},
    {songName:"David Guetta - Hey Mama", filePath: "songs/david_guetta.mp3", coverPath: "cover/3.png"},
    {songName:"Martin Garrix - Scared to be Lonely", filePath: "songs/martin_garrix.mp3", coverPath: "cover/4.png"}
];

songItems.forEach((element,i) => {
    document.getElementsByTagName("img")[i+1].src= songs[i].coverPath;
    document.getElementsByClassName("mySongName")[i].innerText= songs[i].songName;

});

const makeAllPlays= ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
};

songItemPlay.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        
    })
});

let audioElement = new Audio("songs/1.mp3");

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0|| masterPlay.classList.contains("fa-play-circle")){
        
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity= 0;
    }
});

audioElement.addEventListener("timeupdate",()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
   
});

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
});

// =============================================================================
let index= 0;

document.getElementById("next").addEventListener("click",()=>{

    if(index>=3)
    {
        index=0;
    }
    else{
        index+=1;
        
    }
    
    audioElement.src= `songs/${index+1}.mp3`;
    document.getElementsByClassName("bottom")
    
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText= songs[index].songName;
        
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity=1;


});

document.getElementById("previous").addEventListener("click",()=>{
    if(index<=0)
    {
        index=0
        
    }
    else{
        index-=1;
        
    }
    
    audioElement.src= `songs/${index+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText= songs[index].songName;
        
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity=1;


});


