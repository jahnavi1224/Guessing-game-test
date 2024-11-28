require(['jquery',
    'Magento_Ui/js/modal/modal',
    'mage/translate'],
    function ($, modal) {
        $(document).ready(function () {
            // Generate random number once
            let randomNumber = Math.floor(Math.random() * 50) + 1;
            
            // Track attempts
            let attempts = 0;

            // Store all guesses
            let guesses = [];

            // Track if the game is won
            let gameWon = false;

            // Modal popup
            var options = {
                type: 'popup',
                responsive: false,
                innerScroll: true,
                title: $.mage.__('Guessing Game'),
                modalClass: 'guessing-game-popup',
                buttons: [],
                closed: function () {
                    $('#guess-input').val('');
                    $('#game-message').text('');
                    if (gameWon) {
                        console.log("Congratulation you won! Restart the game.");
                        
                        // Reset the game when modal popup is closed
                        resetGame();
                    }
                }
            };

            var popup = modal(options, $('#guessing-game-modal'));

            // Open popup on button click
            $('#guessing-game-button').on('click', function () {
                $('#guessing-game-modal').modal('openModal');
            });

            console.log(randomNumber);

            // Number guessing game
            $('#guess-submit').on('click', function () {
                if (gameWon) {
                    $('#game-message').text($.mage.__('You already won! Close the modal to start a new game.'));
                    return;
                }

                var userGuess = parseInt($('#guess-input').val(), 10);
                console.log(randomNumber);

                if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
                    $('#game-message').text($.mage.__('Please enter a valid number between 1 and 50.'));
                    return;
                }

                attempts++;

                // Add guesses to the list
                guesses.push(userGuess);
                
                if (userGuess === randomNumber) {
                    gameWon = true; // Game won
                    $('#game-message').html(
                        $.mage.__('<strong>Correct!</strong> You guessed the number in %1 attempts.').replace('%1', attempts)
                    );

                    // Display all guesses with the last one highlighted
                    var guessesHtml = guesses
                        .map((guess, index) => {
                            if (index === guesses.length - 1) {
                                return `<span class="highlight">${guess}</span>`;
                            }
                            return `<span>${guess}</span>`;
                        })
                        .join(', ');

                    $('#guesses-list').html(
                        $.mage.__('<p>Your guesses: %1</p>').replace('%1', guessesHtml)
                    );
                } else if (userGuess < randomNumber) {
                    $('#game-message').html(
                        $.mage.__('The number entered was <strong>below</strong> the random number.')
                    );
                } else {
                    $('#game-message').html(
                        $.mage.__('The number entered was <strong>above</strong> the random number.')
                    );
                }
            });

            // Reset game function
            function resetGame() {
                randomNumber = Math.floor(Math.random() * 50) + 1;
                attempts = 0;
                guesses = [];
                gameWon = false;
                $('#guess-input').val('');
                $('#game-message').text('');
                $('#guesses-list').text('');
            }
        });
});
