
// document.querySelectorAll('.image-container .image').forEach(image =>{
//     image.onclick = () => {
//         document.querySelector('.popup-image').style.display = 'block';
//         document.querySelector('.popup-image').src = image.getAttribute('src')
//     }
// })
// document.querySelector('.popup-image span').onclick = () => {
//     document.querySelector('.popup-image img').style.display = 'none';
// }

const popupImage = document.getElementById("popup-image")
const foo = document.getElementById("foo")
const music = document.getElementById("music")
const heart = document.getElementById("heart")
const tree = document.getElementById("tree")
const piano = document.getElementById("piano")
const eiffel = document.getElementById("eiffel")
const camera = document.getElementById("camera")

music.addEventListener('click', ()=> {
    popupImage.style.display = 'block';
    foo.src = "images/danbo_music.jpg"
    
})

heart.addEventListener('click', ()=> {
    popupImage.style.display = 'block';
    foo.src = "images/danbo_heart.jpg"
})

tree.addEventListener('click', ()=> {
    popupImage.style.display = 'block';
    foo.src = "images/danbo_tree.jpg"
})

piano.addEventListener('click', ()=> {
    popupImage.style.display = 'block';
    foo.src = "images/danbo_piano.jpg"
})

eiffel.addEventListener('click', ()=> {
    popupImage.style.display = 'block';
    foo.src = "images/danbo_eiffel.jpg"
})

camera.addEventListener('click', ()=> {
    popupImage.style.display = 'block';
    foo.src = "images/danbo_camera.jpg"
})


document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}