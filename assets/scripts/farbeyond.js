document.addEventListener('DOMContentLoaded' , () => {
    let score = document.querySelector('.score')
    let result = 0
    let gameLevel = document.querySelector('.border-bottom')
    const fabian = document.querySelector('.fabian')
    const gameDisplay = document.querySelector('.farbeyond-container')
    // const currentResultOutput = document.getElementById('current-score');
    // const houses = document.querySelector('.houses')
    // const movinghouses = document.querySelector('.movinghouses')

    // Sets Global scope of variables
    let fabianLeft = 220
    let fabianBottom = 100
    let gravity = 2
    let isGameOver = false
    // next line determines the gap between the chimney and the birds:
    // Initial setting is gap = 439 // for level one gap = 439 //  for level two gap = 429
    // for level three gap = 419 // for level four gap = 409 // for level five gap = 439 // for level six gap = 429
     // for level seven gap = 419 // for level eight gap = 409
    // for level three make "gap" equal 419 // for level two make "gap" equal 429 // for level one make "gap" equal 439
    let gap = 439 
    let cloudGap = 600
    // TODO - delete this line -> let cloudSpace = 100

    function startGame() {
        fabianBottom -= gravity
        fabian.style.bottom = fabianBottom + 'px'
        fabian.style.left = fabianLeft + 'px'

    } 
    let gameTimerId = setInterval(startGame, 20)

    // Limits the jump feature to the Spacebar.  The number 32 is the code for the spacebar.
    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    // Stes parameters for the jump() function
    function jump() {
        if (fabianBottom < 500) fabianBottom += 50
        fabian.style.bottom = fabianBottom + 'px'
        console.log(fabianBottom)
    }
    // Activates the jump() function
    document.addEventListener('keyup', control)

    function generateChimney() {
        // declarations for the generateChimney() function
        let chimneyLeft = 500
        let movinghousesLeft = 420      
        let randomHeight = Math.random() * 40
        let chimneyBottom = randomHeight
        let cloudBottom = randomHeight + cloudGap
    
        // Sets starting location of the clouds They enter the game from the right side.
        let cloudOneLeft = 500
        let cloudTwoLeft = 550
        let cloudThreeLeft = 600
        let cloudFourLeft = 500
        let cloudFiveLeft = 550
        let cloudSixLeft = 500

        // Creates the 'div' for the named objects in the game container "farbeyond-container"
        const chimney = document.createElement('div')
        const owls = document.createElement('div')
        const movinghouses = document.createElement('div')
        const cloudone = document.createElement('div')
        const cloudtwo = document.createElement('div')
        const cloudthree = document.createElement('div')
        const cloudfour = document.createElement('div')
        const cloudfive = document.createElement('div')
        const cloudsix = document.createElement('div')

        // Determines if game is NOT over and generates the object
        if (!isGameOver) {
            chimney.classList.add('chimney')
            owls.classList.add('owls')
            movinghouses.classList.add('movinghouses')
            cloudone.classList.add('cloudone')
            cloudtwo.classList.add('cloudtwo')
            cloudthree.classList.add('cloudthree')
            cloudfour.classList.add('cloudfour')
            cloudfive.classList.add('cloudfive')
            cloudsix.classList.add('cloudsix')

        }
        //  Adds the Child object to the gameDisplay
        gameDisplay.appendChild(chimney)
        gameDisplay.appendChild(owls)
        gameDisplay.appendChild(movinghouses)
        gameDisplay.appendChild(cloudone)
        gameDisplay.appendChild(cloudtwo)
        gameDisplay.appendChild(cloudthree)
        gameDisplay.appendChild(cloudfour)
        gameDisplay.appendChild(cloudfive)
        gameDisplay.appendChild(cloudsix)

        // Sets style of object(s) 
        chimney.style.left = chimneyLeft + 'px'
        owls.style.left = chimneyLeft + 'px'
        movinghouses.style.left = movinghousesLeft + 'px'
        chimney.style.bottom = chimneyBottom + 'px'
        owls.style.bottom = chimneyBottom + gap + 'px'
        movinghouses.style.bottom = chimneyBottom + 85 + 'px'
        cloudone.style.left = cloudOneLeft + 'px'
        cloudone.style.bottom = cloudBottom + 'px'
        cloudtwo.style.left = cloudTwoLeft + 25 +'px'
        cloudtwo.style.bottom = cloudBottom + 25 + 'px'
        cloudthree.style.left = cloudOneLeft + 30 + 'px'
        cloudthree.style.bottom = chimneyBottom + 30 + 'px'
        cloudfour.style.left = cloudTwoLeft + 35 +'px'
        // Create lower clouds using the next line as an example.
        // Don't foget to add all of the other lines needed to add clouds
        cloudfour.style.bottom = cloudBottom + -200 + 'px'
        cloudfive.style.left = cloudOneLeft + 30 + 'px'
        cloudfive.style.bottom = cloudBottom + 30 + 'px'
        cloudsix.style.left = cloudTwoLeft + 35 +'px'
        cloudsix.style.bottom = cloudBottom + 35 + 'px'

        // Responsible for all movement in this game.

        function moveChimney() {
            if (result <= 5) {
                
                chimneyLeft -=1.3
                movinghousesLeft -=1.3
                cloudOneLeft -=1
                cloudTwoLeft -=2.5
                cloudThreeLeft -=1.5
                cloudFourLeft -=2.7
                cloudFiveLeft -=2.4
                cloudSixLeft -=2.3
                if (chimneyLeft > 183 && chimneyLeft < 185) {
                    result = result + 1
                    score.textContent = result
                }
                } else if (result > 5 && result <= 10) {
                gameLevel.style.color = 'blue'
                gameLevel.textContent = "Far Beyond - Level 2"
                    chimneyLeft -=1.5
                    movinghousesLeft -=1.5
                    cloudOneLeft -=1.6
                    cloudTwoLeft -=2.1
                    cloudThreeLeft -=1.8
                    cloudFourLeft -=2.9
                    cloudFiveLeft -=2.6
                    cloudSixLeft -=2
                    if (chimneyLeft > 183 && chimneyLeft < 185) {
                        result = result + 1
                        score.textContent = result
                }
                } else if (result > 10 && result <= 15) {
                gameLevel.style.color = 'red'
                gameLevel.textContent = "Far Beyond - Level 3"
                    chimneyLeft -=1.7
                    movinghousesLeft -=1.7
                    cloudOneLeft -=2
                    cloudTwoLeft -=1.5
                    cloudThreeLeft -=2.2
                    cloudFourLeft -=3.5
                    cloudFiveLeft -=1.5
                    cloudSixLeft -=2.5
                    if (chimneyLeft > 183 && chimneyLeft < 185) {
                        result = result + 1
                        score.textContent = result
                }
                } else if (result > 15 && result <= 20) {
                gameLevel.style.color = 'blue'
                gameLevel.textContent = "Far Beyond - Level 4"
                    chimneyLeft -=1.9
                    movinghousesLeft -=1.9
                    cloudOneLeft -=1.4
                    cloudTwoLeft -=2.5
                    cloudThreeLeft -=2.8
                    cloudFourLeft -=2.1
                    cloudFiveLeft -=2.6
                    cloudSixLeft -=1.5
                    if (chimneyLeft > 182 && chimneyLeft < 185) {
                        result = result + 1
                        score.textContent = result
                }
                } else if (result > 20 && result <= 25) {
                gameLevel.style.color = 'red'
                gameLevel.textContent = "Far Beyond - Level 5"
                    chimneyLeft -=2.1
                    movinghousesLeft -=2.1
                    cloudOneLeft -=1.6
                    cloudTwoLeft -=2.4
                    cloudThreeLeft -=1.8
                    cloudFourLeft -=2.9
                    cloudFiveLeft -=2.6
                    cloudSixLeft -=2
                    if (chimneyLeft > 183 && chimneyLeft < 185) {
                        result = result + 1
                        score.textContent = result
                }
                } else if (result > 25 && result <= 30) {
                gameLevel.style.color = 'blue'
                gameLevel.textContent = "Far Beyond - Level 6"
                    chimneyLeft -=2.4
                    movinghousesLeft -=2.4
                    cloudOneLeft -=1
                    cloudTwoLeft -=2.8
                    cloudThreeLeft -=1.5
                    cloudFourLeft -=2.7
                    cloudFiveLeft -=2
                    cloudSixLeft -=2.1
                    if (chimneyLeft > 183 && chimneyLeft < 185) {
                        result = result + 1
                        score.textContent = result
                }
                } else if (result > 30 && result <= 35) {
                gameLevel.style.color = 'red'
                gameLevel.textContent = "Far Beyond - Level 7"
                    chimneyLeft -=2.7
                    movinghousesLeft -=2.7
                    cloudOneLeft -=1.4
                    cloudTwoLeft -=2.2
                    cloudThreeLeft -=2.4
                    cloudFourLeft -=2.1
                    cloudFiveLeft -=2
                    cloudSixLeft -=1.5
                if (chimneyLeft > 182 && chimneyLeft < 185) {
                    result = result + 1
                    score.textContent = result
                }
                } else if (result > 35 && result <= 40) {
                gameLevel.style.color = 'blue'
                gameLevel.textContent = "Far Beyond - Level 8"
                    chimneyLeft -=3.2
                    movinghousesLeft -=3.2
                    cloudOneLeft -=1
                    cloudTwoLeft -=2.5
                    cloudThreeLeft -=1.5
                    cloudFourLeft -=2.7
                    cloudFiveLeft -=2.4
                    cloudSixLeft -=2.3
                if (chimneyLeft > 182 && chimneyLeft < 185) {
                    result = result + 1
                    score.textContent = result
                }
                } else if (result > 40 && result <= 45) {
                gameLevel.style.color = 'red'
                gameLevel.textContent = "Far Beyond - Level 9"
                chimneyLeft -=3.8
                movinghousesLeft -=3.8
                    cloudOneLeft -=1.6
                    cloudTwoLeft -=2.1
                    cloudThreeLeft -=1.8
                    cloudFourLeft -=2.9
                    cloudFiveLeft -=2.6
                    cloudSixLeft -=2
                if (chimneyLeft > 182 && chimneyLeft < 185) {
                    result = result + 1
                    score.textContent = result
                }
                } else {
                gameLevel.style.color = 'blue'
                gameLevel.textContent = "Far Beyond - Level 10"
                chimneyLeft -=4.9
                movinghousesLeft -=4.9
                    cloudOneLeft -=1.4
                    cloudTwoLeft -=2.5
                    cloudThreeLeft -=2.8
                    cloudFourLeft -=2.1
                    cloudFiveLeft -=2.6
                    cloudSixLeft -=1.5
                if (chimneyLeft > 180 && chimneyLeft < 185) {
                    result = result + 1
                    score.textContent = result
                }
            }
            
            chimney.style.left = chimneyLeft + 'px'
            owls.style.left = chimneyLeft + 'px'
            movinghouses.style.left = movinghousesLeft + 'px'
            cloudone.style.left = cloudOneLeft + 'px'
            cloudtwo.style.left = cloudTwoLeft + 'px'
            cloudthree.style.left = cloudThreeLeft + 'px'
            cloudfour.style.left = cloudFourLeft + 'px'
            cloudfive.style.left = cloudFiveLeft + 'px'
            cloudsix.style.left = cloudSixLeft + 'px'
            
            // Causes object to cease to exist after exited to the left of screen
            if (chimneyLeft === -1000) {
                /* result = result + 1
                score.textContent = result */

                clearInterval(timerId)
                gameDisplay.removeChild(chimney)
                gameDisplay.removeChild(owls)
                gameDisplay.removeChild(movinghouses)
                gameDisplay.removeChild(cloudone)
                gameDisplay.removeChild(cloudtwo)
                gameDisplay.removeChild(cloudthree)
                gameDisplay.removeChild(cloudfour)
                gameDisplay.removeChild(cloudfive)
                gameDisplay.removeChild(cloudsix)
            }

            // Ends Game
                if (
                chimneyLeft > 200 && chimneyLeft < 270 && fabianLeft === 220 &&
                (fabianBottom < chimneyBottom + 150 || fabianBottom > chimneyBottom + gap -200) ||
                fabianBottom === 93) {
                gameOver()
                clearInterval(timerId)
            }            
        }

        // Sets "timerId" interval (Initial setting = 20) // for level five change the "20" to "18" // for level six change the "20" to "16"
        // for level seven change the "20" to "14" // for level eight change the "20" to "12"
        if (result <= 10) {
            chimneySpeed = 5
        } else if (result > 10 && result <= 20) {
            chimneySpeed = 6
        } else if (result > 20 && result <= 30) {
            chimneySpeed = 7
        } else if (result > 30 && result <= 40) {
            chimneySpeed = 9
        } else {
            chimneySpeed = 10
        }
        let timerId = setInterval(moveChimney, chimneySpeed)
        
        // Set interval between each Chimney
        if (!isGameOver) setTimeout(generateChimney, 3000)
    }
    // Calls the generateChimney() function
    generateChimney()

    function gameOver() {
        clearInterval(gameTimerId)
        console.log('Game Over')
        isGameOver = true
        document.removeEventListener('keyup', control)
    }

})