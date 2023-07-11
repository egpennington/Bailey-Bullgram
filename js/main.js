const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const nameEl = document.getElementById("name-el")
const locationEl = document.getElementById("location-el")
const avatarEl = document.getElementById("avatar-el")
avatarEl.src = posts[0].avatar
const postEl = document.getElementById("post-el")
const likesEl = document.getElementById("likes-el")
const commentEl = document.getElementById("comment-el")
const userNameEl = document.getElementById("user-name-el")

nameEl.textContent = posts[0].name
locationEl.textContent = posts[0].location
avatarEl.textContent = posts[0].avatar
postEl.src = posts[0].post
likesEl.textContent = posts[0].likes + " likes"
userNameEl.textContent = posts[0].username
commentEl.textContent = posts[0].comment