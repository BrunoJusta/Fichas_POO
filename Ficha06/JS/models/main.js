import Band from "./band.js"
import User from "./user.js"

//Array Bandas

export let bands = []
if(localStorage.bands){
    bands = JSON.parse(localStorage.bands)
}
else{
    const band1 = new Band("Muse", "Pop-Rock", "https://semantic-ui.com/images/avatar/large/jenny.jpg", "XXX", "YYY")
    const band2 = new Band("Radiohead", "Pop-Rock", "https://semantic-ui.com/images/avatar/large/jenny.jpg", "XXX", "YYY")
    const band3 = new Band("Metalica", "Metal", "https://semantic-ui.com/images/avatar/large/jenny.jpg", "XXX", "YYY")
    const band4 = new Band("Justa", "Jazz", "https://semantic-ui.com/images/avatar/large/jenny.jpg", "XXX", "YYY")
    const band5 = new Band("James", "Pop-Rock", "https://semantic-ui.com/images/avatar/large/jenny.jpg", "XXX", "YYY")
    bands.push(band1, band2, band3, band4, band5)
    localStorage.setItem("bands",JSON.stringify(bands))
}




//Array para utilizadores
export const users = []
const user1 = new User("Justa", "uber123")
const user2 = new User("Aves", "nunofag2000")
const user3 = new User("Rita", "ilikeamoras23")
users.push(user1, user2, user3)