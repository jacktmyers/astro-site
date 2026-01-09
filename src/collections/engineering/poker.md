---
id: poker
listingTitle: Poker
title: Unity Poker
---
Unity poker is a simple Unity game I made for a job interview. The game has two game modes: Black Jack and Jacks or Higher. The rules of Black Jack are standard.

### Jacks or Higher is played like this:

* The User Gets Dealt 5 Cards
* The user picks any amount of cards to keep and the rest are replaced
* If the final hand beats a pair of jacks the bet is won

Pretty simple game and standard aesthetics. The cards are constructed using a combination of three sprites. The number, the suit and the background:

![](/src/img/engineering/poker/cardCombo.png)
*Construction of the Ace of Spades*

The other notable feature is the smooth card movement.The cards don’t move by setting their location. Instead their final location is set as a field and each frame a new intermediate location is set based on a linear interpolation of the current position and then new one. The lerp amount is a tweakable parameter.

The bulk of the work after this was the logic required to deal cards, check for poker hands, and assign winnings.

### Here’s some gameplay:

![](/src/img/engineering/poker/blackJack.gif)
![](/src/img/engineering/poker/jacksLoss.gif)
![](/src/img/engineering/poker/jacksWin.gif)