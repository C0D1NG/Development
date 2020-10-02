// Searching Stuff Up!
var UI = {};

UI.SubmitClick = document.querySelector(".search").addEventListener('click', function() {

	var searchInput = document.querySelector("input").value;
	SoundCloudAPI.getTrack(searchInput);

	//clear previous search results
	var searchResults = document.querySelector(".js-search-results");
	searchResults.innerHTML = " ";
	
});


UI.EnterPress = document.querySelector(".input-search").addEventListener('keyup', function(e) {

	var searchInput = document.querySelector("input").value;

	if(e.which === 13) {
		SoundCloudAPI.getTrack(searchInput);

		//clear previous search results	
		var searchResults = document.querySelector(".js-search-results");
		searchResults.innerHTML = " ";
	}

});


//Using the Sound Cloud API to Get Those Songs
var SoundCloudAPI = {};

SoundCloudAPI.init = function(){
	
	SC.initialize({
  	client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
	});

}

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
	
	SC.get('/tracks', {
	  q: inputValue
	}).then(function(tracks) {
	  console.log(tracks);
	  SoundCloudAPI.renderTracks(tracks);
	});

}

SoundCloudAPI.renderTracks = function(tracks) {

	tracks.forEach(function(track) {

		var card = document.createElement('div');
		card.classList.add('card');

		var imageDiv = document.createElement('div');
		imageDiv.classList.add('image');

		var imageImg = document.createElement('img');
		imageImg.classList.add('image_img');
		imageImg.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';

		imageDiv.appendChild(imageImg);

		var content = document.createElement('div');
		content.classList.add('content');

		var header = document.createElement('div');
		header.classList.add('header');
		header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>';

		var button = document.createElement('div');
		button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

		var icon = document.createElement('i');
		icon.classList.add('add', 'icon');

		var buttonText = document.createElement('span');
		buttonText.innerHTML = 'Add to Playlist';

		content.appendChild(header);

		button.appendChild(icon);
		button.appendChild(buttonText);

		button.addEventListener('click', function(){
			SoundCloudAPI.getEmbed(track.permalink_url);
		});

		card.appendChild(imageDiv);
		card.appendChild(content);
		card.appendChild(button);

		var searchResults = document.querySelector(".js-search-results");

		searchResults.appendChild(card);

	});

}



//Adding Songs to the Side Bar Playlist
SoundCloudAPI.getEmbed = function(trackURL) {

	SC.oEmbed(trackURL, {
  		auto_play: true
	}).then(function(embed){
  		console.log('oEmbed response: ', embed);

  	var sideBar = document.querySelector('.js-playlist');

  	var box = document.createElement('div');
  	box.innerHTML = embed.html;

  	sideBar.insertBefore(box, sideBar.firstChild);

  	localStorage.setItem("key", sideBar.innerHTML);

});

}



//Local Storage, like Your Garage 
var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");

//Clear the playlist of all songs
UI.ClearPlaylist = document.querySelector(".btn-reset").addEventListener('click', function() {

	localStorage.clear();
	location.reload();
	
});


