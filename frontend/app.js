async function loadTracks(){

const tracks = await getTracks()

const container =
document.getElementById("tracks")

tracks.forEach(track=>{

const div =
document.createElement("div")

div.className="track"

div.innerHTML=`

<h3>${track.title}</h3>

<p>${track.artist}</p>

<button onclick="playTrack('${track.url}')">
Play
</button>

`

container.appendChild(div)

})

}

loadTracks()
