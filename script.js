
btn = document.getElementById("playbutton");
index = 0;
let song = new Audio(`./images/4.mp3`);
let pbar = document.getElementById("progressbar");
let songitems = document.getElementsByClassName("songItem");
let playsongs = document.getElementsByClassName("songplay");
let ssong = document.getElementsByClassName("ssong");
let g = document.getElementById("gif");
let due = document.getElementsByClassName("duration");
let songdue = 0;
let songs =[
    
    { songname : "Jai Shri Krishna .mp3" ,filePath:'./images/4.mp3'},
    { songname : "swagatham krishna.mp3" ,filePath:'./images/5.mp3'}
];
//setting song name and Cover Images
for(let i=0;i<songitems.length;i++)
{
    songitems[i].getElementsByTagName("img")[0].src= songs[i].coverpath;
    songitems[i].getElementsByClassName("songname")[0].innerHTML = songs[i].songname;   
}
//playing song
btn.addEventListener('click',()=>{
    console.log("hjk")
    if(song.paused || song.currentTime<=0)
        {
            song.play();
            btn.classList.remove("fa-play-circle");
            btn.classList.add("fa-pause-circle");
            g.style.opacity = 1;    
        }
        else{
            btn.classList.remove("fa-pause-circle");
            btn.classList.add("fa-play-circle");
            song.pause();
            g.style.opacity = 0;
        }
        document.getElementById(index).classList.add("fa-pause-circle");
    document.getElementById(index).classList.remove("fa-play-circle");
 })
 //progressbar setting to current music time
 song.addEventListener('timeupdate',()=>{
    console.log();
    let progress = parseInt((song.currentTime/song.duration)*100);
    pbar.value = progress;
 })
 //progress bar update
pbar.addEventListener('change',()=>{
    let k = pbar.value;
    let pos = parseInt((song.duration*k)/100);
    song.currentTime = pos;
})
//playing a specific song
function makeallplays(){
    Array.from(ssong).forEach(element => {
        // console.log(element.target);
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
    Array.from(ssong).forEach(element => {
    element.addEventListener('click',(e)=>{
       makeallplays();
       index = parseInt(e.target.id);
       e.target.classList.add("fa-pause-circle");
        e.target.classList.remove("fa-play-circle");
        song.src = `./images/${index+1}.mp3`;
        song.currentTime=0;
        song.play();
        btn.classList.remove("fa-play-circle");
            btn.classList.add("fa-pause-circle");
            g.style.opacity=1;
    })
})
//Next Button
document.getElementById("forward").addEventListener('click',()=>{
    makeallplays();
    if(index>=songs.length-1)
    {
     index = -2;
    }
    index++;
    song.src = `./images/${index+1}.mp3`;
        song.currentTime=0;
        song.play();
        btn.classList.remove("fa-play-circle")
        btn.classList.add("fa-pause-circle");
        document.getElementById(index).classList.add("fa-pause-circle");
    document.getElementById(index).classList.remove("fa-play-circle");
});
//previous button
document.getElementById("backward").addEventListener('click',()=>{
    makeallplays();
    if(index<=0)
    {
     index = 5;
    }
    index--;
    song.src = `./images/${index+1}.mp3`;
        song.currentTime=0;
        song.play();
        btn.classList.remove("fa-play-circle")
        btn.classList.add("fa-pause-circle");
        document.getElementById(index).classList.add("fa-pause-circle");
    document.getElementById(index).classList.remove("fa-play-circle");
});
//shuffle feature....
document.getElementById("shu").addEventListener('click',()=>{
    g.style.opacity = 1;
    makeallplays();
    index = parseInt(Math.random()*5);
    song.src = `./images/${index+1}.mp3`;
    song.play();
    song.currentTime = 0;
    btn.classList.remove("fa-play-circle");
    btn.classList.add("fa-pause-circle");
    document.getElementById(index).classList.add("fa-pause-circle");
    document.getElementById(index).classList.remove("fa-play-circle");

});

//making to small pause play btn to work
if(song.currentTime>0)
{
    document.getElementById(index).classList.add("fa-pause-circle");
    document.getElementById(index).classList.remove("fa-play-circle");
    btn.classList.remove("fa-play-circle");
    btn.classList.add("fa-pause-circle");
}
//set to  big btn initial and next song play  
function closesong()
{
if(song.currentTime==song.duration)
{
    if(index<0)
    {
      index = songs.length-1;

    }
    else if(index>=5)
    {
        index = 0
    }
    else
    {
        index++;
        song.src = `./images/${index+1}.mp3`;
        song.play();
        song.currentTime = 0;
    }
    btn.classList.remove("fa-play-circle");
    btn.classList.add("fa-pause-circle");
}
}
setInterval(closesong,1000);