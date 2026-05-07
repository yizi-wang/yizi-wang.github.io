"""Main entry point for SVG diagram generation.

Usage:
    python scripts/generate_svg.py          # Generate all SVGs
    python scripts/generate_svg.py phase1   # Generate only Phase 1 (accuracy fixes)
    python scripts/generate_svg.py phase2   # Generate only Phase 2 (new diagrams)
    python scripts/generate_svg.py phase3   # Generate only Phase 3 (completeness)
"""

import sys
import os

sys.path.insert(0, os.path.dirname(__file__))


def main():
    args = sys.argv[1:]
    target = args[0] if args else 'all'

    if target in ('all', 'phase1'):
        from phase1_fixes import (
            generate_game_tree,
            generate_polar_coordinates,
            generate_hyperbolic_graphs,
            generate_maclaurin_approximation,
            generate_cross_product_3d,
        )
        from utils import setup_style
        setup_style()
        print("Phase 1: Fixing 5 critical accuracy SVGs...")
        generate_game_tree()
        generate_polar_coordinates()
        generate_hyperbolic_graphs()
        generate_maclaurin_approximation()
        generate_cross_product_3d()

    if target in ('all', 'phase2'):
        from phase2_new_diagrams import (
            generate_complex_argand,
            generate_complex_locus_circle,
            generate_ode_solution_curves,
            generate_parabola_focus_directrix,
            generate_eccentricity_comparison,
            generate_arc_length,
            generate_projectile_motion,
            generate_ladder_equilibrium,
            generate_energy_track,
            generate_collision_1d,
            generate_discrete_to_continuous,
            generate_skewed_distributions,
        )
        from utils import setup_style
        setup_style()
        print("\nPhase 2: Generating 12 new high-value SVGs...")
        generate_complex_argand()
        generate_complex_locus_circle()
        generate_ode_solution_curves()
        generate_parabola_focus_directrix()
        generate_eccentricity_comparison()
        generate_arc_length()
        generate_projectile_motion()
        generate_ladder_equilibrium()
        generate_energy_track()
        generate_collision_1d()
        generate_discrete_to_continuous()
        generate_skewed_distributions()

    if target in ('all', 'phase3'):
        from phase3_complete import (
            generate_complex_multiplication,
            generate_complex_locus_halfline,
            generate_complex_locus_inequality,
            generate_complex_transformation,
            generate_ellipse_orbit,
            generate_hyperbola_comet,
            generate_gabriel_horn,
            generate_secant_tangent,
            generate_inverse_hyperbolic_arclength,
            generate_center_of_mass_rod,
            generate_center_of_mass_shapes,
            generate_stability_diagram,
            generate_l_shape_composite,
            generate_washer_hole,
            generate_triangle_strips,
            generate_uniform_pdf_cdf,
            generate_buffon_needle,
            generate_binomial_normal_overlay,
            generate_poisson_normal_overlay,
        )
        from utils import setup_style
        setup_style()
        print("\nPhase 3: Generating 19 remaining SVGs...")
        generate_complex_multiplication()
        generate_complex_locus_halfline()
        generate_complex_locus_inequality()
        generate_complex_transformation()
        generate_ellipse_orbit()
        generate_hyperbola_comet()
        generate_gabriel_horn()
        generate_secant_tangent()
        generate_inverse_hyperbolic_arclength()
        generate_center_of_mass_rod()
        generate_center_of_mass_shapes()
        generate_stability_diagram()
        generate_l_shape_composite()
        generate_washer_hole()
        generate_triangle_strips()
        generate_uniform_pdf_cdf()
        generate_buffon_needle()
        generate_binomial_normal_overlay()
        generate_poisson_normal_overlay()

    print("\nDone! All SVGs generated in public/images/")


if __name__ == '__main__':
    main()
