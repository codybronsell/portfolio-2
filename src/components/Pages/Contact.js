import React, { useState } from "react";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div>
      <div>
        <h2 className="title">Contact Cody</h2>
        <div className="email-div">
          <p>
            Contact me at{" "}
            <a className="email" href="mailto:codybronsell@yahoo.com">
              {" "}
              codybronsell@yahoo.com{" "}
            </a>{" "}
            or through the following form.
          </p>
        </div>   
      </div>
      <Footer />
    </div>
  );
}
