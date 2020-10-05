import React, { Component } from "react";
import NavBar from "./NavBar";


export class BiblioPage extends Component {
  render() {
    return (
      <div>
        <NavBar> 
        </NavBar>
        <div id="main">
						<div class="inner">
        {/* <hr class="major" /> */}
        <section>
        <header class="major">
						<h2>Papers</h2>
				</header>
        <h2>Preprints</h2>
          <ol reversed>
            <li>B. Gambacini, S. Macdonald, A. Shiu. Open and closed convexity of sparse neural codes. </li>
            <li>R.A. Jeffs, I. Novik. Convex union representability and convex codes.</li> 
            <li>R.A. Jeffs, Embedding dimension phenomena in intersection complete codes.</li> 
            <li>C. Curto, R. Vera. The Leray dimension of a convex code.</li>
            <li>C. Curto, N. Youngs. Neural ring homomorphisms and maps between neural codes</li>
          </ol>
        
          <hr class="major" />
          <h2>Publications</h2>

          <ol reversed>
            <li>A. Ruys de Perez, L. Matusevich, A. Shiu. 
              <b> Neural codes and the factor complex.</b> 
              Advances in Applied
              Mathematics, vol. 114, Article 101977, 2020. 
            </li>
            <li>J. Jeffries, S. Güntürkün, J. Sun. 
              <b> Polarization of Neural Ideals.</b> 
              to appear in 
              Journal of Algebra and Its Applications
            </li>
            <li>R.A. Jeffs. 
              <b> Morphisms of neural codes.</b> 
              SIAM J. Appl. Algebra Geometry vol. 4, 
            no. 1, pp. 99-122, 2020
            </li>					
            <li>V. Itskov, A. Kunin, Z. Rosen. 
              <b>Hyperplane neural codes and the polar complex.</b> 
              To appear in the Abel 
              Symposia proceedings, Vol. 15, 2019.
            </li>
            <li>R.A. Jeffs. 
              <b>Sunflowers of convex open sets.</b> 
              Advances in Applied Mathematics, vol. 111, 2019.</li>
            <li>A. Chen, F. Frick, A. Shiu. <b>Neural codes, decidability, and a new local obstruction to convexity.</b>
            SIAM Journal on Applied Algebra and Geometry, vol. 3, no. 1, 44−66, 2019.</li>
            <li>C. Curto, E. Gross, J. Jeffries, K. Morrison, Z. Rosen, A. Shiu, N. Youngs. 
            <b>Algebraic signatures of convex and non-convex codes.</b> Journal of Pure and Applied Algebra, vol. 23, 
              no. 9 pp. 3919–3940, 2019. </li>

            <li>R.A. Jeffs, M. Omar, N. Suaysom, A. Wachtel, N. Youngs. <b>Sparse neural codes and convexity.</b>
              Involve, vol. 12, no. 5, pp. 737-754, 2019.</li>
            <li>R. Garcia, L. Garcia Puente, R. Kruse, J. Liu, D. Miyata, E. Petersen, K. Phillipson, A. Shiu.
                <b>Gröbner bases of neural ideals.</b> International Journal of Algebra and Computation,
                  vol. 28, no. 4, pp. 553-571, 2018</li>
            <li>J. Cruz, C. Giusti, V. Itskov, B. Kronholm. <b>On open and closed convex codes.</b> Discrete and 
              Computational Geometry, 2018 </li>
            <li>R.A. Jeffs, M. Omar, N. Youngs. <b>Homomorphisms preserving neural ideals.</b> Journal of Pure and Applied
                Algebra, vol. 222, no. 11, pp. 3470-3482, 2018. </li>
            <li>E.Gross, N. Obatake, N. Youngs. <b>Neural ideals and stimulus space visualization.</b> Advances in Applied
                  Mathematics, vol. 95 pp. 65–95, 2018</li>
            <li>C. Lienkaemper, A. Shiu, Z. Woodstock. <b>Obstructions to convexity in neural codes.</b> 
                Advances in Applied Mathematics, vol. 85, pp. 31-59, 2017</li>
            <li>C. Curto, E. Gross, J. Jeffries, K. Morrison, M. Omar, Z. Rosen, A. Shiu, N. Youngs.
                <b>What makes a neural code convex?</b> SIAM J. Appl. Algebra Geometry, vol. 1, pp. 222-238, 2017</li>
            <li>C. Curto. <b>What can topology tells us about the neural code?</b> 
                Bulletin of the AMS, vol. 54, no. 1, pp. 63-78, 2017</li>
            <li>C. Curto, V. Itskov, A. Veliz-Cuba, N. Youngs. <b>The neural ring: an algebraic tool for analyzing the 
              intrinsic structure of neural codes.</b> Bulletin of Mathematical Biology, 
                Volume 75, Issue 9, pp. 1571-1611, 2013r</li>
            <li>C. Curto, V. Itskov, K. Morrison, Z. Roth, J.L. Walker. <b>Combinatorial neural codes from a mathematical  											coding theory perspective.</b> Neural Computation, Vol 25(7):1891-1925, 2013.</li>
            <li>C. Curto, V. Itskov. <b>Cell groups reveal structure of stimulus space.</b> 
                PLoS Computational Biology, Vol. 4(10): e1000205, 2008</li>

          </ol>
         
          </section>
					</div>		
        </div>		

        {/* <h1>This is the Bibliography Page</h1> */}
      </div>
    );
  }
}

export default BiblioPage;
