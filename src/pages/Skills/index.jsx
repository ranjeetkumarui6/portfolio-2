import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import SkillContent from "../../widgets/SkillContent";

const Skills = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="Skills-section">
        <div className="container">
          <HeadinContent
            h1Heading="Skills"
            h2Heading="My Skills"
            paraName="Soft skills are a person's social and behavioral skills that help them interact with others and get work done. They are also known as people skills or human skills"
          />
          <div className="row">
            <SkillContent skill="Figma"/>
            <SkillContent skill="UI/UX design"/>
            <SkillContent skill="Photoshop"/>
            <SkillContent skill="Canva"/>
            
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
