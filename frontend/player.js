let currentAudio = null

function playTrack(url){

if(currentAudio){

currentAudio.pause()

}

currentAudio = new Audio(url)

currentAudio.play()

}
