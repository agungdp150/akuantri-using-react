//Importing Combination
import React from 'react';
// import './App.scss';

//Importing Module in React
import Home from "./Component/Home.js";
import FeatureBox1 from "./Component/FeatureBox1.js";
import FeatureBox2 from "./Component/FeatureBox2.js";
import FeatureBox3 from "./Component/FeatureBox3.js";
import FeatureBox4 from './Component/FeatureBox4.js';
import FeatureBox5 from './Component/FeatureBox5.js';
import Footer from './Component/Footer.js';


//style import
import "./Assets/Home.scss";
import "./Assets/FeatureBox1.scss";
import "./Assets/FeatureBox2.scss";
import "./Assets/FeatureBox3.scss";
import "./Assets/FeatureBox4.scss";
import "./Assets/FeatureBox5.scss";
import "./Assets/Footer.scss";



function App() {
  return (
    <div className="App">
      <Home />
      <FeatureBox1/>
      <FeatureBox2/>
      <FeatureBox3/>
      <FeatureBox4/>
      <FeatureBox5/>
      <Footer/>
    </div>
  );
}

export default App;
