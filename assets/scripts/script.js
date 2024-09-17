let homeScoreButton = document.getElementById("home-score")
homeScoreButton.textContent = 0

let guestScoreButton = document.getElementById("guest-score")
guestScoreButton.textContent = 0




function addOneHome() {
    newHomeScore = parseInt(homeScoreButton.textContent)
    homeScoreButton.textContent = newHomeScore + 1
}

function addOneGuest() {
    newGuestScore = parseInt(guestScoreButton.textContent)
    guestScoreButton.textContent = newGuestScore + 1        
}


function addTwoHome() {
    newHomeScore = parseInt(homeScoreButton.textContent)
    homeScoreButton.textContent = newHomeScore + 2
}

function addTwoGuest() {
    newGuestScore = parseInt(guestScoreButton.textContent)
    guestScoreButton.textContent = newGuestScore + 2        
}


function addThreeHome() {
    newHomeScore = parseInt(homeScoreButton.textContent)
    homeScoreButton.textContent = newHomeScore + 3
}

function addThreeGuest() {
    newGuestScore = parseInt(guestScoreButton.textContent)
    guestScoreButton.textContent = newGuestScore + 3        
}