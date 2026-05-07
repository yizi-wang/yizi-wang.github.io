"""Phase 3: Generate 19 remaining SVGs for completeness.

Generates:
FP2: complex-multiplication, complex-locus-halfline, complex-locus-inequality, complex-transformation
FP3: conic-ellipse-orbit, conic-hyperbola-comet, integration-gabriel-horn, differentiation-secant-tangent, inverse-hyperbolic-arcLength
M2: center-of-mass-rod, center-of-mass-shapes, stability-diagram, l-shape-composite, washer-hole, triangle-strips
S2: uniform-pdf-cdf, buffon-needle, binomial-normal-overlay, poisson-normal-overlay
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyArrowPatch, Arc, Circle, Rectangle, Polygon, Wedge
from matplotlib.lines import Line2D
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from utils import COLORS, setup_style, save_svg


# ============================================================
# FP2: Complex Multiplication (Rotation + Scaling)
# ============================================================
def generate_complex_multiplication():
    """Two Argand diagrams showing multiplication by a complex number.

    From complex_loci.tex lines 512-558.
    """
    setup_style()
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8, 4))

    for ax in (ax1, ax2):
        ax.axhline(y=0, color='black', linewidth=0.8)
        ax.axvline(x=0, color='black', linewidth=0.8)
        ax.set_xlim(-3, 3)
        ax.set_ylim(-3, 3)
        ax.set_aspect('equal')
        ax.grid(True, alpha=0.2)

    # Original vectors
    z1 = 1 + 1j
    z2 = -1 + 2j

    ax1.annotate('', xy=(z1.real, z1.imag), xytext=(0, 0),
                 arrowprops=dict(arrowstyle='->', color=COLORS['primary'], lw=2))
    ax1.annotate('', xy=(z2.real, z2.imag), xytext=(0, 0),
                 arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=2))
    ax1.text(z1.real + 0.15, z1.imag + 0.15, r'$z_1$', fontsize=12, color=COLORS['primary'])
    ax1.text(z2.real - 0.4, z2.imag + 0.15, r'$z_2$', fontsize=12, color=COLORS['secondary'])
    ax1.set_title('Original', fontsize=12, fontweight='bold')

    # After multiplication by w = 2e^{iπ/6}
    w = 2 * np.exp(1j * np.pi / 6)
    wz1 = w * z1
    wz2 = w * z2

    ax2.annotate('', xy=(wz1.real, wz1.imag), xytext=(0, 0),
                 arrowprops=dict(arrowstyle='->', color=COLORS['primary'], lw=2))
    ax2.annotate('', xy=(wz2.real, wz2.imag), xytext=(0, 0),
                 arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=2))
    ax2.text(wz1.real + 0.15, wz1.imag + 0.15, r'$wz_1$', fontsize=12, color=COLORS['primary'])
    ax2.text(wz2.real + 0.15, wz2.imag + 0.15, r'$wz_2$', fontsize=12, color=COLORS['secondary'])
    ax2.set_title(r'After $\times w = 2e^{i\pi/6}$', fontsize=12, fontweight='bold')

    plt.tight_layout()
    save_svg(fig, 'fp2-complex-multiplication.svg')


# ============================================================
# FP2: Complex Locus Half-line
# ============================================================
def generate_complex_locus_halfline():
    """Argand diagram showing arg(z - z₀) = θ as a half-line.

    From complex_loci.tex lines 670-748.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 5))

    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    # z₀ at (1, 1)
    z0 = (1, 1)
    ax.plot(*z0, 'o', color=COLORS['secondary'], markersize=7, zorder=5)
    ax.text(z0[0] + 0.15, z0[1] + 0.15, r'$z_0$', fontsize=13, color=COLORS['secondary'])

    # Half-line at angle θ = π/4
    theta = np.pi / 4
    t = np.linspace(0, 3, 100)
    x = z0[0] + t * np.cos(theta)
    y = z0[1] + t * np.sin(theta)
    ax.plot(x, y, color=COLORS['primary'], linewidth=2)

    # Angle arc
    arc = Arc(z0, 0.8, 0.8, angle=0, theta1=0, theta2=45,
              color=COLORS['tertiary'], linewidth=1.5)
    ax.add_patch(arc)
    ax.text(z0[0] + 0.6, z0[1] + 0.25, r'$\theta$', fontsize=12, color=COLORS['tertiary'])

    # Sample point on half-line
    sp = (z0[0] + 2*np.cos(theta), z0[1] + 2*np.sin(theta))
    ax.plot(*sp, 'o', color=COLORS['primary'], markersize=6, zorder=5)
    ax.text(sp[0] + 0.1, sp[1] + 0.1, r'$z$', fontsize=12, color=COLORS['primary'])

    # Label
    ax.text(0.5, 3.5, r'$\arg(z - z_0) = \theta$', fontsize=14, fontweight='bold',
            color=COLORS['primary'])

    ax.set_xlim(-0.5, 4.5)
    ax.set_ylim(-0.5, 4.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp2-complex-locus-halfline.svg')


# ============================================================
# FP2: Complex Locus Inequality
# ============================================================
def generate_complex_locus_inequality():
    """Argand diagram showing |z - z₀| < r as shaded interior.

    From complex_loci.tex lines 837-865.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 5))

    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    cx, cy, r = 1, 1, 1.5

    # Shaded interior
    theta = np.linspace(0, 2*np.pi, 200)
    circle_x = cx + r * np.cos(theta)
    circle_y = cy + r * np.sin(theta)
    ax.fill(circle_x, circle_y, alpha=0.2, color=COLORS['primary'])
    ax.plot(circle_x, circle_y, color=COLORS['primary'], linewidth=2, linestyle='--')

    # Center
    ax.plot(cx, cy, 'o', color=COLORS['secondary'], markersize=7, zorder=5)
    ax.text(cx + 0.1, cy + 0.15, r'$z_0$', fontsize=13, color=COLORS['secondary'])

    # Label
    ax.text(cx, cy - r - 0.3, r'$|z - z_0| < r$', fontsize=14, ha='center',
            fontweight='bold', color=COLORS['primary'])

    ax.set_xlim(-1, 3.5)
    ax.set_ylim(-1, 3.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp2-complex-locus-inequality.svg')


# ============================================================
# FP2: Complex Transformation (z-plane → w-plane)
# ============================================================
def generate_complex_transformation():
    """Two planes showing w = z² transformation.

    From complex_loci.tex lines 968-1030.
    """
    setup_style()
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8, 4))

    # z-plane: unit circle
    theta = np.linspace(0, 2*np.pi, 200)
    z_circle = np.exp(1j * theta)

    ax1.plot(z_circle.real, z_circle.imag, color=COLORS['primary'], linewidth=2)
    ax1.axhline(y=0, color='black', linewidth=0.8)
    ax1.axvline(x=0, color='black', linewidth=0.8)
    ax1.set_xlim(-1.5, 1.5)
    ax1.set_ylim(-1.5, 1.5)
    ax1.set_aspect('equal')
    ax1.grid(True, alpha=0.2)
    ax1.set_title(r'$z$-plane', fontsize=12, fontweight='bold')
    ax1.set_xlabel(r'$\mathrm{Re}$', fontsize=11)
    ax1.set_ylabel(r'$\mathrm{Im}$', fontsize=11)

    # w-plane: w = z² maps unit circle to unit circle (but traversed twice)
    w_circle = z_circle ** 2
    ax2.plot(w_circle.real, w_circle.imag, color=COLORS['secondary'], linewidth=2)
    ax2.axhline(y=0, color='black', linewidth=0.8)
    ax2.axvline(x=0, color='black', linewidth=0.8)
    ax2.set_xlim(-1.5, 1.5)
    ax2.set_ylim(-1.5, 1.5)
    ax2.set_aspect('equal')
    ax2.grid(True, alpha=0.2)
    ax2.set_title(r'$w$-plane ($w = z^2$)', fontsize=12, fontweight='bold')
    ax2.set_xlabel(r'$\mathrm{Re}$', fontsize=11)
    ax2.set_ylabel(r'$\mathrm{Im}$', fontsize=11)

    plt.tight_layout()
    save_svg(fig, 'fp2-complex-transformation.svg')


# ============================================================
# FP3: Ellipse Orbit
# ============================================================
def generate_ellipse_orbit():
    """Elliptical orbit with Sun at one focus.

    From conic_sections.tex lines 450-457.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    a, b = 2.0, 1.2
    c = np.sqrt(a**2 - b**2)

    theta = np.linspace(0, 2*np.pi, 300)
    ax.plot(a*np.cos(theta), b*np.sin(theta), color=COLORS['primary'], linewidth=2)

    # Sun at focus (c, 0)
    ax.plot(c, 0, 'o', color='#f59e0b', markersize=12, zorder=5, label='Sun')
    ax.text(c + 0.15, 0.2, 'Sun', fontsize=11, fontweight='bold')

    # Empty focus
    ax.plot(-c, 0, 'o', color='#999', markersize=5, zorder=5)

    # Planet position
    planet_theta = np.radians(60)
    px, py = a*np.cos(planet_theta), b*np.sin(planet_theta)
    ax.plot(px, py, 'o', color=COLORS['secondary'], markersize=8, zorder=5, label='Planet')

    ax.set_xlim(-2.5, 2.5)
    ax.set_ylim(-1.5, 1.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp3-conic-ellipse-orbit.svg')


# ============================================================
# FP3: Hyperbolic Comet Trajectory
# ============================================================
def generate_hyperbola_comet():
    """Hyperbolic trajectory of a comet around the Sun.

    From conic_sections.tex lines 548-560.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    a, b = 0.8, 1.5
    c = np.sqrt(a**2 + b**2)

    # Right branch only (comet trajectory)
    t = np.linspace(-1.5, 1.5, 200)
    x = a * np.cosh(t)
    y = b * np.sinh(t)
    ax.plot(x, y, color=COLORS['primary'], linewidth=2)

    # Asymptotes
    ax.plot([0, 4], [0, 4*b/a], '--', color='#999', linewidth=1)
    ax.plot([0, 4], [0, -4*b/a], '--', color='#999', linewidth=1)

    # Sun at focus
    ax.plot(c, 0, 'o', color='#f59e0b', markersize=12, zorder=5)
    ax.text(c + 0.15, 0.2, 'Sun', fontsize=11, fontweight='bold')

    # Comet position
    comet_t = 0.5
    cx_pos = a * np.cosh(comet_t)
    cy_pos = b * np.sinh(comet_t)
    ax.plot(cx_pos, cy_pos, 'o', color=COLORS['secondary'], markersize=8, zorder=5)
    ax.text(cx_pos + 0.1, cy_pos + 0.15, 'Comet', fontsize=11, color=COLORS['secondary'])

    ax.set_xlim(-1, 4)
    ax.set_ylim(-2.5, 2.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp3-conic-hyperbola-comet.svg')


# ============================================================
# FP3: Gabriel's Horn
# ============================================================
def generate_gabriel_horn():
    """Curve y = 1/x with revolution indicator.

    From integration.tex lines 1503-1518.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 3.5))

    x = np.linspace(0.5, 4, 200)
    y = 1 / x

    ax.plot(x, y, color=COLORS['primary'], linewidth=2)
    ax.plot(x, -y, color=COLORS['primary'], linewidth=2)

    # Rotation arrows
    for xi in [1.0, 2.0, 3.0]:
        yi = 1 / xi
        ax.annotate('', xy=(xi, -yi + 0.15), xytext=(xi, yi - 0.15),
                     arrowprops=dict(arrowstyle='->', color=COLORS['secondary'],
                                    lw=1.5, connectionstyle='arc3,rad=0.5'))

    # x-axis
    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    # Label
    ax.text(2, 1.5, r'$y = \frac{1}{x}$', fontsize=14, color=COLORS['primary'])
    ax.text(3.5, -0.5, 'rotation about $x$-axis', fontsize=10, color=COLORS['secondary'])

    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)
    ax.set_xlim(0, 4.5)
    ax.set_ylim(-1.5, 2)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp3-integration-gabriel-horn.svg')


# ============================================================
# FP3: Secant to Tangent
# ============================================================
def generate_secant_tangent():
    """Parabola with secant line and tangent line.

    From differentiation.tex lines 62-65.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 4))

    x = np.linspace(-0.5, 3, 200)
    y = 0.5 * x**2

    ax.plot(x, y, color=COLORS['primary'], linewidth=2)

    # Tangent at x=1.5
    x0 = 1.5
    y0 = 0.5 * x0**2
    slope = x0  # derivative of 0.5x² is x
    x_tan = np.linspace(0, 3, 100)
    y_tan = y0 + slope * (x_tan - x0)
    ax.plot(x_tan, y_tan, '--', color=COLORS['secondary'], linewidth=1.5, label='Tangent')

    # Secant through x=0.5 and x=2.5
    x1, x2 = 0.5, 2.5
    y1, y2 = 0.5*x1**2, 0.5*x2**2
    ax.plot([x1, x2], [y1, y2], '-', color=COLORS['tertiary'], linewidth=1.5, label='Secant')

    # Points
    ax.plot(x0, y0, 'o', color=COLORS['secondary'], markersize=7, zorder=5)
    ax.plot(x1, y1, 'o', color=COLORS['tertiary'], markersize=6, zorder=5)
    ax.plot(x2, y2, 'o', color=COLORS['tertiary'], markersize=6, zorder=5)

    ax.axhline(y=0, color='black', linewidth=0.8)
    ax.axvline(x=0, color='black', linewidth=0.8)

    ax.set_xlabel(r'$x$', fontsize=13, fontstyle='italic')
    ax.set_ylabel(r'$y$', fontsize=13, fontstyle='italic', rotation=0, labelpad=15)
    ax.legend(fontsize=10)
    ax.set_xlim(-0.5, 3.5)
    ax.set_ylim(-0.5, 4)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 'fp3-differentiation-secant-tangent.svg')


# ============================================================
# FP3: Inverse Hyperbolic Arc Length
# ============================================================
def generate_inverse_hyperbolic_arclength():
    """Unit circle with arc showing arcsin geometric meaning.

    From differentiation.tex lines 475+.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(4, 4))

    theta = np.linspace(0, 2*np.pi, 300)
    ax.plot(np.cos(theta), np.sin(theta), color=COLORS['primary'], linewidth=2)

    # Highlight arc from (1,0) to angle
    angle = np.radians(60)
    arc_theta = np.linspace(0, angle, 50)
    ax.plot(np.cos(arc_theta), np.sin(arc_theta), color=COLORS['secondary'], linewidth=3)

    # Radius lines
    ax.plot([0, 1], [0, 0], '-', color='black', linewidth=1)
    ax.plot([0, np.cos(angle)], [0, np.sin(angle)], '-', color='black', linewidth=1)

    # Point on circle
    ax.plot(np.cos(angle), np.sin(angle), 'o', color=COLORS['secondary'], markersize=7, zorder=5)

    # Angle arc
    arc = Arc((0, 0), 0.5, 0.5, angle=0, theta1=0, theta2=60,
              color=COLORS['tertiary'], linewidth=1.5)
    ax.add_patch(arc)
    ax.text(0.35, 0.15, r'$\theta$', fontsize=12, color=COLORS['tertiary'])

    # Arc length label
    ax.text(0.7, 0.45, 'arc', fontsize=11, color=COLORS['secondary'])

    ax.set_xlim(-1.3, 1.3)
    ax.set_ylim(-1.3, 1.3)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'fp3-inverse-hyperbolic-arclength.svg')


# ============================================================
# M2: Center of Mass on a Rod
# ============================================================
def generate_center_of_mass_rod():
    """Rod with two masses and center of mass marked.

    From m2_statics_detailed.tex lines 86-98.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(6, 2))

    # Rod
    ax.plot([0, 5], [0, 0], '-', color=COLORS['primary'], linewidth=4, solid_capstyle='round')

    # Masses
    ax.plot(1, 0, 'o', color=COLORS['secondary'], markersize=15, zorder=5)
    ax.text(1, 0.4, r'$m_1$', fontsize=12, ha='center', fontweight='bold')

    ax.plot(4, 0, 'o', color=COLORS['tertiary'], markersize=20, zorder=5)
    ax.text(4, 0.5, r'$m_2$', fontsize=12, ha='center', fontweight='bold')

    # Center of mass
    com = (1*1 + 2*4) / (1 + 2)  # weighted average
    ax.plot(com, 0, 'D', color='black', markersize=8, zorder=6)
    ax.text(com, -0.5, 'COM', fontsize=11, ha='center', fontweight='bold')

    # Position labels
    ax.text(1, -0.35, r'$x_1$', fontsize=11, ha='center', color=COLORS['light'])
    ax.text(4, -0.4, r'$x_2$', fontsize=11, ha='center', color=COLORS['light'])

    ax.set_xlim(-0.5, 5.5)
    ax.set_ylim(-1, 1)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'm2-center-of-mass-rod.svg')


# ============================================================
# M2: Center of Mass of Shapes
# ============================================================
def generate_center_of_mass_shapes():
    """Three shapes with centers of mass marked.

    From m2_statics_detailed.tex lines 200-219.
    """
    setup_style()
    fig, axes = plt.subplots(1, 3, figsize=(9, 3))

    # Rectangle
    ax = axes[0]
    rect = Rectangle((0.5, 0.3), 2, 1.4, facecolor=COLORS['fill_primary'],
                      edgecolor=COLORS['primary'], linewidth=2)
    ax.add_patch(rect)
    ax.plot(1.5, 1.0, 'D', color='black', markersize=8, zorder=5)
    ax.text(1.5, 0.05, 'Rectangle', fontsize=11, ha='center', fontweight='bold')
    ax.set_xlim(0, 3)
    ax.set_ylim(-0.2, 2)
    ax.set_aspect('equal')
    ax.axis('off')

    # Circle
    ax = axes[1]
    circle = Circle((1.5, 1), 0.8, facecolor=COLORS['fill_secondary'],
                     edgecolor=COLORS['secondary'], linewidth=2)
    ax.add_patch(circle)
    ax.plot(1.5, 1.0, 'D', color='black', markersize=8, zorder=5)
    ax.text(1.5, -0.1, 'Circle', fontsize=11, ha='center', fontweight='bold')
    ax.set_xlim(0, 3)
    ax.set_ylim(-0.3, 2.1)
    ax.set_aspect('equal')
    ax.axis('off')

    # Triangle
    ax = axes[2]
    triangle = Polygon([(0.5, 0.2), (2.5, 0.2), (1.5, 1.8)], closed=True,
                        facecolor=COLORS['fill_tertiary'], edgecolor=COLORS['tertiary'],
                        linewidth=2)
    ax.add_patch(triangle)
    ax.plot(1.5, 0.73, 'D', color='black', markersize=8, zorder=5)
    ax.text(1.5, -0.1, 'Triangle', fontsize=11, ha='center', fontweight='bold')
    ax.set_xlim(0, 3)
    ax.set_ylim(-0.3, 2.1)
    ax.set_aspect('equal')
    ax.axis('off')

    plt.tight_layout()
    save_svg(fig, 'm2-center-of-mass-shapes.svg')


# ============================================================
# M2: Stability Diagram
# ============================================================
def generate_stability_diagram():
    """Stable and unstable hanging configurations.

    From m2_statics_detailed.tex lines 589-606.
    """
    setup_style()
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(6, 3))

    for ax in (ax1, ax2):
        # Pivot point
        ax.plot(1.5, 2.5, 'o', color='black', markersize=8, zorder=5)
        ax.plot([1.2, 1.8], [2.5, 2.5], '-', color='black', linewidth=3)  # support

    # Stable: COM below pivot
    ax1.plot([1.5, 1.5], [2.5, 1.0], '-', color=COLORS['primary'], linewidth=2)
    ax1.plot(1.5, 1.0, 'o', color=COLORS['secondary'], markersize=10, zorder=5)
    ax1.annotate('', xy=(1.5, 0.5), xytext=(1.5, 1.0),
                 arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=2))
    ax1.text(1.5, 0.2, 'COM', fontsize=10, ha='center', fontweight='bold')
    ax1.set_title('Stable', fontsize=12, fontweight='bold', color=COLORS['tertiary'])
    ax1.set_xlim(0.5, 2.5)
    ax1.set_ylim(0, 3)
    ax1.set_aspect('equal')
    ax1.axis('off')

    # Unstable: COM above pivot
    ax2.plot([1.5, 1.5], [2.5, 1.0], '-', color=COLORS['primary'], linewidth=2)
    ax2.plot(1.5, 1.0, 'o', color=COLORS['secondary'], markersize=10, zorder=5)
    ax2.plot([1.5, 1.5], [2.5, 3.0], '-', color=COLORS['primary'], linewidth=2)
    ax2.plot(1.5, 3.0, 'o', color=COLORS['tertiary'], markersize=10, zorder=5)
    ax2.annotate('', xy=(1.5, 3.3), xytext=(1.5, 3.0),
                 arrowprops=dict(arrowstyle='->', color=COLORS['tertiary'], lw=2))
    ax2.text(1.5, 3.5, 'COM', fontsize=10, ha='center', fontweight='bold')
    # Rotation arrow
    arc = Arc((1.5, 2.5), 0.8, 0.8, angle=0, theta1=30, theta2=150,
              color=COLORS['secondary'], linewidth=1.5)
    ax2.add_patch(arc)
    ax2.annotate('', xy=(1.1, 2.8), xytext=(1.2, 2.7),
                 arrowprops=dict(arrowstyle='->', color=COLORS['secondary'], lw=1.5))
    ax2.set_title('Unstable', fontsize=12, fontweight='bold', color=COLORS['secondary'])
    ax2.set_xlim(0.5, 2.5)
    ax2.set_ylim(0, 4)
    ax2.set_aspect('equal')
    ax2.axis('off')

    plt.tight_layout()
    save_svg(fig, 'm2-stability-diagram.svg')


# ============================================================
# M2: L-Shape Composite
# ============================================================
def generate_l_shape_composite():
    """L-shaped lamina decomposed into two rectangles.

    From m2_statics_detailed.tex lines 354-398.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(4, 5))

    # L-shape: vertical part (4×1) + horizontal part (3×1)
    rect1 = Rectangle((0, 0), 1, 4, facecolor=COLORS['fill_primary'],
                       edgecolor=COLORS['primary'], linewidth=2)
    rect2 = Rectangle((0, 0), 3, 1, facecolor=COLORS['fill_secondary'],
                       edgecolor=COLORS['secondary'], linewidth=2)
    ax.add_patch(rect1)
    ax.add_patch(rect2)

    # Labels
    ax.text(0.5, 2, r'$A_1$', fontsize=14, ha='center', va='center',
            fontweight='bold', color=COLORS['primary'])
    ax.text(1.5, 0.5, r'$A_2$', fontsize=14, ha='center', va='center',
            fontweight='bold', color=COLORS['secondary'])

    # Dimensions
    ax.annotate('', xy=(0, -0.3), xytext=(3, -0.3),
                arrowprops=dict(arrowstyle='<->', color='black', lw=1))
    ax.text(1.5, -0.6, '3', fontsize=11, ha='center')
    ax.annotate('', xy=(-0.3, 0), xytext=(-0.3, 4),
                arrowprops=dict(arrowstyle='<->', color='black', lw=1))
    ax.text(-0.6, 2, '4', fontsize=11, ha='center', va='center')

    # COM markers
    ax.plot(0.5, 2, 'D', color=COLORS['primary'], markersize=6, zorder=5)
    ax.plot(1.5, 0.5, 'D', color=COLORS['secondary'], markersize=6, zorder=5)

    # Vertices
    ax.text(0, 4.15, 'A', fontsize=11, fontweight='bold')
    ax.text(1, 4.15, 'B', fontsize=11, fontweight='bold')
    ax.text(3, 1.15, 'C', fontsize=11, fontweight='bold')
    ax.text(1, -0.15, 'D', fontsize=11, fontweight='bold')

    ax.set_xlim(-1, 4)
    ax.set_ylim(-1, 5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'm2-l-shape-composite.svg')


# ============================================================
# M2: Washer with Hole
# ============================================================
def generate_washer_hole():
    """Large circle with offset hole for negative mass method.

    From m2_statics_detailed.tex lines 494-508.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(4, 4))

    # Outer circle (R=2)
    outer = Circle((0, 0), 2, facecolor=COLORS['fill_primary'],
                   edgecolor=COLORS['primary'], linewidth=2)
    ax.add_patch(outer)

    # Inner hole (r=0.8, offset at (0.5, 0.3))
    hx, hy = 0.5, 0.3
    inner = Circle((hx, hy), 0.8, facecolor='white',
                   edgecolor=COLORS['secondary'], linewidth=2)
    ax.add_patch(inner)

    # Centers
    ax.plot(0, 0, 'o', color=COLORS['primary'], markersize=6, zorder=5)
    ax.text(0.15, -0.25, 'O', fontsize=12, fontweight='bold', color=COLORS['primary'])

    ax.plot(hx, hy, 'o', color=COLORS['secondary'], markersize=6, zorder=5)
    ax.text(hx + 0.15, hy + 0.15, 'H', fontsize=12, fontweight='bold', color=COLORS['secondary'])

    # Dimensions
    ax.annotate('', xy=(0, 0), xytext=(2, 0),
                arrowprops=dict(arrowstyle='<->', color=COLORS['primary'], lw=1))
    ax.text(1, -0.25, r'$R$', fontsize=12, color=COLORS['primary'])

    ax.set_xlim(-2.5, 2.5)
    ax.set_ylim(-2.5, 2.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'm2-washer-hole.svg')


# ============================================================
# M2: Triangle Strips
# ============================================================
def generate_triangle_strips():
    """Right triangle divided into horizontal strips.

    From m2_statics_detailed.tex lines 904-922.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(4, 4))

    # Right triangle
    triangle = Polygon([(0, 0), (3, 0), (0, 4)], closed=True,
                        facecolor=COLORS['fill_primary'], edgecolor=COLORS['primary'],
                        linewidth=2)
    ax.add_patch(triangle)

    # Draw horizontal strips
    for y in np.linspace(0.3, 3.7, 8):
        # Width at height y: w(y) = 3(1 - y/4)
        w = 3 * (1 - y / 4)
        ax.plot([0, w], [y, y], '-', color=COLORS['secondary'], linewidth=0.8, alpha=0.6)

    # Highlight one strip
    y_hl = 2.0
    w_hl = 3 * (1 - y_hl / 4)
    rect = Rectangle((0, y_hl - 0.1), w_hl, 0.2, facecolor=COLORS['fill_secondary'],
                      edgecolor=COLORS['secondary'], linewidth=1.5)
    ax.add_patch(rect)

    # Labels
    ax.text(w_hl + 0.15, y_hl, r'$w(y)$', fontsize=12, color=COLORS['secondary'])
    ax.annotate('', xy=(w_hl + 0.3, y_hl - 0.1), xytext=(w_hl + 0.3, y_hl + 0.1),
                arrowprops=dict(arrowstyle='<->', color=COLORS['tertiary'], lw=1))
    ax.text(w_hl + 0.5, y_hl, r'$dy$', fontsize=11, color=COLORS['tertiary'])

    # Axes
    ax.text(3.2, -0.2, r'$x$', fontsize=12, fontstyle='italic')
    ax.text(-0.3, 4.2, r'$y$', fontsize=12, fontstyle='italic')

    ax.set_xlim(-0.5, 4)
    ax.set_ylim(-0.5, 4.5)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 'm2-triangle-strips.svg')


# ============================================================
# S2: Uniform Distribution PDF/CDF
# ============================================================
def generate_uniform_pdf_cdf():
    """Side-by-side PDF and CDF of Uniform(a,b).

    From uniform.tex lines 131-177.
    """
    setup_style()
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8, 3))

    a, b = 1, 4
    h = 1 / (b - a)  # height = 1/3

    # PDF
    ax1.fill_between([a, b], [h, h], alpha=0.3, color=COLORS['primary'])
    ax1.plot([a, a, b, b], [0, h, h, 0], '-', color=COLORS['primary'], linewidth=2)
    ax1.axhline(y=0, color='black', linewidth=0.8)
    ax1.set_xlabel(r'$x$', fontsize=12)
    ax1.set_ylabel(r'$f(x)$', fontsize=12, rotation=0, labelpad=15)
    ax1.set_title('PDF', fontsize=12, fontweight='bold')
    ax1.text((a+b)/2, h + 0.03, r'$\frac{1}{b-a}$', fontsize=14, ha='center',
             color=COLORS['primary'])
    ax1.text(a, -0.06, r'$a$', fontsize=12, ha='center')
    ax1.text(b, -0.06, r'$b$', fontsize=12, ha='center')
    ax1.set_xlim(0, 5)
    ax1.set_ylim(-0.1, 0.5)
    ax1.grid(True, alpha=0.3)

    # CDF
    ax2.plot([0, a, a, b, b, 5], [0, 0, 0, 1, 1, 1], '-', color=COLORS['secondary'],
             linewidth=2)
    ax2.axhline(y=0, color='black', linewidth=0.8)
    ax2.set_xlabel(r'$x$', fontsize=12)
    ax2.set_ylabel(r'$F(x)$', fontsize=12, rotation=0, labelpad=15)
    ax2.set_title('CDF', fontsize=12, fontweight='bold')
    ax2.text(a, -0.06, r'$a$', fontsize=12, ha='center')
    ax2.text(b, -0.06, r'$b$', fontsize=12, ha='center')
    ax2.text((a+b)/2, 0.5, r'$\frac{x-a}{b-a}$', fontsize=14, ha='center',
             color=COLORS['secondary'])
    ax2.set_xlim(0, 5)
    ax2.set_ylim(-0.1, 1.2)
    ax2.grid(True, alpha=0.3)

    plt.tight_layout()
    save_svg(fig, 's2-uniform-pdf-cdf.svg')


# ============================================================
# S2: Buffon's Needle
# ============================================================
def generate_buffon_needle():
    """Buffon's needle problem diagram.

    From uniform.tex lines 445-471.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(5, 3))

    # Parallel lines
    for xi in [0, 1, 2, 3]:
        ax.plot([xi, xi], [-0.5, 2.5], '-', color=COLORS['primary'], linewidth=1.5)

    # Needle crossing one line
    needle_x = [0.6, 1.3]
    needle_y = [0.8, 1.5]
    ax.plot(needle_x, needle_y, '-', color=COLORS['secondary'], linewidth=3, zorder=5)

    # Distance X from center to nearest line
    center_x = (needle_x[0] + needle_x[1]) / 2
    center_y = (needle_y[0] + needle_y[1]) / 2
    ax.plot(center_x, center_y, 'o', color='black', markersize=5, zorder=6)

    # X distance
    ax.annotate('', xy=(1.0, center_y - 0.3), xytext=(center_x, center_y - 0.3),
                arrowprops=dict(arrowstyle='<->', color=COLORS['tertiary'], lw=1.5))
    ax.text((1.0 + center_x)/2, center_y - 0.55, r'$X$', fontsize=12, ha='center',
            color=COLORS['tertiary'], fontweight='bold')

    # Angle theta
    theta = np.arctan2(needle_y[1] - needle_y[0], needle_x[1] - needle_x[0])
    arc = Arc((center_x, center_y), 0.5, 0.5, angle=0,
              theta1=0, theta2=np.degrees(theta),
              color=COLORS['accent'], linewidth=1.5)
    ax.add_patch(arc)
    ax.text(center_x + 0.3, center_y + 0.1, r'$\Theta$', fontsize=12,
            color=COLORS['accent'])

    # Spacing label
    ax.annotate('', xy=(0, -0.3), xytext=(1, -0.3),
                arrowprops=dict(arrowstyle='<->', color='black', lw=1))
    ax.text(0.5, -0.55, '1', fontsize=11, ha='center')

    ax.set_xlim(-0.3, 3.3)
    ax.set_ylim(-0.8, 2.8)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.grid(False)

    save_svg(fig, 's2-buffon-needle.svg')


# ============================================================
# S2: Binomial-Normal Overlay
# ============================================================
def generate_binomial_normal_overlay():
    """Binomial B(50, 0.3) histogram with normal N(15, 10.5) overlay.

    From approximations.tex lines 149-187.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(7, 4))

    n, p = 50, 0.3
    mu = n * p
    sigma = np.sqrt(n * p * (1 - p))

    # Binomial probabilities
    from math import comb
    k_vals = np.arange(0, 30)
    binom_probs = [comb(n, k) * p**k * (1-p)**(n-k) for k in k_vals]

    ax.bar(k_vals, binom_probs, width=0.8, color=COLORS['fill_primary'],
           edgecolor=COLORS['primary'], linewidth=1, label=f'B({n}, {p})')

    # Normal curve overlay
    x = np.linspace(0, 30, 300)
    y_norm = (1 / (sigma * np.sqrt(2*np.pi))) * np.exp(-0.5 * ((x - mu) / sigma)**2)
    ax.plot(x, y_norm, '-', color=COLORS['secondary'], linewidth=2,
            label=f'N({mu}, {sigma**2:.1f})')

    ax.set_xlabel(r'$k$', fontsize=13)
    ax.set_ylabel(r'$P(X=k)$', fontsize=13)
    ax.legend(fontsize=11)
    ax.set_xlim(-0.5, 28)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 's2-binomial-normal-overlay.svg')


# ============================================================
# S2: Poisson-Normal Overlay
# ============================================================
def generate_poisson_normal_overlay():
    """Poisson Po(12) histogram with normal N(12, 12) overlay.

    From approximations.tex lines 202-226.
    """
    setup_style()
    fig, ax = plt.subplots(1, 1, figsize=(7, 4))

    lam = 12
    mu = lam
    sigma = np.sqrt(lam)

    # Poisson probabilities
    from math import factorial, e
    k_vals = np.arange(0, 25)
    poisson_probs = [lam**k * e**(-lam) / factorial(k) for k in k_vals]

    ax.bar(k_vals, poisson_probs, width=0.8, color=COLORS['fill_tertiary'],
           edgecolor=COLORS['tertiary'], linewidth=1, label=f'Po({lam})')

    # Normal curve overlay
    x = np.linspace(0, 25, 300)
    y_norm = (1 / (sigma * np.sqrt(2*np.pi))) * np.exp(-0.5 * ((x - mu) / sigma)**2)
    ax.plot(x, y_norm, '-', color=COLORS['secondary'], linewidth=2,
            label=f'N({mu}, {lam})')

    ax.set_xlabel(r'$k$', fontsize=13)
    ax.set_ylabel(r'$P(X=k)$', fontsize=13)
    ax.legend(fontsize=11)
    ax.set_xlim(-0.5, 23)
    ax.grid(True, alpha=0.3)

    save_svg(fig, 's2-poisson-normal-overlay.svg')


# ============================================================
# Main
# ============================================================
if __name__ == '__main__':
    setup_style()
    print("Phase 3: Generating 19 remaining SVGs...")

    # FP2 (4)
    generate_complex_multiplication()
    generate_complex_locus_halfline()
    generate_complex_locus_inequality()
    generate_complex_transformation()

    # FP3 (5)
    generate_ellipse_orbit()
    generate_hyperbola_comet()
    generate_gabriel_horn()
    generate_secant_tangent()
    generate_inverse_hyperbolic_arclength()

    # M2 (6)
    generate_center_of_mass_rod()
    generate_center_of_mass_shapes()
    generate_stability_diagram()
    generate_l_shape_composite()
    generate_washer_hole()
    generate_triangle_strips()

    # S2 (4)
    generate_uniform_pdf_cdf()
    generate_buffon_needle()
    generate_binomial_normal_overlay()
    generate_poisson_normal_overlay()

    print("Phase 3 complete!")
