#!/bin/bash

set -ex

# Install NodeJS
sudo apt update
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install pm2@latest -g

# Install git and pull down the repository
sudo apt install git
git clone "${FORKED_REACT_REPO}"

# cd into repo and install dependencies
cd react-app-devops-playground
npm install

# Deploy application
sudo pm2 startup
sudo pm2 start ecosystem.config.js
sudo pm2 save
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000