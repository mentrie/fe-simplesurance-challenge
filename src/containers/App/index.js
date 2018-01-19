import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Questions from '../Questions';
import '../../static/styles/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <main className="main">
         <Questions />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
