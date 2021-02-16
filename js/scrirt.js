const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const  a = prompt("Один из просмотренных фильмов?"),
       b = prompt("На сколько вы его оцените?"),
       c = prompt("Один из просмотренных фильмов?"),
       d = prompt("На сколько вы его оцените?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);