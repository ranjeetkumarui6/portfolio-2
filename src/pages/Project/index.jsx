import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";

const Project = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="project-section">
        <div className="container">
          <HeadinContent
            h1Heading="Project"
            h2Heading="Our Project"
            paraName="A Projects is a document that provides an overview of a project, including its objectives, scope, and key details. It's an important document for effective project planning and communication"
          />
          <div className="row">
            <div className="col-md-4">
              <div className="img-project-1 mb-4 d d-flex">
                <div className="overlay"></div>
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-clock.netlify.app">Click to play</a>
                    </h3>
                    <span>Clock App</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="img-project-2 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-texteditor.netlify.app">Click to play</a>
                    </h3>
                    <span>Our Text Editor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="img-project-3 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-portfolio-1.netlify.app">Click to play</a>
                    </h3>
                    <span>Our First Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-project-4 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-notes-app.netlify.app">Click to play</a>
                    </h3>
                    <span>Our Notes App</span>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-project-6 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-bmi-calculator.netlify.app">Click to play</a>
                    </h3>
                    <span>Our BMI Calculator</span>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-8">
              <div className="img-project-5 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-unbrew-clone.netlify.app">Click to play</a>
                    </h3>
                    <span>Our Unbrew Clone</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-8">
              <div className="img-project-7 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Not Responsive</a>
                    </h3>
                    <span>Our Lodo UI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-project-8 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-todo-app.netlify.app">Click to play</a>
                    </h3>
                    <span>Our Todo App</span>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-project-10 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-luckyno-game.netlify.app">Click to play</a>
                    </h3>
                    <span>Our Lucky Number Game</span>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-8">
              <div className="img-project-9 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="https://ranjeet-bee-game.netlify.app">Click to play</a>
                    </h3>
                    <span>Our Bee Game</span>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
    </>
  );
});

export default Project;
