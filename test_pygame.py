#!/usr/bin/env python
"""
Quick test to verify Pygame is installed and working
"""
import sys

print("=" * 60)
print("Pygame Installation Test")
print("=" * 60)
print(f"Python: {sys.version}")
print(f"Executable: {sys.executable}")
print()

try:
    print("Attempting to import pygame...")
    import pygame
    print(f"✓ Pygame version: {pygame.version.ver}")
    
    print("✓ Pygame is installed and working!")
    print()
    print("You can now run the game launcher:")
    print("  python app.py")
    print()
    
except ImportError as e:
    print(f"✗ Pygame is NOT installed")
    print()
    print("To install pygame, run:")
    print("  pip install pygame")
    print()
    sys.exit(1)

print("=" * 60)
