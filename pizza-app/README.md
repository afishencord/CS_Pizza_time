# PizzaTime

## Prerequisites
- **Node.js** (v14 or later): Download and install from https://nodejs.org/
- **Git** (optional, for cloning): Download and install from https://git-scm.com/download/win
- **Visual Studio Code** (optional, recommended IDE): Download from https://code.visualstudio.com/

## Setup on Windows 11
1. Open PowerShell **as Administrator**.
2. **Enable script execution** (if you see execution policy errors):
   
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## Setup on Windows 11
1. Open PowerShell or Command Prompt on vscode.
2. Clone the repository:
   
   git clone https://github.com/yourusername/pizza-app.git
   cd pizza-app

## Server Setup
cd server
npm install
npm start

The back-end API will start on port 5000.

## Client Setup

cd pizza-app\client
npm install
npm start

The React front-end will launch at http://localhost:3000 (with API proxy to port 5000).

Navigate to http://localhost:3000 in your browser.

Browse menu, customize pizzas, and place a mock order.