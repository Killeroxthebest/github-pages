# Game Launcher - Setup Instructions

## Quick Start

### Option 1: Using the Batch File (Easiest for Windows)
1. Double-click `START_SERVER.bat` in this folder
2. A terminal window will open
3. Open your browser to: http://localhost:5000
4. Click "🚀 Launch" on any game

### Option 2: Manual Start
1. Open PowerShell in this folder
2. Run: `python app.py`
3. Open your browser to: http://localhost:5000

## First Time Setup

If this is your first time, you need to install dependencies:

```powershell
pip install -r requirements.txt
```

This installs:
- Flask (web server)
- Pygame (for games)

## How It Works

1. **START_SERVER.bat** - Launches the Flask web server
2. **app.py** - Python backend that manages games
3. **launcher.html** - The web interface you see
4. **Christmas Card (Pygame)** - Modern version with smooth animations
5. **Christmas Card (Turtle)** - Original turtle graphics version
6. **Circle Drawing** - Simple turtle graphics demo

## Playing Games

- From your website's Home page, click "🚀 Open Game Launcher"
- Or go directly to http://localhost:5000
- Click the game button
- The game window will pop up on your screen
- Close the game window to go back and play another

## Troubleshooting

**"Port 5000 already in use"**
- Another app is using port 5000
- Close other Flask apps or restart your computer

**"Game not found"**
- Make sure the .py files are in `assets/GameIMade/`
- Check file names match exactly

**Game won't start**
- Make sure pygame is installed: `pip install pygame`
- Check the terminal for error messages

## Notes

- The server only works on your computer (localhost)
- You can access it from the same computer by going to http://localhost:5000
- To close the server, press Ctrl+C in the terminal
