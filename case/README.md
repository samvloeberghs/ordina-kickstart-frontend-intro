**Important:**
In every step or part of this usecase you will have to keep in mind that later on we want to make this responsive. The first parts are easy and quick steps, but the key is to keep this responsiveness in mind at all times.
Also remember to always use the correct element for preserving semantics of the content.


# Prerequisites

first install the dependencies:

    npm install
    bower install

run the webapp using

    grunt serve


# The case

## Part #1:
Building a page and styling it

- Create a wrapper and center the layout with a width of 800px
- Use the logo in the heading and put it on the left
- Build a navigation of 3 items ( home, detail & contact ) and put it on the right
- Center the text of the footer

## Part #2:
Using correct semantic elements

- Create an overview of the 3 articles on the homepage ( index.html ) and align them next to each other
- Create a detailpage which is the full version of a blogpost ( detail.html )

## Part #3:
Building a form

- Build a form with 4 fields and use the correct HTML element
    - name ( required )
    - email ( required )
    - occupation: ( set: analyst / developer / architect ) ( required )
    - general remarks

- Create some CSS classes to indicate that a field is incorrect

## Part #4:
JavaScript + HTML5 form validation

- Write some JavaScript to check if the name & occupation is provided + check if the email is correct
- If not correct, emphasise the field with your CSS class to indicate that it is incorrect.
- Show a message related to the input field explaining why it is not correct

## Part #5:
Making it responsive

- Make sure that on a mobile device ( < 640px ) the articles on the homepage are full width and aligned beneath each other
- Resize the logo in the header to be more compact
- Replace the normal navigation with a select navigation so that when you the select, you navigate to the appropriate page




