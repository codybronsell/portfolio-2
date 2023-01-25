import React from "react";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <section id="contact-me">
    <div class="flex-row gutter-md">
      <div class="flex-3">
        <h2 class="section-title primary-border"> Contact Me </h2>
      </div>
      <div class="flex-9 border-primary-left-lg align-text-center">
        <div class="flex-row">
			<div class="flex-2"><a href="tel:2816824933" title="Call me at (281) 682-4933">(281) 682-4933</a></div>
			<div class="flex-2"><a href="mailto:codybronsell@yahoo.com" title="Email me at codybronsell@yahoo.com">codybronsell@yahoo.com</a></div>
			<div class="flex-2"><a href="https://github.com/codybronsell" title="View my GitHub">GitHub</a></div>
			<div class="flex-2"><a href="#" title="">Item #1</a></div>
		  </div>
      </div>
    </div>
  </section>
  );
}
