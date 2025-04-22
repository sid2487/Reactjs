import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Chai from './chai.jsx'
import App from './App.jsx'





const reactElement1 = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chal be nikal"
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
 
    reactElement 
    // <App />
   

)