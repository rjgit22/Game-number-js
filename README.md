# Number Guessing Game :sparkling_heart:


I have created a simple *Guess the Number* game. It chooses a random number between 10 and 100(exclusive) and then challenges the player to guess the number in 7 turns. After each turn the player is told if they are right or wrong. 
'B' means that their digit is correct but in right place, 'C' means that their digit is correct but in wrong place. It also tells the player what numbers they previously guessed. The game ends once the player guesses correctly, or once they run out of turns. When the game ends, the player is given an option to start playing again.

## Broken Down into **Actionble** Tasks
1. Generate a random number between 10 and 100(exclusive).
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
7. Display congratulations message.
8. Stop the player from being able to enter more guesses (this would mess the game up).
9. Display control allowing the player to restart the game.
10. If it is wrong and the player has turns left:
11. Tell the player they are wrong.
12. Allow them to enter another guess.
13. Increment the turn number by 1.
14. If it is wrong and the player has no turns left:
15. Tell the player it is game over.
16. Stop the player from being able to enter more guesses (this would mess the game up).
17. Display control allowing the player to restart the game.
18. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.


