# Aniaml Super Facts

## Table of contents
* [Overview](#overview)
* [Setup](#setup)
* [Built with](#built-with)
* [Steps](#steps)
* [Challenges and Credits](#challenges-and-credits)

## Overview
In this project, we’ll build a program that allows users to click an animal on the screen in order to have a fun fact pop up.

<img src="https://content.codecademy.com/courses/React/react_jsx_project_preview.gif"/>

Our program will display a selection of animals on the screen. We’ll be allowed to decide if we want to include a background or not. Clicking an animal will cause a fact to be randomly selected from a list of potential options. The selected fact will pop up on the screen. As we keep clicking, we’ll be able to see different facts.

## Setup
Create a react <code>(npx create-react-app app-name)</code>app the dollow the provided steps below



## Built with
* HTML
* CSS (course given)
* JavaScript (course given)
* Git, GitHub and GitHub Pages

## Steps
1.  >On line 1 in <strong>app.js</strong>, you should see an import statement. This is importing the <code>animals</code> object from <strong>animals.js</strong>. Feel free to take a look at it now, but we’ll be coming back to it in later tasks.

For now, let’s import the <code>React</code> from react and <code>createRoot</code> from <code>react-dom/client</code>.

2.  >Click on <strong>index.html</strong> to find out the id of the HTML element to get a reference of. Use this id and the <code>document</code> object to get a reference of this element and store it in a constant called <code>container</code>.

3.  >Create a React root so you can render content using the <code>createRoot()</code> method, passing <code>container</code> as an argument. Store this root in a constant called <code>root</code>.

4.  >Add a <code>title</code> constant that will hold the value of the title. For now, set its value to an empty string.

In addition, create an <code>animalFacts</code> constant to hold the JSX expression that we’ll want to be compiled. Set its value to a <code>< h1 ></code> element that contains our title.

We still shouldn’t see anything in the browser yet! We’ll have to wait until we write our React root’s <code>render()</code> method before anything shows up.

5.  >We could fill in the empty string assigned to <code>title</code> if we wanted, but we could also leave it blank and let the JSX use a default value instead.

Using the ternary operator, let the <code>< h1 ></code> heading use ‘Click an animal for a fun fact’ as the default if <code>title</code> is an empty string.

6.  >It’s time to call our <code>root</code>‘s <code>render()</code> method.

Let’s pass in <code>animalFacts</code> as the JSX expression that we want to be compiled and rendered.

When finished, click Save. If all goes well, we should see the text ‘Click an animal for a fun fact!’ appear on the screen!

7.  >Let’s add a background!

Somewhere above where <code>animalFacts</code> is defined, create a constant named background. Set its value to a <code>< img /></code> element.

Now let’s give it some attributes:

    Give it a class of 'background'
    Let’s use 'ocean' for alt.
    Finally, use '/images/ocean.jpg' as the value of src.

8.  >Let’s reformat the JSX expression stored in <code>animalFacts</code> to include the <code>background</code> variable.

Wrap the current <code>< h1 ></code> element and our new <code>background</code> variable inside of <code>< div >< /div ></code> tags. Since the expression is going to be multiple lines, wrap it in parentheses.

Click Save. If everything is working as it should, we should see our background image showing up underneath the title!

9.  >Use a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank"><code>for...in</code> loop</a> to iterate over the animals object that we’re importing on line 1. Before the animalFacts definition, define an images array. For each animal, add a new <img /> to that array.

Assuming <code>animal</code> is the placeholder variable in your <code>for...in</code> loop, each image should have the following attributes:

    1. key: {animal}
    className: 'animal'
    alt: {animal}
    src: {animals[animal].image}
    aria-label: {animal}
    role: 'button'

10. >Now that we have our array of images, let’s inject it into the JSX expression.

    1. >Within the <code>animalFacts</code> JSX, underneath <code>{background}</code>, create a <code>< div ></code>. Give it a className attribute and set it equal to <code>'animals'</code>. Nest the array of images inside of this element.

    2. >Finally, click Save. We should see our animals!

11. >Now that we have our animals displaying on the screen, we’re ready to add an event listener! But first, let’s write a function to handle this event.

    1. >Create a function <code>displayFact()> that takes one parameter <code>e</code>, the event. We want this function to pick a random fun fact based on the selected animal.
    2. >Inside of the function, use <code>e.target.alt</code> to get the name of the animal being clicked.
    3. >Generate a random index and use it to access an element in the animal’s <code>.facts</code> array.
    4. >Save the fun fact in a variable.

12. >We need a place to display our facts. Create an empty <code>< p ></code> element in <code>animalFacts</code> and give it an <code>id</code> attribute equal to <code>'fact'</code>.

13. >We’ll need to include the event listener with each <code>< img ></code> and edit the event listener so that it displays the fact in our new <code>< p ></code> element.

    1. >In the <code>for...in</code> loop, inside each <code>< img ></code>, add an <code>onClick</code> event listener that calls <code>displayFact</code>.
    2. >Inside <code>displayFact()</code> use <code>document.getElementById('fact')</code> to grab the <code>< p ></code> element where we’ll add our fact. Change the <code>.innerHTML</code> of the <code>< p ></code> element to our randomly selected fact.

Now save the code and click on an animal. We should see a fact pop up on the screen!


14. >
Let’s add one last feature to our awesome app!

Create a <code>showBackground</code> constant. You can set its value to either <code>true</code> or <code>false</code>.

If <code>showBackground</code> is <code>true</code>, <code>background</code> should show up. If it’s <code>false</code>, it should not. Use the <code>&&</code> operator in <code>animalFacts</code> to implement this feature.

Toggle the value of <code>showBackground</code> between <code>true</code> and <code>false</code> and save the code to see if you got it working!

<strong>Optional Task:</strong> In addition to the AND <code>&&</code> operator, we can use the OR <code>||</code> operator. Given a list of variables or expressions, <code>||</code> will return the value of the first one whose boolean evaluates to <code>true</code>.

Considering that the boolean of an empty string is <code>false</code>, can you think of a way to use <code>||</code> to replace the ternary operator in the heading?


## Challenges and Credits
This project was a challenge from the Full Stack Developer course on Codeacademy's website.
<br>
**JavaScript and CSS codes were provided and we had to code the HTML.**
<br>

## Credits
www.codecademy.com
### License
MIT License

Copyright (c) 2025 Adanta Griffin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.