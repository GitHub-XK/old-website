#!/bin/bash

cd ~
mkdir .moonwardsGame
cd .moonwardsGame
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/core.js"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/eventchain.js"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/stuff.js"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/shell.html"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/tutorial.html"
mkdir images
cd images
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/basicCoreTMP.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/basicUpperTMP.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/capsuleIcon.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/capsuleIconGreen.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/materialsIcon.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/materialsIconGreen.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/nuclearIcon.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/nuclearIconGreen.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/boosterIcon.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/boosterIconGreen.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/reentryIcon.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/reentryIconGreen.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/cryogenicsIcon.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/cryogenicsIconGreen.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/ground.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/hoh.gif"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/lalande.jpg"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/launch.png"
wget "https://raw.githubusercontent.com/briligg/moonwards/gh-pages/browsergame/images/moon.gif"
cd /bin
sudo echo "firefox ~/.moonwardsGame/shell.html" > moongame
sudo chmod +x moongame
sudo echo "#!/bin/bash" > remove-moongame
sudo echo "rm -rf .moonwardsGame" >> remove-moongame
sudo echo "cd /bin" >> remove-moongame
sudo echo "sudo rm moongame" >> remove-moongame
sudo echo "sudo rm remove-moongame" >> remove-moongame
sudo echo "cd ~" >> remove-moongame
sudo echo "echo 'game removed'" >> remove-moongame
sudo chmod +x remove-moongame
echo "The game can be started from the terminal by typing 'moongame'"
echo "Remove the game by typing 'remove-moongame'"
cd ~
