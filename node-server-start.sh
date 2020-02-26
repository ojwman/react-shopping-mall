#!/bin/bash
echo "start"

# remove
rm -r react-shopping-mall

# clone git 
git clone https://github.com/ojwman/react-shopping-mall

# move
cd react-shopping-mall

# install packages
npm install create-react-app
npm install react-router react-router-dom bootstrap reactstrap react react-dom

# build
npm run build

# run
cd build
node server.js

ehco "boot"
