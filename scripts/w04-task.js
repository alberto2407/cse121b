/* LESSON 3 - Programming Tasks */
/* Profile Object  */
let myProfile = {
    name: 'Alberto',
    photo: 'images/myself.png',
    favoriteFoods: [
        'Cuban rice',
        'Spaguetti',
        'Stew'
    ],
    hobbies: [
        'Read',
        'Run',
        'Draw',
        'Walk with friends'

    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Italy",
        length: "2 years"
    },
    {
        place: "Spain",
        length: "12 year"
    },
    {
        place: "Ecuador",
        length: "9 years",
    },
    {
        place: "Colombia",
        length: "2 mounts"
    }

);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});