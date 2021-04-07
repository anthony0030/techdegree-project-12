import React from 'react'
import { Heading, Skills } from "components";

function About() {
  return (
    <>
      <Heading title="" subtitle="About" />

      <h3>Resume</h3>

      <div className="timeline mb-5">
        <div className="timeline-container left">
          <div className="content">
            <h2>2017 - current</h2>
            <p>Go Thassos</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="content">
            <h2>2016 - 2017</h2>
            <p>TEI EMT</p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="content">
            <h2>2014 - 2016</h2>
            <p>EPAL</p>
          </div>
        </div>
      </div>



      <h3>Skills</h3>
      <div className="bg-light rounded border">
        <Skills
        projectIndex={0}
        skills={[
          "html",
          "css",
          "js",
          "sass",
          "scss",
          "react",
          "pug",
          "jade",
          "bower",
          "npm",
          "api",
          "git"
        ]} />
      </div>
    </>
  )
}

export default About
