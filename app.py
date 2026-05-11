from flask import Flask, render_template, jsonify
import subprocess
import os
import sys
import traceback

app = Flask(__name__, template_folder=os.path.dirname(os.path.abspath(__file__)))

# Get the directory where this script is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
GAMES_DIR = os.path.join(BASE_DIR, "assets", "GameIMade")

print(f"Base directory: {BASE_DIR}")
print(f"Games directory: {GAMES_DIR}")
print(f"Games dir exists: {os.path.exists(GAMES_DIR)}")

@app.route('/')
def index():
    return render_template('launcher.html')

@app.route('/play/<game_name>')
def play_game(game_name):
    """Launch a Python game"""
    print(f"\n=== Launching game: {game_name} ===")
    
    try:
        # Map game names to file paths
        games = {
            'christmas_pygame': os.path.join(GAMES_DIR, 'christmas_card_pygame.py'),
            'christmas_turtle': os.path.join(GAMES_DIR, 'maysChristmasCard (1).py'),
            'circle': os.path.join(GAMES_DIR, 'circle.py'),
        }
        
        if game_name not in games:
            msg = f'Game "{game_name}" not found. Available: {list(games.keys())}'
            print(f"ERROR: {msg}")
            return jsonify({'success': False, 'error': msg}), 404
        
        game_path = games[game_name]
        print(f"Game path: {game_path}")
        print(f"File exists: {os.path.exists(game_path)}")
        
        if not os.path.exists(game_path):
            msg = f'Game file not found: {game_path}'
            print(f"ERROR: {msg}")
            return jsonify({'success': False, 'error': msg}), 404
        
        # Print Python info
        print(f"Python executable: {sys.executable}")
        print(f"Working directory: {GAMES_DIR}")
        
        # Launch the game
        try:
            if sys.platform == 'win32':
                # Windows: CREATE_NEW_CONSOLE shows the game window
                process = subprocess.Popen(
                    [sys.executable, game_path], 
                    cwd=GAMES_DIR,
                    creationflags=subprocess.CREATE_NEW_CONSOLE,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE
                )
            else:
                # Linux/Mac
                process = subprocess.Popen(
                    [sys.executable, game_path], 
                    cwd=GAMES_DIR,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE
                )
            
            print(f"Process started with PID: {process.pid}")
            msg = f'{game_name} launched successfully! Game window should appear.'
            print(f"SUCCESS: {msg}")
            return jsonify({'success': True, 'message': msg})
        
        except Exception as e:
            error_msg = f"Failed to launch process: {str(e)}\n{traceback.format_exc()}"
            print(f"ERROR: {error_msg}")
            return jsonify({'success': False, 'error': error_msg}), 500
    
    except Exception as e:
        error_msg = f"Unexpected error: {str(e)}\n{traceback.format_exc()}"
        print(f"ERROR: {error_msg}")
        return jsonify({'success': False, 'error': error_msg}), 500

@app.route('/games')
def get_games():
    """Return list of available games"""
    games = [
        {
            'id': 'christmas_pygame',
            'name': 'Christmas Card (Pygame)',
            'description': 'Holiday scene with trees, presents, snowman, and falling snow',
            'tech': 'Python, Pygame'
        },
        {
            'id': 'christmas_turtle',
            'name': 'Christmas Card (Turtle)',
            'description': 'Original turtle graphics version with animated snow',
            'tech': 'Python, Turtle Graphics'
        },
        {
            'id': 'circle',
            'name': 'Circle Drawing',
            'description': 'Turtle graphics circle demonstration',
            'tech': 'Python, Turtle Graphics'
        }
    ]
    return jsonify(games)

@app.route('/test')
def test():
    """Test endpoint to verify server is working"""
    return jsonify({
        'status': 'ok',
        'base_dir': BASE_DIR,
        'games_dir': GAMES_DIR,
        'games_dir_exists': os.path.exists(GAMES_DIR),
        'files_in_games_dir': os.listdir(GAMES_DIR) if os.path.exists(GAMES_DIR) else []
    })

if __name__ == '__main__':
    print("\n" + "="*60)
    print("Starting Flask Game Launcher Server")
    print("="*60)
    print(f"Server: http://127.0.0.1:5000")
    print(f"Test: http://127.0.0.1:5000/test")
    print(f"Games: http://127.0.0.1:5000")
    print("="*60 + "\n")
    
    app.run(debug=False, host='127.0.0.1', port=5000, use_reloader=False)

