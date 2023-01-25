import React from "react";
export default function Project(props) {
  return (
    <div class="flex-6">
    <a href="{props.deploy}" class="proj bg-2" style="background-image: url({props.image});">
      <div class="info-box">
        <h3>{props.title}</h3>
        <p>{props.descriiption}</p>
      </div>
    </a>
  </div>
  );
}
