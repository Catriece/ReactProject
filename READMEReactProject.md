Exercise 1: Project Structure
Create a new folder within src/ called components/
Change your App.js to App.jsx. This will enable more VSCode emmet abbreviations for the file.
Change the contents of your App.jsx to be a class with a render method that returns <div><h1>Hello World</h1></div>
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}


Exercise 2: Managing State
Manage a todo list and controlled input with state.

Create a constructor for the App class
In the body of the constructor, assign an object to a property called state
On the state object, add two properties:
list
text
Assign list as the following array: ["ready", "set", "GO"]
Assign text as an empty string

Exercise 3: Rendering Lists
A rendered list in React is an array of JSX that we return to the ReactDOM. Render the state list as a React rendered list.

Update the return statement of the render method to have an ul underneath the h1.
As a child of the ul, call this.state.list.map within a JSX expression
The callback function passed into the map method should return a li element
For each string in this.state.list that you map over, use the string value as the text content of the returned li
Lastly, add a key property to the returned li that is set to the value of the element's index in this.state.list

Exercise 4: Controlled Inputs
A controlled input in React is an input where it's value attribute is set to a state value, and when the value of the input changes, the component state changes. Create a controlled input so that this.state.text is bound to the input.

Update the return statement of the render method to have an input above the ul.
Add a value prop to the input that is set to this.state.text
Add an onChange prop to the input that is set to a function that will:
Receive the HTMLChangeEvent as a parameter
Call this.setState() to update this.state.text to e.target.value (the value that is in the input)
Exercise 5: Updating State
Add functionality to add a new item to the todo list.

Wrap the input element in a form element
Add a button element below the input element at the bottom of the form element
Add a type attribute of "submit"
Add text content of "Add"
Create a method named onSubmit on the App class that will:
Receive the HTMLSubmitEvent as a parameter
Call the preventDefault() method on the parameter event
Call this.setState() to update the this.state.list value to a new array contains all of the previous list items and the current this.state.text
Add an onSubmit prop to the form element that is set to the method this.onSubmit
In the constructor, bind this to the this.onSubmit method
this.onSubmit = this.onSubmit.bind(this);
At this point, you should be able to type a new task in the input element, click add, and see the new list item displayed in the unordered list on the screen!

