import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Nav from './Nav';
import Contact from './Contact';
import AddContact from './AddContact';
function Example() {
    return (

        <BrowserRouter>
            <Nav />
        <Routes>
          <Route path="/" element={<Contact />} />
        <Route path="/addc" element={<AddContact />} />

        </Routes>
      </BrowserRouter>
        );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
