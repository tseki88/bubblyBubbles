import React, { Component } from 'react';
import './styles/App.css';
import CreateWish from './components/CreateWish';
import DisplayWishes from './components/DisplayWishes';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <div className="introduction">
            <p>
              Hi there! The world is going through a lot right now, so why not{' '}
              share a <span>bubbly thought</span> and send that{' '}
              <span>bubble of joy</span> anonymously. Just type one in! If
              you're too shy to share, feel free to <span>like</span> other's
              bubbly thoughts!
            </p>
          </div>
          <main>
            <CreateWish />
            <DisplayWishes />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
