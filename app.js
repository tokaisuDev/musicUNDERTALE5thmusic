// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
  name: "Also Sprach Zarathustra - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Also Sprach Zarathustra - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Tuning Instruments 1 - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Tuning Instruments 1 - UNDERTALE 5th Anniversary Concert.mp3",
},
{
  name: "Once Upon A Time - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Once Upon A Time - UNDERTALE 5th Anniversary Concert.mp3",
},
{
  name: "Ruins - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Ruins - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Anticipation + Enemy Approaching - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Anticipation + Enemy Approaching - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Home - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Home - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Determination - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Determination - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Heartache - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Heartache - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Fallen Down - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Fallen Down - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "sans. - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/sans. - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Nyeh Heh Heh! - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Nyeh Heh Heh! - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Snowdin Town - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Snowdin Town - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Snowy - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Snowy - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Nyeh Heh Heh! (Reprise) - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Nyeh Heh Heh! (Reprise) - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Shop - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Shop - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Bonestrousle - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Bonestrousle - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Waterfall + Quiet Water - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Waterfall + Quiet Water - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Undyne - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Undyne - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Run! - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Run! - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Memory - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Memory - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "NGAHHH + Spears of Justice + She's Playing the Piano",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/NGAHHH + Spears of Justice + She's Playing the Piano.mp3"
},
{
  name: "Mysterious Shrine + Absolutely Overfamiliar Shrine - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Mysterious Shrine + Absolutely Overfamiliar Shrine - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Alphys - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Alphys - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "It's Showtime! - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/It's Showtime! - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Metal Crusher - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Metal Crusher - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Spider Dance - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Spider Dance - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "CORE - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/CORE - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Death By Glamour - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Death By Glamour - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "For The Fans - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/For The Fans - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Undertale - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Undertale - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Bergentruckung + ASGORE - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Bergentruckung + ASGORE - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Your Best Nightmare - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Your Best Nightmare - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Finale - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Finale - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "An Ending - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/An Ending - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Here We Are - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Here We Are - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Amalgam - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Amalgam - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Small Shock - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Small Shock - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Fallen Down (Reprise) - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Fallen Down (Reprise) - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Don't Give Up! - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Don't Give Up! - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Hopes And Dreams + SAVE The World - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Hopes And Dreams + SAVE The World - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "His Theme - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/His Theme - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Reunited - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Reunited - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Respite - UNDERTALE 5th Anniversary Concert",  
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Respite - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Bring It In, Guys! - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Bring It In, Guys! - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Last Goodbye - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Last Goodbye - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Menu (Full) - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Menu (Full) - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Genocide Prelude - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Genocide Prelude - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Battle Against A True Hero + Power Of NEO - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Battle Against A True Hero + Power Of NEO - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "MEGALOVANIA - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/MEGALOVANIA - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Menu - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Menu - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "My Castle Town (Early Version) - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/My Castle Town (Early Version) - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "A Place Called Hometown - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/A Place Called Hometown - UNDERTALE 5th Anniversary Concert.mp3"
},
{
  name: "Home (Piano Cover) - UNDERTALE 5th Anniversary Concert",
  artist: "Toby Fox",
  image: "image/concert_undertale.jpg",
  path: "songs/Home (Piano Cover) - UNDERTALE 5th Anniversary Concert.mp3"
},
];

function loadTrack(track_index) {
// Clear the previous seek timer
clearInterval(updateTimer);
resetValues();

// Load a new track
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_art.style.backgroundImage =
  "url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
track_artist.textContent = track_list[track_index].artist;
now_playing.textContent =
  "Playing " + (track_index + 1) + " Of " + track_list.length;

// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);
}

// Function to reset all values to their default
function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}

function playpauseTrack() {
// Switch between playing and pausing
// depending on the current state
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
// Play the loaded track
curr_track.play();
isPlaying = true;

// Replace icon with the pause icon
playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
// Pause the loaded track
curr_track.pause();
isPlaying = false;

// Replace icon with the play icon
playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
// Go back to the first track if the
// current one is the last in the track list
if (track_index < track_list.length - 1)
  track_index += 1;
else track_index = 0;

// Load and play the new track
loadTrack(track_index);
playTrack();
}

function prevTrack() {
// Go back to the last track if the
// current one is the first in the track list
if (track_index > 0)
  track_index -= 1;
else track_index = track_list.length - 1;
  
// Load and play the new track
loadTrack(track_index);
playTrack();
}

function seekTo() {
// Calculate the seek position by the
// percentage of the seek slider
// and get the relative duration to the track
seekto = curr_track.duration * (seek_slider.value / 100);

// Set the current track position to the calculated seek position
curr_track.currentTime = seekto;
}

function setVolume() {
// Set the volume according to the
// percentage of the volume slider set
curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
let seekPosition = 0;

// Check if the current track duration is a legible number
if (!isNaN(curr_track.duration)) {
  seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  seek_slider.value = seekPosition;

  // Calculate the time left and the total duration
  let currentMinutes = Math.floor(curr_track.currentTime / 60);
  let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(curr_track.duration / 60);
  let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

  // Add a zero to the single digit time values
  if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
  if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
  if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

  // Display the updated duration
  curr_time.textContent = currentMinutes + ":" + currentSeconds;
  total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}

// Load the first track in the tracklist
loadTrack(track_index);
