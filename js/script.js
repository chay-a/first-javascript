$(document).ready(function () {

    // GET PLAYER CHOICE
    $('.img-thumbnail').click(function () {
        console.log('le joueur a choisi : ' +$(this).attr('alt'));
        let playerInput = $(this).attr('alt');
        $('#game').css("display", "flex");
        $('#game').append('<div id="userChoice" class="col-4 text-center"><p>Player :</p>'+ $(this).parent().html()+ '</div>');
        $('#choiceSelection').css("display", "none");
        let computerChoice = getComputerChoice();
        console.log(computerChoice)
        let imgDiv;
        if (computerChoice === 'rock') {
            imgDiv = $('#choiceSelection div:nth-child(2)').html();
        } else if (computerChoice === 'paper') {
            imgDiv = $('#choiceSelection div:nth-child(3)').html();
        } else if (computerChoice === 'scissors') {
            imgDiv = $('#choiceSelection div:nth-child(4)').html();
        }
        $('#game').append('<div id="computerChoice" class="col-4 text-center"><p>Computer :</p>'+ imgDiv+ '</div>');
        const result = findWinner(playerInput, computerChoice);
        $('#game h2').after('<h3 class="text-center" id="result">Player '+ result);
        if (result === "Tied") {
            $('#result').addClass('text-secondary');
        } else if (result === "Won"){
            $('#result').addClass('text-success');
        } else if (result === "Lost") {
            $('#result').addClass('text-danger');
        }
    });




    // GAME
    function getPlayerChoice(playerInput) {
        playerInput = playerInput.toLowerCase();
        if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bomb') {
            return playerInput;
        } else {
            console.error('Ce n\'est pas bon');
        }
    }

    function getComputerChoice() {
        let nb = Math.floor(Math.random() * 3);
        switch (nb) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
            default:
                return 'booboo';
        }
    }

    function findWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'Tied';
        } else {
            if (playerChoice === 'rock') {
                if (computerChoice === 'scissors') {
                    return 'Won';
                } else {
                    return 'Lost';
                }
            } else if (playerChoice === 'paper') {
                if (computerChoice === 'rock') {
                    return 'Won';
                } else {
                    return 'Lost';
                }
            } else if (playerChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    return 'Won';
                } else {
                    return 'Lost';
                }
            } else if (playerChoice === 'bomb') {
                return 'Won';
            }
        }
    }
    
});