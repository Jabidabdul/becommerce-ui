import React from "react";
import "./style.css";

const PageOne = () => {
  return (
    <>
      <header>
        <h1>My Design</h1>
      </header>
      <div className="container">
        <h2>Our Cards</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          sapien magna. Suspendisse potenti. Pellentesque ac mi enim. Nam
          tristique felis nec sapien fringilla, vel venenatis elit iaculis.
        </p>

        <div className="row">
          <div className="col">
            <div className="card">
              <h2>Card 1</h2>
              <img src="https://images.unsplash.com/photo-1676798531090-1608bedeac7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
              <p>
                Nature
              </p>
              <a href="https://images.unsplash.com/photo-1676798531090-1608bedeac7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" download><button>Download</button></a>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <h2>Card 2</h2>
              <img src="https://images.unsplash.com/photo-1675813969950-bc91de19a883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
              <p>
                Animal
              </p>
              <a href="https://images.unsplash.com/photo-1675813969950-bc91de19a883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"><button>Download</button></a>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <h2>Card 3</h2>
              <img src="https://images.unsplash.com/photo-1675545858641-7b90372ced2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
              <p>
                Food
              </p>
              <a href="https://images.unsplash.com/photo-1675545858641-7b90372ced2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"><button>Download</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;
