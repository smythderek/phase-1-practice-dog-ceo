// console.log('%c HI', 'color: firebrick')

// TO-DO:


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', function() {
    fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => showDogs(json))
})

function showDogs(data) {
    const doggos = data.message;
    for (let dog of doggos) {
        let dogPic = document.createElement("img");
        dogPic.src = `${dog}`;
        document.getElementById("dog-image-container").appendChild(dogPic);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {listBreeds(json)
    document.getElementById('breed-dropdown').addEventListener('change', function() {
        let dropDown = document.getElementById("breed-dropdown")
        let selection = dropDown.value;

        let breedListItems = document.getElementsByTagName("li");

        for (let listItem of breedListItems) {
            let firstLetter = listItem.innerText.charAt(0);
            listItem.hidden = false;

            if (firstLetter !== selection) {
                listItem.hidden = true;
            }
        }
    })
    })    
})

function listBreeds(data) {
    const fullList = data.message;
    for (let breed in fullList) {
        let breedEntry = document.createElement("li");

        if (fullList[breed].length === 0) {
            breedEntry.setAttribute('name', `${breed}`);
            breedEntry.innerText = breed;
            document.getElementById("dog-breeds").appendChild(breedEntry);
            changeItemColor(breedEntry);
        }
        
        else {
            for (let breedChild of fullList[breed]) {
                let breedChildEntry = document.createElement("li");
                breedChildEntry.setAttribute('name', `${breed}: ${breedChild}`);
                breedChildEntry.innerText = `${breed}: ${breedChild}`;
                document.getElementById("dog-breeds").appendChild(breedChildEntry);
                changeItemColor(breedChildEntry);
            }   
        }
    }

    function changeItemColor (item) {
        item.addEventListener('click', function() {
            item.style.color = "red";
        })
    }   
}

// add event listener to the select dropdown
// so breedListItems would only be created when that change event happens

// function useFilter() {
//     // look at the value of the dropdown
//     // then for every list item, look at the first letter
//     // if that letter DOESN'T match the value of the dropdown, .hidden = true
//     let dropDown = document.getElementById("breed-dropdown")
//     let selection = dropDown.value;

//     let breedListItems = document.getElementsByTagName("li");
//     console.log(breedListItems); 
//     // This is returning an empty node, hmmm. I tested it calling all h1s and it worked.
//     // What's wrong with my "li" call?

//     for (let listItem of breedListItems) {
//         console.log(listItem); 
//         // let prop = listItem[value];
//         // console.log(listItem[innerText]);
//         // let firstLetter = listItem.innerText.charAt(0);
//         // console.log(firstLetter);
//     }
// }