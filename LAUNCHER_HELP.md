# Game Launcher - Complete Setup Guide

## Quick Start (3 Steps)

1. **Install Dependencies**
   ```powershell
   pip install -r requirements.txt
   ```

2. **Start the Server**
   - Option A: Double-click `START_SERVER.bat`
   - Option B: Run `python app.py` in PowerShell

3. **Launch a Game**
   - Go to http://localhost:5000
   - Click "🚀 Launch" on any game

## Verify Everything is Working

```powershell
python test_pygame.py
```

Should show: `✓ Pygame is installed and working!`

## Troubleshooting

### Issue: "ModuleNotFoundError: No module named 'pygame'"
**Solution:** Install pygame
```powershell
pip install pygame
```

### Issue: Game won't launch or shows blank error
**Solution:** Check the terminal where `app.py` is running
- Look for red error messages
- You'll see debug info like:
  ```
  === Launching game: christmas_pygame ===
  Game path: C:\...\christmas_card_pygame.py
  File exists: True
  Process started with PID: 12345
  ```

### Issue: Server won't start / "Address already in use"
**Solution:** Another app is using port 5000
- Close other Python windows
- Or restart your computer

### Issue: Can't reach http://localhost:5000
**Solution:** Make sure Flask server is running
- Terminal should show: `Running on http://127.0.0.1:5000`
- If not there, start with `python app.py`

## How It Works

```
Home.html
   ↓ Click "Open Game Launcher"
   ↓
http://localhost:5000 (launcher.html)
   ↓ Click "Launch" button
   ↓
app.py (Flask server)
   ↓ Finds game file
   ↓
christmas_card_pygame.py or other game
   ↓
Game window opens on your screen!
```

## Files

| File | Purpose |
|------|---------|
| `app.py` | Flask web server (handles launches) |
| `launcher.html` | Game selection interface |
| `START_SERVER.bat` | Easy launcher for Windows |
| `test_pygame.py` | Verify pygame is installed |
| `requirements.txt` | Lists required packages |
| `assets/GameIMade/` | Contains game Python files |

## Available Games

1. **Christmas Card (Pygame)** - Modern smooth version
2. **Christmas Card (Turtle)** - Original version
3. **Circle Drawing** - Simple demo

## Tips

- **Check Terminal Output**: All debug info appears in the terminal where you ran `python app.py`
- **Keep Terminal Open**: Don't close it while playing
- **Test Mode**: Visit http://localhost:5000/test to verify server paths and files
- **Game Errors**: If a game crashes, check the NEW console window that opened (Windows creates separate console)

## Contact/Debug

If games still won't launch:
1. Run `python test_pygame.py` (should pass)
2. Run `python app.py` in terminal
3. Try clicking a game - watch terminal for full error details
4. Share the terminal error messages for help
