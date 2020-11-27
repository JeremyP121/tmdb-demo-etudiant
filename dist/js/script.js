document.addEventListener("DOMContentLoaded", function(){
    let connexion = new MovieDB();

    connexion.requeteDernierFilm();

})

class MovieDB{
    constructor() {
        console.log("constructeur !");

        this.APIkey = "d03225a27acb17b425fcc2032efb33cc";

        this.lang = "fr-CA";

        this.baseURL = "https://api.themoviedb.org/3";

        this.imgPath = "https://image.tmdb.org/t/p/";

        this.totalFilms = 8;
    }

    requeteDernierFilm() {
        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDerneirFilm.bind(this));

        //requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=d03225a27acb17b425fcc2032efb33cc&language=fr-CA&page=1");
        requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");

        requete.send();
    }

    retourRequeteDerneirFilm(e) {
        console.log("Retour dernier Film !");

        let target = e.currentTarget;
        let data;

        data = JSON.parse(target.responseText).results;

        console.log(data);

        this.afficheDernierFilm(data);

    }

    afficheDernierFilm(data) {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);

        }

    }

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuICAgIGxldCBjb25uZXhpb24gPSBuZXcgTW92aWVEQigpO1xyXG5cclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxuXHJcbn0pXHJcblxyXG5jbGFzcyBNb3ZpZURCe1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RldXIgIVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5BUElrZXkgPSBcImQwMzIyNWEyN2FjYjE3YjQyNWZjYzIwMzJlZmIzM2NjXCI7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZyA9IFwiZnItQ0FcIjtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCI7XHJcblxyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCI7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxGaWxtcyA9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCkge1xyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJSZXF1ZXRlRGVybmVpckZpbG0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PWQwMzIyNWEyN2FjYjE3YjQyNWZjYzIwMzJlZmIzM2NjJmxhbmd1YWdlPWZyLUNBJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICsgXCIvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT1cIiArIHRoaXMuQVBJa2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcgKyBcIiZwYWdlPTFcIik7XHJcblxyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldG91clJlcXVldGVEZXJuZWlyRmlsbShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXRvdXIgZGVybmllciBGaWxtICFcIik7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcblxyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmFmZmljaGVEZXJuaWVyRmlsbShkYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldLnRpdGxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS5vdmVydmlldyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
