"""Phase 1: Fix 5 critical accuracy SVGs.

Generates:
1. game-tree.svg - Correct "best of 2" tree from LaTeX source
2. fp2-polar-coordinates.svg - Full polar grid with 12 angle lines
3. fp3-hyperbolic-graphs.svg - Precise sinh/cosh/tanh curves
4. fp2-maclaurin-approximation.svg - Precise e^x and polynomial approximations
5. fp3_vectors_cross_product.svg - Proper 3D perspective
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyArrowPatch, Arc, Circle, FancyBboxPatch
from matplotlib.lines import Line2D
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from utils import COLORS, setup_style, save_svg


# ============================================================
# 1. Game Tree (S2 Binomial)
# ============================================================
def generate_game_tree():
    """Generate the correct 'best of 2' game tree from binomial.tex lines 110-134.

    Structure:
        Start -> A (Antoine wins, P=0.5) [terminal]
        Start -> B (Blaise wins R1)
            B -> A (Antoine wins, P=0.25) [terminal]
            B -> B (Blaise wins, P=0.25) [terminal]
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(8, 6))
    ax.set_xlim(-0.5, 7.5)
    ax.set_ylim(-0.5, 5.5)
    ax.set_aspect('equal')
    ax.axis('off')

    # Node positions
    start = (3.5, 4.5)
    A1 = (1.5, 2.5)     # A after round 1
    B1 = (5.5, 2.5)     # B after round 1
    A2 = (4.0, 0.5)     # A after round 2
    B2 = (7.0, 0.5)     # B after round 2

    node_r = 0.4

    # Draw edges first
    edge_style = dict(color='#888888', linewidth=2, zorder=1)
    prob_style = dict(fontsize=13, fontweight='bold', color='#c0392b', ha='center', va='center')

    # Start -> A1
    ax.annotate('', xy=A1, xytext=start,
                arrowprops=dict(arrowstyle='->', **edge_style))
    ax.text((start[0]+A1[0])/2 - 0.3, (start[1]+A1[1])/2, '0.5', **prob_style)

    # Start -> B1
    ax.annotate('', xy=B1, xytext=start,
                arrowprops=dict(arrowstyle='->', **edge_style))
    ax.text((start[0]+B1[0])/2 + 0.3, (start[1]+B1[1])/2, '0.5', **prob_style)

    # B1 -> A2
    ax.annotate('', xy=A2, xytext=B1,
                arrowprops=dict(arrowstyle='->', **edge_style))
    ax.text((B1[0]+A2[0])/2 - 0.3, (B1[1]+A2[1])/2, '0.5', **prob_style)

    # B1 -> B2
    ax.annotate('', xy=B2, xytext=B1,
                arrowprops=dict(arrowstyle='->', **edge_style))
    ax.text((B1[0]+B2[0])/2 + 0.3, (B1[1]+B2[1])/2, '0.5', **prob_style)

    # Draw nodes
    # Start node (blue)
    c = Circle(start, node_r, facecolor=COLORS['primary'], edgecolor='#2171a5',
               linewidth=2, zorder=5)
    ax.add_patch(c)
    ax.text(start[0], start[1], 'Start', ha='center', va='center',
            fontsize=12, fontweight='bold', color='white', zorder=6)

    # A1 node - terminal, Antoine wins (green)
    c = Circle(A1, node_r, facecolor='#27ae60', edgecolor='#1a8a4a',
               linewidth=2, zorder=5)
    ax.add_patch(c)
    ax.text(A1[0], A1[1], 'A', ha='center', va='center',
            fontsize=12, fontweight='bold', color='white', zorder=6)
    ax.text(A1[0], A1[1] - 0.7, 'Antoine wins', ha='center', va='center',
            fontsize=11, fontweight='bold', color='#2c3e50')
    ax.text(A1[0], A1[1] - 1.0, '$P = 0.5$', ha='center', va='center',
            fontsize=11, color='#c0392b', fontweight='bold')

    # B1 node - decision (blue)
    c = Circle(B1, node_r, facecolor=COLORS['primary'], edgecolor='#2171a5',
               linewidth=2, zorder=5)
    ax.add_patch(c)
    ax.text(B1[0], B1[1], 'B', ha='center', va='center',
            fontsize=12, fontweight='bold', color='white', zorder=6)
    ax.text(B1[0], B1[1] - 0.55, 'R1: Blaise wins', ha='center', va='center',
            fontsize=10, color='#444')

    # A2 node - terminal, Antoine wins (green)
    c = Circle(A2, node_r, facecolor='#27ae60', edgecolor='#1a8a4a',
               linewidth=2, zorder=5)
    ax.add_patch(c)
    ax.text(A2[0], A2[1], 'A', ha='center', va='center',
            fontsize=12, fontweight='bold', color='white', zorder=6)
    ax.text(A2[0], A2[1] - 0.7, 'Antoine wins', ha='center', va='center',
            fontsize=11, fontweight='bold', color='#2c3e50')
    ax.text(A2[0], A2[1] - 1.0, '$P = 0.25$', ha='center', va='center',
            fontsize=11, color='#c0392b', fontweight='bold')

    # B2 node - terminal, Blaise wins (red)
    c = Circle(B2, node_r, facecolor='#e74c3c', edgecolor='#c0392b',
               linewidth=2, zorder=5)
    ax.add_patch(c)
    ax.text(B2[0], B2[1], 'B', ha='center', va='center',
            fontsize=12, fontweight='bold', color='white', zorder=6)
    ax.text(B2[0], B2[1] - 0.7, 'Blaise wins', ha='center', va='center',
            fontsize=11, fontweight='bold', color='#2c3e50')
    ax.text(B2[0], B2[1] - 1.0, '$P = 0.25$', ha='center', va='center',
            fontsize=11, color='#c0392b', fontweight='bold')

    # Title
    ax.text(3.5, 5.3, 'Antoine vs Blaise — Game Tree', ha='center', va='center',
            fontsize=16, fontweight='bold', color='#1a1a2e')

    # Legend
    legend_y = -0.2
    c1 = Circle((0.5, legend_y), 0.15, facecolor=COLORS['primary'], edgecolor='#2171a5', linewidth=1.5)
    ax.add_patch(c1)
    ax.text(0.85, legend_y, 'Decision node', fontsize=10, va='center', color='#444')
    c2 = Circle((3.0, legend_y), 0.15, facecolor='#27ae60', edgecolor='#1a8a4a', linewidth=1.5)
    ax.add_patch(c2)
    ax.text(3.35, legend_y, 'Antoine wins', fontsize=10, va='center', color='#444')
    c3 = Circle((5.5, legend_y), 0.15, facecolor='#e74c3c', edgecolor='#c0392b', linewidth=1.5)
    ax.add_patch(c3)
    ax.text(5.85, legend_y, 'Blaise wins', fontsize=10, va='center', color='#444')

    # Summary
    ax.text(3.5, -0.8, r'$P(\text{Antoine wins}) = 0.5 + 0.25 = 0.75$',
            ha='center', fontsize=13, fontweight='bold', color='#1a1a2e')
    ax.text(3.5, -1.2, r'$P(\text{Blaise wins}) = 0.25$',
            ha='center', fontsize=13, fontweight='bold', color='#1a1a2e')

    save_svg(fig, 'game-tree.svg')


# ============================================================
# 2. Polar Coordinates (FP2)
# ============================================================
def generate_polar_coordinates():
    """Generate proper polar coordinate system from polar.tex lines 50-83.

    Features: 12 angle gridlines (every 30°), π-fraction labels,
    radial gridlines, sample point P(r,θ), filled angle sector.
    """
    setup_style()
    fig = plt.figure(figsize=(5, 5))
    ax = fig.add_subplot(111, projection='polar')

    # Configure polar grid
    ax.set_theta_zero_location('E')  # 0 at right (standard math convention)
    ax.set_theta_direction(-1)  # Counter-clockwise

    # Set angle ticks to every 30° with π labels
    angles = np.linspace(0, 2*np.pi, 13)[:-1]  # 0 to 11π/6
    ax.set_xticks(angles)
    ax.set_xticklabels([
        r'$0$', r'$\frac{\pi}{6}$', r'$\frac{\pi}{3}$', r'$\frac{\pi}{2}$',
        r'$\frac{2\pi}{3}$', r'$\frac{5\pi}{6}$', r'$\pi$',
        r'$\frac{7\pi}{6}$', r'$\frac{4\pi}{3}$', r'$\frac{3\pi}{2}$',
        r'$\frac{5\pi}{3}$', r'$\frac{11\pi}{6}$'
    ], fontsize=9)

    # Radial grid
    ax.set_rticks([0.5, 1.0, 1.5, 2.0])
    ax.set_rlabel_position(30)
    ax.set_ylim(0, 2.2)

    # Grid styling
    ax.grid(True, color=COLORS['grid'], linewidth=0.6, alpha=0.5)
    ax.tick_params(colors=COLORS['light'])

    # Sample point P(r, θ) at θ=60°, r=1.5
    theta_p = np.pi / 3  # 60°
    r_p = 1.5

    # Draw radius vector
    ax.plot([0, theta_p], [0, r_p], color=COLORS['secondary'], linewidth=2, zorder=5)

    # Draw point P
    ax.plot(theta_p, r_p, 'o', color=COLORS['secondary'], markersize=8, zorder=6)
    ax.annotate(r'$P(r,\theta)$', xy=(theta_p, r_p),
                xytext=(theta_p + 0.15, r_p + 0.25),
                fontsize=13, fontweight='bold', color=COLORS['secondary'])

    # Fill angle sector
    theta_sector = np.linspace(0, theta_p, 50)
    r_sector = np.ones_like(theta_sector) * 0.5
    ax.fill_between(theta_sector, 0, r_sector, alpha=0.2, color=COLORS['primary'])

    # Labels
    ax.annotate(r'$r$', xy=(theta_p/2, r_p/2),
                xytext=(theta_p/2 + 0.1, r_p/2 + 0.15),
                fontsize=13, color=COLORS['secondary'], fontstyle='italic')
    ax.annotate(r'$\theta$', xy=(theta_p * 0.4, 0.35),
                fontsize=13, color=COLORS['primary'], fontstyle='italic')

    # Origin label
    ax.annotate(r'$O$', xy=(0, 0), xytext=(-0.15, -0.15),
                fontsize=12, ha='right')

    # x, y axis labels (outside the polar plot)
    ax.annotate(r'$x$', xy=(0, 2.3), fontsize=13, ha='center', va='bottom',
                fontstyle='italic')
    ax.annotate(r'$y$', xy=(np.pi/2, 2.3), fontsize=13, ha='center', va='bottom',
                fontstyle='italic')

    save_svg(fig, 'fp2-polar-coordinates.svg', tight=False)


# ============================================================
# 3. Hyperbolic Functions (FP3)
# ============================================================
def generate_hyperbolic_graphs():
    """Generate precise sinh/cosh/tanh graphs from hyperbolic_functions.tex lines 94-116.

    Uses exact formulas: sinh(x) = (e^x - e^{-x})/2, etc.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(6, 4))

    x_sinh_cosh = np.linspace(-3, 3, 300)
    x_tanh = np.linspace(-4, 4, 300)

    # Compute exact values
    sinh_x = np.sinh(x_sinh_cosh)
    cosh_x = np.cosh(x_sinh_cosh)
    tanh_x = np.tanh(x_tanh)

    # Plot curves
    ax.plot(x_sinh_cosh, sinh_x, color=COLORS['primary'], linewidth=2, label=r'$\sinh x$')
    ax.plot(x_sinh_cosh, cosh_x, color=COLORS['secondary'], linewidth=2, label=r'$\cosh x$')
    ax.plot(x_tanh, tanh_x, color=COLORS['tertiary'], linewidth=2, label=r'$\tanh x$')

    # Asymptote y=1
    ax.axhline(y=1, color='#999999', linestyle='--', linewidth=1, label=r'$y=1$')
    ax.axhline(y=-1, color='#999999', linestyle='--', linewidth=0.5, alpha=0.5)

    # Axes through origin
    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    # Labels
    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    # Set limits
    ax.set_xlim(-3.5, 3.5)
    ax.set_ylim(-2, 4.5)

    # Legend
    ax.legend(loc='upper left', fontsize=10, framealpha=0.9)

    # Remove default grid (we'll use a subtle one)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp3-hyperbolic-graphs.svg')


# ============================================================
# 4. Maclaurin Approximation (FP2)
# ============================================================
def generate_maclaurin_approximation():
    """Generate e^x with Maclaurin polynomial approximations.

    From MacLaurin_and_Taylor_Series.tex lines 162-178:
    f(x) = e^x (blue), P_0=1 (red), P_1=1+x (green), P_2=1+x+x²/2 (purple)
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    x = np.linspace(-1.5, 1.5, 300)

    # Exact function
    fx = np.exp(x)

    # Polynomial approximations
    P0 = np.ones_like(x)                        # P_0(x) = 1
    P1 = 1 + x                                   # P_1(x) = 1 + x
    P2 = 1 + x + x**2 / 2                        # P_2(x) = 1 + x + x²/2

    # Plot
    ax.plot(x, fx, color=COLORS['primary'], linewidth=2.5, label=r'$f(x) = e^x$')
    ax.plot(x, P0, color=COLORS['secondary'], linewidth=1.5, linestyle='--',
            label=r'$P_0(x) = 1$')
    ax.plot(x, P1, color=COLORS['tertiary'], linewidth=1.5, linestyle='--',
            label=r'$P_1(x) = 1 + x$')
    ax.plot(x, P2, color=COLORS['accent'], linewidth=1.5, linestyle='--',
            label=r'$P_2(x) = 1 + x + \frac{x^2}{2}$')

    # Axes through origin
    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    # Labels
    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    ax.set_xlim(-2, 2)
    ax.set_ylim(-0.5, 5)

    # Legend
    ax.legend(loc='upper left', fontsize=9, framealpha=0.9)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp2-maclaurin-approximation.svg')


# ============================================================
# 5. Cross Product 3D (FP3 Vectors)
# ============================================================
def generate_cross_product_3d():
    """Generate 3D cross product visualization from lecture_notes_vectors.tex lines 91-110.

    Vectors: a=(3,1,0) blue, b=(1,3,0) red, a×b=(0,0,3) green
    With parallelogram and right-hand rule arc.
    """
    setup_style()
    fig = plt.figure(figsize=(5, 5))
    ax = fig.add_subplot(111, projection='3d')

    # Vectors from LaTeX source
    a = np.array([3, 1, 0])
    b = np.array([1, 3, 0])
    cross = np.array([0, 0, 3])  # a × b

    # Origin
    o = np.array([0, 0, 0])

    # Draw vectors using quiver
    ax.quiver(*o, *a, color=COLORS['primary'], linewidth=2.5, arrow_length_ratio=0.1,
              label=r'$\mathbf{a}$')
    ax.quiver(*o, *b, color=COLORS['secondary'], linewidth=2.5, arrow_length_ratio=0.1,
              label=r'$\mathbf{b}$')
    ax.quiver(*o, *cross, color=COLORS['tertiary'], linewidth=2.5, arrow_length_ratio=0.1,
              label=r'$\mathbf{a} \times \mathbf{b}$')

    # Draw parallelogram (filled)
    # Vertices: O, a, a+b, b
    ab = a + b
    verts = [o, a, ab, b, o]
    xs = [v[0] for v in verts]
    ys = [v[1] for v in verts]
    zs = [v[2] for v in verts]
    ax.plot(xs, ys, zs, color='#999999', linewidth=1, linestyle='--')

    # Fill parallelogram with semi-transparent surface
    from mpl_toolkits.mplot3d.art3d import Poly3DCollection
    poly_verts = [[o, a, ab, b]]
    poly = Poly3DCollection(poly_verts, alpha=0.15, facecolor='#6b9bd2', edgecolor='#999999')
    ax.add_collection3d(poly)

    # Label vectors
    ax.text(a[0]/2, a[1]/2 - 0.3, a[2], r'$\mathbf{a}$', fontsize=14,
            color=COLORS['primary'], fontweight='bold')
    ax.text(b[0]/2 - 0.4, b[1]/2, b[2], r'$\mathbf{b}$', fontsize=14,
            color=COLORS['secondary'], fontweight='bold')
    ax.text(cross[0] + 0.2, cross[1], cross[2]/2, r'$\mathbf{a} \times \mathbf{b}$',
            fontsize=14, color=COLORS['tertiary'], fontweight='bold')

    # Right-hand rule arc (in the xy-plane from a to b)
    arc_angles = np.linspace(np.arctan2(a[1], a[0]), np.arctan2(b[1], b[0]), 30)
    arc_r = 1.2
    arc_x = arc_r * np.cos(arc_angles)
    arc_y = arc_r * np.sin(arc_angles)
    arc_z = np.zeros_like(arc_x)
    ax.plot(arc_x, arc_y, arc_z, color='#666666', linewidth=1.5)

    # Arrow at end of arc
    ax.quiver(arc_x[-2], arc_y[-2], 0,
              arc_x[-1]-arc_x[-2], arc_y[-1]-arc_y[-2], 0,
              color='#666666', linewidth=1, arrow_length_ratio=0.5)
    ax.text(0.8, 1.0, 0, 'right-hand rule', fontsize=9, color='#666666')

    # Coordinate axes
    ax.quiver(0, 0, 0, 4.5, 0, 0, color='black', linewidth=0.8, arrow_length_ratio=0.05)
    ax.quiver(0, 0, 0, 0, 4.5, 0, color='black', linewidth=0.8, arrow_length_ratio=0.05)
    ax.quiver(0, 0, 0, 0, 0, 4, color='black', linewidth=0.8, arrow_length_ratio=0.05)
    ax.text(4.7, 0, 0, r'$x$', fontsize=12, fontstyle='italic')
    ax.text(0, 4.7, 0, r'$y$', fontsize=12, fontstyle='italic')
    ax.text(0, 0, 4.2, r'$z$', fontsize=12, fontstyle='italic')

    # Set viewing angle to match LaTeX's 3d view={30}{70}
    ax.view_init(elev=20, azim=60)

    # Set limits
    ax.set_xlim(-1, 5)
    ax.set_ylim(-1, 5)
    ax.set_zlim(-1, 4.5)

    # Remove axis panes and ticks for cleaner look
    ax.xaxis.pane.fill = False
    ax.yaxis.pane.fill = False
    ax.zaxis.pane.fill = False
    ax.xaxis.pane.set_edgecolor('none')
    ax.yaxis.pane.set_edgecolor('none')
    ax.zaxis.pane.set_edgecolor('none')
    ax.set_xticks([])
    ax.set_yticks([])
    ax.set_zticks([])

    save_svg(fig, 'fp3_vectors_cross_product.svg', tight=False)


# ============================================================
# Main
# ============================================================
if __name__ == '__main__':
    setup_style()
    print("Phase 1: Generating 5 critical SVG fixes...")
    generate_game_tree()
    generate_polar_coordinates()
    generate_hyperbolic_graphs()
    generate_maclaurin_approximation()
    generate_cross_product_3d()
    print("Phase 1 complete!")
