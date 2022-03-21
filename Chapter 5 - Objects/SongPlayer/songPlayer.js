var song = {
    name: "Walk this Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80's",
    playing: false,

    play: function() {
        if(!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by " + this.artist)
        }
    },

    pause: function() {
        if(this.playing){
            this.playing = false;
        }
    }
};

song.play();
song.pause();