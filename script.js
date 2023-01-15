console.log('Welcome to jaggu show');


let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let songs = [
    
       { songname: "Har Har Shambhu", filepath: "1.mp3", coverpath: "covers/1.jpeg" },
       { songname: "Laagi Lagan Shankara", filepath: "2.mp3", coverpath: "covers/1.jpeg" },
       { songname: "Shiv Shamarahe", filepath: "3.mp3", coverpath: "covers/1.jpeg" },
       { songname: "Shiv Shiv Shankara", filepath: "4.mp3", coverpath: "covers/1.jpeg" },
       { songname: "Main Shiv Ka", filepath: "5.mp3", coverpath: "covers/1.jpeg" },
       { songname: "Radhe Radhe", filepath: "6.mp3", coverpath: "covers/1.jpeg" }
]

masterPlay.addEventListener('click',() =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= ((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');


})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `${songIndex}.mp3`;
    console.log(audioElement.src);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
})

document.getElementById('next').addEventListener('click',(e)=>{
    if (songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    //songIndex=parseInt(e.target.id);
    audioElement.src = `${songIndex+1}.mp3`;
    console.log(audioElement.src)
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('perivious').addEventListener('click',(e)=>{
    if (songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    //songIndex=parseInt(e.target.id);
    audioElement.src = `${songIndex+1}.mp3`;
    console.log(audioElement.src)
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
