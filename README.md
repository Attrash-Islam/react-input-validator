# Intro
react-input-validator is a input SUPER class validator, a clever container for pattern matches, which is so light without any special dependencies at all,
The main file is InputValidator.js which is included inside InputValidator folder, and that class is an instance of React.component class which is responsible
for appending classes for the current state of the input, plus linking the input change to outside passed function.

# Usage
You need to extends this small class and just write your own pattern logic, and the SUPER class will handle the validation status,
and will verify from the entered value for every "change" by depending on the passed function from the outside world.

# States
There are 4 basic state for the input:
- sn-valid: which indicates that the input is valid
- sn-not-valid: which indicates that the input is not valid
- sn-dirty: which indicates that the input is dirty
- sn-loading: which indicates that the input is loading (checking pattern)

# Validation timer
The validation is checked when the user has stop writing for one complete second to follow the UI principles
<img src="https://cdn.rawgit.com/Attrash-Islam/react-input-validator/master/validation_process.png" />

# Install
npm install react-input-validator

# Examples
<img src="https://cdn.rawgit.com/Attrash-Islam/react-input-validator/master/Examples.gif" />
