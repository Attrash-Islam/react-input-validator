# Intro
react-input-validator is a input SUPER class validator, a clever container for pattern matches, which is so light without some special dependencies,
The main file is InputValidator.js which is included inside InputValidator folder, and that class is an instance of React.component class which is responsible
for appending classes for the current state of the input, plus linking the input change to outside passed function.

# Usage
You need to extends this small class and just write your own pattern logic, and the SUPER class will handle the validation status,
and will verify from the entered value for every "change" by depending on the passed function from the outside world.

# Install
npm install react-input-validator

# Examples
<img src="https://cdn.rawgit.com/Attrash-Islam/react-input-validator/master/Examples.gif" />
