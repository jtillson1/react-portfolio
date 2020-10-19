import React from 'react';
import coverImage from "../../assets/grad-5.jpg";
function About() {
  return (
    <section className="my-5">
    <h1 id="about">Jess Tillson</h1>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  </section>
  );
}

export default About;