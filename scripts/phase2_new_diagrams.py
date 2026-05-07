"""Phase 2: Generate 12 new high-value SVGs.

Generates:
FP2: complex-argand, complex-locus-circle, ode-solution-curves
FP3: parabola-focus-directrix, eccentricity-comparison, arc-length
M2: projectile-motion, ladder-equilibrium, energy-track, collision-1d
S2: discrete-to-continuous, skewed-distributions
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyArrowPatch, Arc, Circle, FancyBboxPatch, Polygon
from matplotlib.lines import Line2D
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from utils import COLORS, setup_style, save_svg


# ============================================================
# FP2: Argand Diagram with Modulus/Argument
# ============================================================
def generate_complex_argand():
    """Argand diagram showing z = 2e^{iπ/3} with modulus and argument.

    From complex_numbers.tex lines 94-106.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 5))

    # z = 2e^{iπ/3} = 2(cos60° + i sin60°) = (1, √3)
    re_z = 1.0
    im_z = np.sqrt(3)

    # Draw axes
    ax.axhline(y=0, color='black', linewidth=1)
    ax.axvline(x=0, color='black', linewidth=1)

    # Draw vector from origin to z
    ax.annotate('', xy=(re_z, im_z), xytext=(0, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['primary'], lw=2.5))

    # Draw dashed line to real axis (projection)
    ax.plot([re_z, re_z], [0, im_z], '--', color='#999', linewidth=1)

    # Draw angle arc
    arc = Arc((0, 0), 0.8, 0.8, angle=0, theta1=0, theta2=60,
              color=COLORS['secondary'], linewidth=2)
    ax.add_patch(arc)

    # Point z
    ax.plot(re_z, im_z, 'o', color=COLORS['primary'], markersize=8, zorder=5)

    # Labels
    ax.text(re_z + 0.1, im_z + 0.15, r'$z = 2e^{i\pi/3}$',
            fontsize=14, fontweight='bold', color=COLORS['primary'])
    ax.text(re_z/2 - 0.15, im_z/2 + 0.15, r'$|z|=2$',
            fontsize=13, color=COLORS['primary'], fontstyle='italic')
    ax.text(0.55, 0.2, r'$\theta = \frac{\pi}{3}$',
            fontsize=13, color=COLORS['secondary'])
    ax.text(re_z, -0.25, r'$1$', fontsize=11, ha='center', color=COLORS['light'])
    ax.text(-0.3, im_z, r'$\sqrt{3}$', fontsize=11, ha='right', color=COLORS['light'])

    # Axis labels
    ax.text(2.3, -0.2, r'$\mathrm{Re}$', fontsize=13, fontstyle='italic')
    ax.text(-0.3, 2.3, r'$\mathrm{Im}$', fontsize=13, fontstyle='italic')

    # Arrowheads
    ax.annotate('', xy=(2.5, 0), xytext=(2.3, 0),
                arrowprops=dict(arrowstyle='->', color='black', lw=1.2))
    ax.annotate('', xy=(0, 2.5), xytext=(0, 2.3),
                arrowprops=dict(arrowstyle='->', color='black', lw=1.2))

    ax.set_xlim(-0.5, 2.8)
    ax.set_ylim(-0.5, 2.8)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp2-complex-argand.svg')


# ============================================================
# FP2: Complex Locus - Circle
# ============================================================
def generate_complex_locus_circle():
    """Argand diagram showing locus |z - z_0| = r as a circle.

    From complex_loci.tex lines 82-101.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 5))

    # Circle parameters
    cx, cy = 1.0, 1.0  # center z_0
    r = 1.5

    # Draw axes
    ax.axhline(y=0, color='black', linewidth=1)
    ax.axvline(x=0, color='black', linewidth=1)

    # Draw circle
    theta = np.linspace(0, 2*np.pi, 200)
    circle_x = cx + r * np.cos(theta)
    circle_y = cy + r * np.sin(theta)
    ax.plot(circle_x, circle_y, color=COLORS['primary'], linewidth=2)

    # Center point
    ax.plot(cx, cy, 'o', color=COLORS['secondary'], markersize=7, zorder=5)
    ax.text(cx + 0.1, cy + 0.15, r'$z_0$', fontsize=13, color=COLORS['secondary'],
            fontweight='bold')

    # Sample point on circle (at angle 45° from center)
    sample_angle = np.pi / 4
    zx = cx + r * np.cos(sample_angle)
    zy = cy + r * np.sin(sample_angle)

    # Draw radius line from center to sample point
    ax.plot([cx, zx], [cy, zy], '--', color=COLORS['secondary'], linewidth=1.5)

    # Sample point
    ax.plot(zx, zy, 'o', color=COLORS['tertiary'], markersize=7, zorder=5)
    ax.text(zx + 0.1, zy + 0.1, r'$z$', fontsize=13, color=COLORS['tertiary'],
            fontweight='bold')

    # Radius label
    ax.text((cx + zx)/2 + 0.15, (cy + zy)/2, r'$r$',
            fontsize=13, color=COLORS['secondary'], fontstyle='italic')

    # Axis labels
    ax.text(3.2, -0.2, r'$\mathrm{Re}$', fontsize=13, fontstyle='italic')
    ax.text(-0.3, 3.2, r'$\mathrm{Im}$', fontsize=13, fontstyle='italic')

    ax.set_xlim(-1, 3.5)
    ax.set_ylim(-1, 3.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp2-complex-locus-circle.svg')


# ============================================================
# FP2: ODE Solution Curves
# ============================================================
def generate_ode_solution_curves():
    """Solution curve y = x² + 4/x² for first-order ODE.

    From first order ODE - solution.tex lines 989-997.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    # y = x² + 4/x², two branches (x<0 and x>0)
    x_left = np.linspace(-3, -0.3, 200)
    x_right = np.linspace(0.3, 3, 200)

    y_left = x_left**2 + 4 / x_left**2
    y_right = x_right**2 + 4 / x_right**2

    ax.plot(x_left, y_left, color=COLORS['primary'], linewidth=2)
    ax.plot(x_right, y_right, color=COLORS['primary'], linewidth=2)

    # Minimum points at (±√2, 4)
    sqrt2 = np.sqrt(2)
    ax.plot([-sqrt2, sqrt2], [4, 4], 'o', color=COLORS['secondary'], markersize=7, zorder=5)

    # Dashed horizontal line at y=4
    ax.axhline(y=4, color='#999', linestyle='--', linewidth=1)

    # Labels for minimum points
    ax.text(-sqrt2, 4.5, r'$(-\sqrt{2}, 4)$', fontsize=10, ha='center',
            color=COLORS['secondary'])
    ax.text(sqrt2, 4.5, r'$(\sqrt{2}, 4)$', fontsize=10, ha='center',
            color=COLORS['secondary'])

    # Axes
    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    ax.set_xlim(-3.5, 3.5)
    ax.set_ylim(-1, 15)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp2-ode-solution-curves.svg')


# ============================================================
# FP3: Parabola with Focus and Directrix
# ============================================================
def generate_parabola_focus_directrix():
    """Parabola y² = 4x with focus F and directrix.

    From conic_sections.tex lines 321-342.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    # Parabola y² = 4x => x = y²/4
    y = np.linspace(-3, 3, 200)
    x = y**2 / 4

    ax.plot(x, y, color=COLORS['primary'], linewidth=2)

    # Focus F at (1, 0)
    ax.plot(1, 0, 'o', color=COLORS['secondary'], markersize=7, zorder=5)
    ax.text(1, 0.3, r'$F(1,0)$', fontsize=12, color=COLORS['secondary'], fontweight='bold')

    # Directrix x = -1 (dashed vertical line)
    ax.axvline(x=-1, color='#999', linestyle='--', linewidth=1.5)
    ax.text(-1.3, 2.5, 'directrix', fontsize=11, color='#666', rotation=90, va='center')

    # Sample point P on parabola (at y=2, x=1)
    px, py = 1.0, 2.0
    ax.plot(px, py, 'o', color=COLORS['tertiary'], markersize=7, zorder=5)
    ax.text(px + 0.15, py + 0.15, r'$P$', fontsize=13, color=COLORS['tertiary'],
            fontweight='bold')

    # Line from P to F
    ax.plot([px, 1], [py, 0], '-', color=COLORS['secondary'], linewidth=1.5)

    # Line from P to directrix (horizontal)
    ax.plot([px, -1], [py, py], '-', color=COLORS['secondary'], linewidth=1.5)
    # Perpendicular tick at directrix
    ax.plot([-1, -1], [py - 0.2, py + 0.2], '-', color=COLORS['secondary'], linewidth=2)

    # Axes
    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    ax.set_xlim(-2, 3)
    ax.set_ylim(-3.5, 3.5)
    ax.set_aspect('equal')
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp3-parabola-focus-directrix.svg')


# ============================================================
# FP3: Eccentricity Comparison (4 conics)
# ============================================================
def generate_eccentricity_comparison():
    """Four conics side by side showing eccentricity progression.

    From conic_sections.tex lines 350-386.
    """
    setup_style()
    fig, axes = plt.subplots(1, 4, figsize=(10, 2.5))

    configs = [
        ('Circle', r'$e = 0$', 'circle'),
        ('Ellipse', r'$0 < e < 1$', 'ellipse'),
        ('Parabola', r'$e = 1$', 'parabola'),
        ('Hyperbola', r'$e > 1$', 'hyperbola'),
    ]

    for ax, (name, label, shape) in zip(axes, configs):
        ax.set_xlim(-2, 2)
        ax.set_ylim(-2, 2)
        ax.set_aspect('equal')
        ax.axhline(y=0, color='black', linewidth=0.5)
        ax.axvline(x=0, color='black', linewidth=0.5)
        ax.grid(True, alpha=0.2)
        ax.set_title(f'{name}\n{label}', fontsize=11, fontweight='bold', pad=8)

        if shape == 'circle':
            theta = np.linspace(0, 2*np.pi, 200)
            ax.plot(np.cos(theta), np.sin(theta), color=COLORS['primary'], linewidth=2)

        elif shape == 'ellipse':
            a, b = 1.5, 1.0
            theta = np.linspace(0, 2*np.pi, 200)
            ax.plot(a*np.cos(theta), b*np.sin(theta), color=COLORS['primary'], linewidth=2)
            c = np.sqrt(a**2 - b**2)
            ax.plot(c, 0, 'o', color=COLORS['secondary'], markersize=5)
            ax.plot(-c, 0, 'o', color=COLORS['secondary'], markersize=5)

        elif shape == 'parabola':
            y = np.linspace(-1.8, 1.8, 200)
            x = y**2 / 2
            ax.plot(x, y, color=COLORS['primary'], linewidth=2)
            ax.plot(0.5, 0, 'o', color=COLORS['secondary'], markersize=5)
            ax.axvline(x=-0.5, color='#999', linestyle='--', linewidth=1)

        elif shape == 'hyperbola':
            a, b = 0.8, 1.0
            t = np.linspace(-2, 2, 200)
            # Right branch
            ax.plot(a*np.cosh(t), b*np.sinh(t), color=COLORS['primary'], linewidth=2)
            # Left branch
            ax.plot(-a*np.cosh(t), b*np.sinh(t), color=COLORS['primary'], linewidth=2)
            # Asymptotes
            ax.plot([-2, 2], [-2*b/a, 2*b/a], '--', color='#999', linewidth=0.8)
            ax.plot([-2, 2], [2*b/a, -2*b/a], '--', color='#999', linewidth=0.8)
            c = np.sqrt(a**2 + b**2)
            ax.plot(c, 0, 'o', color=COLORS['secondary'], markersize=5)
            ax.plot(-c, 0, 'o', color=COLORS['secondary'], markersize=5)

        ax.set_xticks([])
        ax.set_yticks([])

    plt.tight_layout()
    save_svg(fig, 'fp3-eccentricity-comparison.svg')


# ============================================================
# FP3: Arc Length Diagram
# ============================================================
def generate_arc_length():
    """Arc length element ds on a curve y = 0.5x².

    From integration.tex lines 819-837.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    x = np.linspace(0, 2.5, 200)
    y = 0.5 * x**2

    ax.plot(x, y, color=COLORS['primary'], linewidth=2)

    # Highlight a small segment around x=1.5
    x0, x1 = 1.3, 1.6
    y0, y1 = 0.5*x0**2, 0.5*x1**2

    # Draw the segment in red
    x_seg = np.linspace(x0, x1, 30)
    y_seg = 0.5 * x_seg**2
    ax.plot(x_seg, y_seg, color=COLORS['secondary'], linewidth=3)

    # Draw dx (horizontal)
    ax.annotate('', xy=(x1, y0), xytext=(x0, y0),
                arrowprops=dict(arrowstyle='<->', color=COLORS['tertiary'], lw=1.5))
    ax.text((x0+x1)/2, y0 - 0.12, r'$dx$', fontsize=12, ha='center',
            color=COLORS['tertiary'], fontstyle='italic')

    # Draw dy (vertical)
    ax.annotate('', xy=(x1, y1), xytext=(x1, y0),
                arrowprops=dict(arrowstyle='<->', color=COLORS['accent'], lw=1.5))
    ax.text(x1 + 0.1, (y0+y1)/2, r'$dy$', fontsize=12, ha='left',
            color=COLORS['accent'], fontstyle='italic')

    # Draw ds (hypotenuse)
    ax.annotate('', xy=(x1, y1), xytext=(x0, y0),
                arrowprops=dict(arrowstyle='<->', color=COLORS['secondary'], lw=1.5,
                               linestyle='dashed'))
    ax.text((x0+x1)/2 - 0.15, (y0+y1)/2 + 0.1, r'$ds$',
            fontsize=12, color=COLORS['secondary'], fontstyle='italic')

    # Axes
    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    ax.set_xlim(-0.3, 3)
    ax.set_ylim(-0.3, 3.5)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp3-arc-length.svg')


# ============================================================
# M2: Projectile Motion
# ============================================================
def generate_projectile_motion():
    """Projectile motion trajectory with velocity decomposition.

    From m2_kinematics_detailed.tex lines 100-124.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(6, 3.5))

    # Trajectory: parabolic path
    g = 9.8
    v0 = 20  # m/s
    theta = np.radians(45)
    v0x = v0 * np.cos(theta)
    v0y = v0 * np.sin(theta)

    t_max = 2 * v0y / g
    t = np.linspace(0, t_max, 200)
    x = v0x * t
    y = v0y * t - 0.5 * g * t**2

    ax.plot(x, y, color=COLORS['primary'], linewidth=2)

    # Launch point
    ax.plot(0, 0, 'o', color='black', markersize=6, zorder=5)

    # Initial velocity vector v0
    arrow_len = 8
    ax.annotate('', xy=(arrow_len*np.cos(theta), arrow_len*np.sin(theta)), xytext=(0, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=2.5))

    # v0x component
    ax.annotate('', xy=(arrow_len*np.cos(theta), 0), xytext=(0, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['tertiary'], lw=1.5))

    # v0y component
    ax.annotate('', xy=(arrow_len*np.cos(theta), arrow_len*np.sin(theta)),
                xytext=(arrow_len*np.cos(theta), 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['accent'], lw=1.5))

    # Labels
    ax.text(arrow_len*np.cos(theta)/2 + 0.5, arrow_len*np.sin(theta)/2 + 0.8,
            r'$\mathbf{v}_0$', fontsize=14, color=COLORS['secondary'], fontweight='bold')
    ax.text(arrow_len*np.cos(theta)/2, -1, r'$v_{0x}$',
            fontsize=12, color=COLORS['tertiary'], fontweight='bold')
    ax.text(arrow_len*np.cos(theta) + 0.5, arrow_len*np.sin(theta)/2,
            r'$v_{0y}$', fontsize=12, color=COLORS['accent'], fontweight='bold')

    # Gravity vector at midpoint
    mid_t = t_max / 2
    mid_x = v0x * mid_t
    mid_y = v0y * mid_t - 0.5 * g * mid_t**2
    ax.annotate('', xy=(mid_x, mid_y - 4), xytext=(mid_x, mid_y),
                arrowprops=dict(arrowstyle='->', color='black', lw=2))
    ax.text(mid_x + 0.5, mid_y - 2, r'$\mathbf{g}$',
            fontsize=13, fontweight='bold')

    # Axes
    ax.axhline(y=0, color='black', linewidth=1)
    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    ax.set_xlim(-1, 50)
    ax.set_ylim(-2, 12)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'm2-projectile-motion.svg')


# ============================================================
# M2: Ladder Against Wall
# ============================================================
def generate_ladder_equilibrium():
    """Ladder leaning against wall with force arrows.

    From m2_statics_detailed.tex lines 673-695.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(4, 5))

    # Wall and ground
    ax.plot([0, 0], [0, 5], color='black', linewidth=2)  # wall
    ax.plot([0, 4], [0, 0], color='black', linewidth=2)  # ground

    # Hatching for ground
    for xi in np.linspace(0.2, 3.8, 10):
        ax.plot([xi, xi - 0.3], [0, -0.3], color='black', linewidth=0.8)

    # Ladder from A(bottom) to B(top)
    theta = np.radians(60)
    L = 4.0
    Ax, Ay = 2.0, 0  # bottom of ladder
    Bx, By = 0, L * np.sin(theta)  # top of ladder
    # Actually let's place it properly
    Ax = L * np.cos(theta)
    Ay = 0
    Bx = 0
    By = L * np.sin(theta)

    ax.plot([Ax, Bx], [Ay, By], color=COLORS['primary'], linewidth=3, solid_capstyle='round')

    # Points A and B
    ax.plot(Ax, Ay, 'o', color='black', markersize=6, zorder=5)
    ax.text(Ax + 0.15, -0.4, 'A', fontsize=12, fontweight='bold')
    ax.plot(Bx, By, 'o', color='black', markersize=6, zorder=5)
    ax.text(-0.4, By + 0.15, 'B', fontsize=12, fontweight='bold')

    # Angle theta at A
    arc = Arc((Ax, Ay), 0.8, 0.8, angle=0, theta1=180 - np.degrees(theta), theta2=180,
              color=COLORS['secondary'], linewidth=1.5)
    ax.add_patch(arc)
    ax.text(Ax - 0.6, 0.2, r'$\theta$', fontsize=12, color=COLORS['secondary'])

    # Weight W at center of ladder (downward)
    cx = (Ax + Bx) / 2
    cy = (Ay + By) / 2
    ax.annotate('', xy=(cx, cy - 1.2), xytext=(cx, cy),
                arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=2))
    ax.text(cx + 0.15, cy - 0.6, r'$W$', fontsize=13, color=COLORS['secondary'],
            fontweight='bold')

    # Normal force at B (horizontal, away from wall)
    ax.annotate('', xy=(Bx + 1, By), xytext=(Bx, By),
                arrowprops=dict(arrowstyle='->', color=COLORS['tertiary'], lw=2))
    ax.text(Bx + 0.5, By + 0.2, r'$N_w$', fontsize=12, color=COLORS['tertiary'],
            fontweight='bold')

    # Normal force at A (vertical, upward)
    ax.annotate('', xy=(Ax, 1.2), xytext=(Ax, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['primary'], lw=2))
    ax.text(Ax + 0.15, 0.6, r'$N_g$', fontsize=12, color=COLORS['primary'],
            fontweight='bold')

    # Friction at A (horizontal, toward wall)
    ax.annotate('', xy=(Ax - 1, 0), xytext=(Ax, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['accent'], lw=2))
    ax.text(Ax - 0.5, -0.3, r'$f$', fontsize=12, color=COLORS['accent'],
            fontweight='bold')

    ax.set_xlim(-0.5, 3.5)
    ax.set_ylim(-0.8, 4.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'm2-ladder-equilibrium.svg')


# ============================================================
# M2: Energy Track
# ============================================================
def generate_energy_track():
    """Track profile for energy conservation problem.

    From m2_work_energy_impulse_collisions.tex lines 259-292.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(6, 3.5))

    # Track: A(top) -> B(bottom) -> C(rough horizontal) -> D(smooth incline)
    # Heights: A at 4m, B at 0, C at 0, D rises from 0
    h1 = 4.0
    d_bc = 6.0
    alpha = 30  # degrees

    # A to B: curved descent
    x_AB = np.linspace(0, 2, 50)
    y_AB = h1 * (1 - (x_AB/2)**1.5)  # smooth curve down

    # B to C: horizontal rough section
    x_BC = np.linspace(2, 2 + d_bc, 50)
    y_BC = np.zeros_like(x_BC)

    # C to D: smooth incline
    x_CD = np.linspace(2 + d_bc, 2 + d_bc + 3, 50)
    y_CD = (x_CD - (2 + d_bc)) * np.tan(np.radians(alpha))

    # Draw track
    ax.plot(x_AB, y_AB, color=COLORS['primary'], linewidth=2.5)
    ax.plot(x_BC, y_BC, color=COLORS['primary'], linewidth=2.5)
    ax.plot(x_CD, y_CD, color=COLORS['primary'], linewidth=2.5)

    # Friction marks on BC section
    for xi in np.linspace(2.3, 7.7, 8):
        ax.plot([xi, xi - 0.2], [-0.15, -0.35], color='black', linewidth=0.8)

    # Points
    points = {'A': (0, h1), 'B': (2, 0), 'C': (2 + d_bc, 0), 'D': (2 + d_bc + 2.5, 2.5*np.tan(np.radians(alpha)))}
    for name, (px, py) in points.items():
        ax.plot(px, py, 'o', color='black', markersize=6, zorder=5)
        ax.text(px, py + 0.3, name, fontsize=12, fontweight='bold', ha='center')

    # Height annotation for A
    ax.annotate('', xy=(0, 0), xytext=(0, h1),
                arrowprops=dict(arrowstyle='<->', color=COLORS['secondary'], lw=1.5))
    ax.text(-0.5, h1/2, r'$h_1 = 4$ m', fontsize=11, ha='center',
            color=COLORS['secondary'], rotation=90, va='center')

    # Distance annotation for BC
    ax.annotate('', xy=(2, -0.7), xytext=(2 + d_bc, -0.7),
                arrowprops=dict(arrowstyle='<->', color=COLORS['light'], lw=1.5))
    ax.text(5, -1.0, r'$d = 6$ m (rough)', fontsize=10, ha='center', color=COLORS['light'])

    # Angle annotation at C
    arc_x = 2 + d_bc + 1.5 * np.cos(np.radians(alpha))
    arc_y = 1.5 * np.sin(np.radians(alpha))
    ax.annotate(r'$\alpha = 30°$', xy=(8.5, 1.0), fontsize=11, color=COLORS['secondary'])

    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)

    ax.set_xlim(-1, 13)
    ax.set_ylim(-1.5, 5)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'm2-energy-track.svg')


# ============================================================
# M2: 1D Collision
# ============================================================
def generate_collision_1d():
    """Two masses before collision on a line.

    From m2_work_energy_impulse_collisions.tex lines 463-470.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(6, 2))

    # Masses
    m1_x, m2_x = 1.5, 5.0
    r = 0.4

    # Draw line of centers
    ax.axhline(y=0, color='black', linewidth=1.5)

    # Mass 1
    c1 = Circle((m1_x, 0), r, facecolor=COLORS['fill_primary'],
                edgecolor=COLORS['primary'], linewidth=2, zorder=5)
    ax.add_patch(c1)
    ax.text(m1_x, 0, r'$m_1$', ha='center', va='center', fontsize=12, fontweight='bold',
            color=COLORS['primary'])

    # Mass 2
    c2 = Circle((m2_x, 0), r, facecolor=COLORS['fill_secondary'],
                edgecolor=COLORS['secondary'], linewidth=2, zorder=5)
    ax.add_patch(c2)
    ax.text(m2_x, 0, r'$m_2$', ha='center', va='center', fontsize=12, fontweight='bold',
            color=COLORS['secondary'])

    # Velocity arrows (before collision)
    ax.annotate('', xy=(m1_x + 1.2, 0), xytext=(m1_x + r, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['primary'], lw=2.5))
    ax.text(m1_x + 0.6, 0.5, r'$u_1$', fontsize=13, color=COLORS['primary'],
            fontweight='bold', ha='center')

    ax.annotate('', xy=(m2_x - 1.2, 0), xytext=(m2_x - r, 0),
                arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=2.5))
    ax.text(m2_x - 0.6, 0.5, r'$u_2$', fontsize=13, color=COLORS['secondary'],
            fontweight='bold', ha='center')

    ax.set_xlim(-0.5, 7)
    ax.set_ylim(-1.2, 1.2)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'm2-collision-1d.svg')


# ============================================================
# S2: Discrete to Continuous Transition
# ============================================================
def generate_discrete_to_continuous():
    """Three plots showing discrete → continuous distribution evolution.

    From continuous.tex lines 57-97.
    """
    setup_style()
    fig, axes = plt.subplots(1, 3, figsize=(10, 3))

    # Plot 1: Few wide bars
    ax1 = axes[0]
    heights1 = [0.1, 0.3, 0.35, 0.2, 0.05]
    ax1.bar(range(1, 6), heights1, width=0.8, color=COLORS['primary'], alpha=0.7,
            edgecolor=COLORS['primary'], linewidth=1.5)
    ax1.set_title('Few categories', fontsize=11, fontweight='bold')
    ax1.set_xlabel(r'$x$', fontsize=11)
    ax1.set_ylabel(r'$P(X=x)$', fontsize=11)
    ax1.set_ylim(0, 0.45)
    ax1.grid(True, alpha=0.3)

    # Plot 2: Many narrow bars
    ax2 = axes[1]
    n2 = 12
    x2 = np.arange(1, n2+1)
    # Simulate a distribution peaking around 6
    p2 = np.exp(-0.5 * ((x2 - 6.5) / 2)**2)
    p2 = p2 / p2.sum()
    ax2.bar(x2, p2, width=0.8, color=COLORS['tertiary'], alpha=0.7,
            edgecolor=COLORS['tertiary'], linewidth=1)
    ax2.set_title('Many categories', fontsize=11, fontweight='bold')
    ax2.set_xlabel(r'$x$', fontsize=11)
    ax2.set_ylabel(r'$P(X=x)$', fontsize=11)
    ax2.set_ylim(0, 0.2)
    ax2.grid(True, alpha=0.3)

    # Plot 3: Continuous bell curve
    ax3 = axes[2]
    x3 = np.linspace(0, 10, 300)
    mu, sigma = 5, 1.5
    y3 = (1 / (sigma * np.sqrt(2*np.pi))) * np.exp(-0.5 * ((x3 - mu) / sigma)**2)
    ax3.plot(x3, y3, color=COLORS['secondary'], linewidth=2)

    # Shade area between a and b
    a, b = 3.5, 6.5
    mask = (x3 >= a) & (x3 <= b)
    ax3.fill_between(x3[mask], y3[mask], alpha=0.3, color=COLORS['secondary'])

    # Label
    mid = (a + b) / 2
    ax3.text(mid, 0.05, r'$P(a < X < b)$', fontsize=11, ha='center',
            color=COLORS['secondary'], fontweight='bold')

    ax3.set_title('Continuous', fontsize=11, fontweight='bold')
    ax3.set_xlabel(r'$x$', fontsize=11)
    ax3.set_ylabel(r'$f(x)$', fontsize=11)
    ax3.set_ylim(0, 0.35)
    ax3.grid(True, alpha=0.3)

    plt.tight_layout()
    save_svg(fig, 's2-discrete-to-continuous.svg')


# ============================================================
# S2: Skewed Distributions
# ============================================================
def generate_skewed_distributions():
    """Three density curves: right-skewed, symmetric, left-skewed.

    From continuous.tex lines 426-450.
    """
    setup_style()
    fig, axes = plt.subplots(1, 3, figsize=(10, 3))

    x = np.linspace(-4, 8, 300)

    # Right-skewed (Gamma-like, k=2, θ=1.5)
    ax1 = axes[0]
    y_right = np.where(x > 0, x * np.exp(-x / 1.5) / 2.25, 0)
    ax1.plot(x, y_right, color=COLORS['secondary'], linewidth=2)
    ax1.fill_between(x, y_right, alpha=0.2, color=COLORS['secondary'])
    # Mean, median, mode markers
    mode_r = 1.5  # approximate
    median_r = 2.5
    mean_r = 3.0
    ax1.axvline(mode_r, color=COLORS['primary'], linestyle='--', linewidth=1.5, label='Mode')
    ax1.axvline(median_r, color=COLORS['tertiary'], linestyle='-.', linewidth=1.5, label='Median')
    ax1.axvline(mean_r, color=COLORS['secondary'], linestyle=':', linewidth=1.5, label='Mean')
    ax1.set_title('Right-skewed', fontsize=11, fontweight='bold')
    ax1.legend(fontsize=8, loc='upper right')
    ax1.set_ylim(0, 0.4)
    ax1.grid(True, alpha=0.3)

    # Symmetric (Normal)
    ax2 = axes[1]
    y_sym = (1 / np.sqrt(2*np.pi)) * np.exp(-0.5 * x**2)
    # Shift to center at 3
    x_shifted = x + 3
    y_sym2 = (1 / np.sqrt(2*np.pi)) * np.exp(-0.5 * ((x_shifted - 3))**2)
    ax2.plot(x_shifted, y_sym2, color=COLORS['primary'], linewidth=2)
    ax2.fill_between(x_shifted, y_sym2, alpha=0.2, color=COLORS['primary'])
    ax2.axvline(3, color=COLORS['secondary'], linestyle='--', linewidth=1.5, label='Mean=Median=Mode')
    ax2.set_title('Symmetric', fontsize=11, fontweight='bold')
    ax2.legend(fontsize=8, loc='upper right')
    ax2.set_ylim(0, 0.45)
    ax2.grid(True, alpha=0.3)

    # Left-skewed (mirror of right-skewed, k=2, θ=1.5)
    ax3 = axes[2]
    x_mirrored = -x + 8
    y_left = np.where(x_mirrored > 0, x_mirrored * np.exp(-x_mirrored / 1.5) / 2.25, 0)
    ax3.plot(x, y_left, color=COLORS['tertiary'], linewidth=2)
    ax3.fill_between(x, y_left, alpha=0.2, color=COLORS['tertiary'])
    mode_l = 6.5
    median_l = 5.5
    mean_l = 5.0
    ax3.axvline(mode_l, color=COLORS['primary'], linestyle='--', linewidth=1.5, label='Mode')
    ax3.axvline(median_l, color=COLORS['tertiary'], linestyle='-.', linewidth=1.5, label='Median')
    ax3.axvline(mean_l, color=COLORS['secondary'], linestyle=':', linewidth=1.5, label='Mean')
    ax3.set_title('Left-skewed', fontsize=11, fontweight='bold')
    ax3.legend(fontsize=8, loc='upper left')
    ax3.set_ylim(0, 0.4)
    ax3.grid(True, alpha=0.3)

    plt.tight_layout()
    save_svg(fig, 's2-skewed-distributions.svg')


# ============================================================
# Main
# ============================================================
if __name__ == '__main__':
    setup_style()
    print("Phase 2: Generating 12 new high-value SVGs...")

    # FP2
    generate_complex_argand()
    generate_complex_locus_circle()
    generate_ode_solution_curves()

    # FP3
    generate_parabola_focus_directrix()
    generate_eccentricity_comparison()
    generate_arc_length()

    # M2
    generate_projectile_motion()
    generate_ladder_equilibrium()
    generate_energy_track()
    generate_collision_1d()

    # S2
    generate_discrete_to_continuous()
    generate_skewed_distributions()

    print("Phase 2 complete!")
