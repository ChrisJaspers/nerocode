import React, { Component } from "react";
import NavBar from "./NavBar";


export class IntroMaterials extends Component {
  render() {
    return (
      <div>
        <NavBar>

        </NavBar>

        <div id="main">
						<div class="inner">
            <section>
									<header class="major">
										<h2>Neural codes: a brief introduction</h2>
									</header>

									<span class="image main"><img src="images/pic11.jpg" alt="" /></span>

									<p>The following information is a summary of the introductory information which precedes most of our papers. For more information, consult any of THESE REFERENCES, attend one of our talks, or get in touch! </p>
									<p> The terms "neural codes" and "neural coding" can mean many different things, 
                    depending on which part of the neuroscience community you are thinking about. 
                    The ideas, notions, and definitions presented here are those used in the literature 
                    referenced in our bibliography, and are particular examples of combinatorial neural 
                    codes. FOR SIMILAR RELATED NOTIONS IN NEUROSCIENCE, SEE THE NEURAL REFERENCES PAGE)
									</p>

									<hr class="major" />

									<h2>What is a neural code?</h2>
									<p>In its simplest form, a neural code on n neurons is a collection of 
                    subsets of the set [n]=1,...,n. That is the only requirement! This neural code may or may not have other features (it may be convex, be a simplicial complex, intersection complete, max intersection complete...) but none of these things are required to call the set a neural code. 

  In our literature, there are really only two ways of writing out a neural code. 
As a list of subsets, as in this example on four neurons:
As a list of binary vectors, where the vector v equates to the set s of its support.   INCLUDE EXAMPLE HERE. </p>
									<p> We often use the shorthand notation, but usually only fully write out examples with fewer than 10 neurons!</p>

									<hr class="major" />

									<h2>This seems suspiciously like combinatorics. Why "neural" codes?</h2>
									<p>Thinking of these neural codes as combinatorial objects is exactly the right idea for reading our work.  However, there is neuroscience here too! When we think about neural codes in these projects, we consider these codes as representing the behavior of n neurons over the course of an experiment, or as an animal experiences a range of stimuli. GIVE AN EXAMPLE </p>
									<p>Of course, a lot of information is lost here. In a neural code we only preserve the data about which combinations neurons co-fire. The code may not preserve the time sequence of these patterns, nor does it capture the relative intensity of firing of the neurons. There are a lot of interesting questions to investigate if we include this sort of information! (GO TO OPEN QUESTIONS.) </p>

									<hr class="major" />

									<h2>Why care about convexity?</h2>
									<p>Many types of neurons have receptive fields which appear to be convex, at least approximately. When complete data is not available, convex approximations for receptive fields are often used.  </p>
									<p>Of course, if we loosen the requirement of convexity, other interesting questions arise! (GO TO OPEN QUESTIONS) </p>

									<h2>How can I learn more? </h2>
									<p>Read on! We have a book chapter, which </p>

								</section>
            </div>
        </div>

      </div>
    );
  }
}

export default IntroMaterials;
