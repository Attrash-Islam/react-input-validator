
<h1>react-input-validator</h1>
<h3>Light input SUPER class validator</h3>

<br /><br />
<img src="https://cdn.rawgit.com/Attrash-Islam/react-input-validator/master/Images/Intro.gif" />


# Intro
react-input-validator is a light input SUPER class validator, a clever container for pattern matches, which is so light without any special dependencies at all,
The main file is InputValidator.js which is included inside InputValidator folder, and that class is an instance of React.component class which is responsible
for appending classes for the current state of the input.

# Usage
You need to extends this small class and just write your own pattern logic, and the SUPER class will handle the validation status,
and will verify from the entered value for every "change" by depending on the passed REQUIRED function from the outside world through the prop `onInputChange`, and to pass the REQUIRED params which is (nodeElement, PatternValidatorFn) .

# States
There are 4 basic states for the input (can be grapped by super.getValidationClass Fn):
- sn-valid: which indicates that the input is valid
- sn-not-valid: which indicates that the input is not valid
- sn-dirty: which indicates that the input is dirty
- sn-loading: which indicates that the input is loading (checking pattern)

# Validation timer
The validation is checked when the user has stopped writing for one complete second to follow the UI principles
(In the meanwhile the sn-loading will be revealed into super.getValidationClass() method)
<br /><br /><br />
<img src="https://cdn.rawgit.com/Attrash-Islam/react-input-validator/master/Images/validation_process.png" />

# Install
<pre>npm install react-input-validator</pre>

# Running Examples
<pre>npm run build</pre>
Then go to: <pre>file:///{Your Path}/react-input-validator/Client/index.html</pre>

# Example (See Examples folder for more implementations examples)


```
import InputValidator from 'react-input-validator';

class PhoneInput extends InputValidator {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'relative-pos form-group' + super.getValidationClass()}>
                <label htmlFor="phone-input">Phone Number:</label>
                <input type="text"
                       ref={node => this.phoneRef = node}
                       onChange={() => { super.onInputChange(this.phoneRef, this.validatePhone) }}
                       className="form-control" id="phone-input" />
                <i className="hidden fa fa-spin fa-spinner"></i>
            </div>
        )
    }

    validatePhone() {
        //Pattern: xxx-xxxxxxx || xxxxxxxxxx
        let phoneRegex = /^[0-9][0-9][0-9](-?)[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
        if(phoneRegex.test(this.phoneRef.value)) {
            return true;
        } else if (!phoneRegex.test(this.phoneRef.value)) {
            return false;
        }
    }

}


export default PhoneInput;
```

