import './Body.css';
import { useState, useEffect } from "react";
import goat from './pictures/goat.jpg'
import jetway from './pictures/jetway.jpg'

export default function(){
  const [switchPictures, setSwitchPictures] = useState(false);
  const [currHobbyIndex, changeHobbyIndex] = useState(0);
  const [currProjectIndex, changeProjectIndex] = useState(0);
  const hobbies = ['Lifting', 'Videogames', 'Basketball', 'Reading', 'Nature'];
  const projects = [
    'CoinFlip Deluxe Simulator',
    'Inventory Tracker',
    'TypeRacer',
    'Chess Tournament Organizer',
    'Portfolio Website (This One!)'
  ];
  const projectDescriptions = [
    'Used Java and JavaFX to develop a GUI application that simulates coin flips along with additional features.',
    'Used Python, Django, and HTML/CSS to develop a crud application that keeps track of inventory items for each user.',
    'Used Python and Tkinter to develop a GUI application that allows users to type text and find their wpm, accuracy, and time taken.',
    'Used C++ to develop a program that can start and complete a chess tournament. The results can be saved to a text file.',
    'Used Javascript, HTML/CSS, Node.js, and React to develop a personal portfolio website.'
  ];

  const programmingLanguages = ['Java', 'Python', 'C++', 'Javascript', 'HTML', 'CSS'];
  const [languagesBool, setLanguagesBool] = useState(programmingLanguages.map(p => {
    if (projectDescriptions[0].includes(p)){
      return true;
    }
    else {
      return false;
    }
  }));

  function switchBool() {
    setSwitchPictures(!switchPictures);
  }

  function handleClick() {
    if (currHobbyIndex >= hobbies.length - 1){
      changeHobbyIndex(0);
    }
    else {
      changeHobbyIndex(currHobbyIndex + 1);
    }
  }

  function switchProjectIndex() {
    // Use nextProjectIndex because if not, the newLanguagesBool is using an old state value since state values only change on rerenders
    // Preempt this by setting a new variable to what the new state value will be on the next rerender.
    let nextProjectIndex = 0;
    if (currProjectIndex >= projects.length - 1){
      changeProjectIndex(0);
      nextProjectIndex = 0;
    }
    else {
      changeProjectIndex(currProjectIndex + 1);
      nextProjectIndex = currProjectIndex + 1;
    }

    const newLanguagesBool = programmingLanguages.map(b => {
      if (projectDescriptions[nextProjectIndex].includes(b)){
        // Check to see if 'Java' is actually in description and not as part of javascript
        // This solution is assuming I will never make a project with both java and javascript. (The probability of that happening is VERY LOW)
        // Will replace with a regex expression later in the future
        if (b === 'Java'){
          if (!projectDescriptions[nextProjectIndex].includes("Java ")){
            return false;
          }
        }
        return true;
      }
      else {
        return false;
      }
    });

    setLanguagesBool(newLanguagesBool);
    // See if each string in programming languages is a substring of the project description if it is, set the index at that element to be true
    /*
    for (let i = 0; i < programmingLanguages.length; i++){
      if (projectDescriptions[currProjectIndex].includes(programmingLanguages[i])){
        newLanguagesBool[i] = true;
      }
    }

    setLanguagesBool(languagesBool);
    */
  }

  return(
    <div className="bodyContainer">
      <div className="introductionBlock">
        <div className="leftIntroBlock">
          <div className="introductionText">
            <h1>Hi! I'm Steven Weng</h1>
            <br></br>
            <p>I'm a junior studying Computer Science at the University of Houston</p>
            <p>On my free time, I love learning new things</p>
            <p className="inlineP">Besides learning, I also love </p>
            <HobbyButton handleClick = {handleClick} hobby = {hobbies[currHobbyIndex]}/>
          </div>
          <div className="projectShowcase">
            <h1>Projects</h1>
            <br></br>
            <Projects projectName={projects[currProjectIndex]} projectDescription = {projectDescriptions[currProjectIndex]} switchIndex={switchProjectIndex} switchBool={switchBool}/>
          </div>
        </div>
        <div className="introductionPicture">
          <ImageCarousel switchPictures={switchPictures} switchBool={switchBool}/>
        </div>
      </div>
      <div className="technologyContainer">
        <h1>Languages</h1>
        <LanguageList list={programmingLanguages} languagesBool={languagesBool}/>
      </div>
    </div>
  );
}

function LanguageList({list, languagesBool}) {
  const listItems = list.map((language, i) => 
    <li key={language} className= {languagesBool[i] ? "languageHighlight" : "language"}>{language}</li>);
  return(<ul className="languageList">{listItems}</ul>);
}

function Projects({projectName, projectDescription, switchIndex, switchBool}){
  useEffect(() => {
    const interval = setInterval(() => {
      switchIndex();
      switchBool();
    }, 8000);
    return () => clearInterval(interval);
  });
  return (
    <div className="projectItem">
      <div className="projectMarginHelper">
        <h2 className="projectScroll">{projectName}</h2>
        <p className="projectDescription">{projectDescription}</p>
      </div>
    </div>);
}

function HobbyButton({handleClick, hobby}){
  return(<button className="changingHobby" onClick={handleClick}> {hobby}</button>);
}

function ImageCarousel({switchPictures, switchBool}){
  /*
  useEffect(() => {
    const interval2 = setInterval(() =>{
      switchBool();
      console.log('This will run every second!');
    }, 10000);
    return () => clearInterval(interval2);
  });
  */
  return (<img src={switchPictures ? goat : jetway}></img>);
}