import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Questions from '../Questions';
import logo from '../../static/images/simplesurance.png';
import '../../static/styles/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <main className="main">
          <img src={logo} className="logo" alt="Simple surance logo" />
          <Questions />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
