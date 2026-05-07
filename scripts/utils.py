"""Shared style configuration for SVG diagram generation."""

import matplotlib
matplotlib.use('Agg')  # Non-interactive backend
import matplotlib.pyplot as plt
import os

# Output directory
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

# Color palette matching existing SVGs
COLORS = {
    'primary': '#2563eb',    # Blue - main curves/vectors
    'secondary': '#dc2626',  # Red - secondary objects
    'tertiary': '#16a34a',   # Green - tertiary objects
    'accent': '#7c3aed',     # Purple - additional curves
    'grid': '#dddddd',       # Light gray grid
    'axis': '#333333',       # Dark gray axes
    'text': '#333333',       # Dark text
    'light': '#666666',      # Light text
    'fill_primary': '#dbeafe',   # Light blue fill
    'fill_secondary': '#fecaca', # Light red fill
    'fill_tertiary': '#bbf7d0',  # Light green fill
}


def setup_style():
    """Configure matplotlib for consistent SVG output."""
    plt.rcParams.update({
        'figure.facecolor': 'white',
        'axes.facecolor': 'white',
        'axes.edgecolor': COLORS['axis'],
        'axes.linewidth': 1.2,
        'axes.grid': True,
        'grid.color': COLORS['grid'],
        'grid.linewidth': 0.6,
        'grid.alpha': 0.5,
        'font.family': 'sans-serif',
        'font.sans-serif': ['Arial', 'Helvetica', 'DejaVu Sans'],
        'font.size': 11,
        'text.color': COLORS['text'],
        'text.usetex': False,
        'savefig.format': 'svg',
        'svg.fonttype': 'none',  # Keep text as text, not paths
        'figure.dpi': 150,
        'axes.unicode_minus': False,
    })


def save_svg(fig, filename, tight=True):
    """Save figure as SVG to the images directory."""
    setup_style()
    filepath = os.path.join(OUTPUT_DIR, filename)
    if tight:
        fig.savefig(filepath, format='svg', bbox_inches='tight', pad_inches=0.1)
    else:
        fig.savefig(filepath, format='svg')
    plt.close(fig)
    print(f"  Saved: {filename}")
