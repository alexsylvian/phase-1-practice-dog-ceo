console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const container = document.getElementById('dog-image-container')
const dogList = document.getElementById("dog-breeds")
const dropdown = document.getElementById("breed-dropdown")

document.addEventListener('DOMContentLoaded', () => {
    addDogImage()
    addDogList()
})

function addDogImage() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(pic => {
            const doggyPic = document.createElement("img")
            doggyPic.src = pic
            container.appendChild(doggyPic)
        })
    })
}

function addDogList() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const dogBreeds = Object.keys(data.message)
        dogBreeds.forEach(entry => {
            const breed = document.createElement("li")
            breed.textContent = entry
            dogList.appendChild(breed)
            breed.addEventListener('click', () => {
                breed.style.color = ('orange')
            })
        })
    })
}

dropdown.addEventListener('change', filterBreeds)

function filterBreeds() {
    const selectedValue = dropdown.value
    if (selectedValue === "b") {
        console.log('b')
    }
}