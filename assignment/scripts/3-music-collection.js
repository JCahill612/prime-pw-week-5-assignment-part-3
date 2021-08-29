console.log('***** Music Collection *****')
//Create a variable `collection` that starts as an empty array.

let collection = [];
//- Add a function named `addToCollection`. This function should:
// - Take in the album's `title`, `artist`, `yearPublished` as input parameters
function addToCollection(artist, title, yearPublished, track){
// - Create a new object having the above properties
    let record = {artist , title , yearPublished, track}
// - Add the new object to the end of the `collection` array
console.log(artist, 'has been added to the collection');
collection.push(record);
}
// - Return the newly created object
addToCollection;

//- Test the `addToCollection` function:

//  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
addToCollection('The Pharcyde', 'Bizarre Ride II','1992');
addToCollection('Jurassic 5','Power in Numbers','2002');
addToCollection('Jurassic 5','Quality Control','2000');
addToCollection('Common','Be','2005');
addToCollection('Outkast','Stankonia','2000');
addToCollection('Fugees','The Score','1996');


console.log('Current collection:', collection);

//- Add a function named `showCollection`. This function should:
//  - Take in an array parameter. (This allows it to be reused to show ///any collection, like the results from the find or search.)
function showCollection(){
// - Console.log the number of items in the array.
    console.log( 'Collection:', collection.length );
//- Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (let i = 0; i < collection.length; i++) {
        const record = collection[i];
        console.log( record.title,'by ' + record.artist + ' published in ' + record.yearPublished);
        }
}

//- Test the `showCollection` function.
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
function findByArtist(artist){
//   - Create an array to hold any results, empty to start
    let holdTheseArtists = []
//   - Loop through the `collection` and add any objects with a matching artist to the array.
for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    if (artist == element.artist) {
        holdTheseArtists.push(element)
    }
    
}
//   - Return the array with the matching results. If no results are found, return an empty array.
return holdTheseArtists && console.log( holdTheseArtists);
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
findByArtist('Fugees');
findByArtist('Ray Charles');

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
function search(artistCheck, yearCheck) {
    let searchResult = [];
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
    
        if (artistCheck == element.artist && yearCheck === element.yearPublished) {
//- Return a new array of all items in the `collection` matching *all* of the search criteria.
            searchResult.push(element)
        }
//     - If no results are found, return an empty array.  
    }
return search && console.log(searchResult);
}
search('The Pharcyde', '1992');
search('Ray Charles', '1957');
search('Jurassic 5', '2000');

//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.



// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

