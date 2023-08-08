import _ from 'lodash';
import './style.css';

function component1() {
  const heading = document.createElement('h1');
  heading.innerHTML = 'Hello Webpack & Gitflow!';
  heading.classList.add('hello');
  return heading;
}

function component2() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component1());
document.body.appendChild(component2());