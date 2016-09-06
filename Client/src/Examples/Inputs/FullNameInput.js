/**
 * Created by isattrash on 8/24/16.
 */
import React from 'react';
import InputValidator from '../../InputValidator/InputValidator';

class FullNameInput extends InputValidator {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'form-group' + super.getValidationClass()}>
                <label htmlFor="name-input">Full Name:</label>
                <input type="text"
                       ref={node => this.state.fullNameRef = node}
                       onChange={() => { super.onInputChange(this.state.fullNameRef, this.validateFullName) }}
                       className="form-control"
                       id="name-input" />
            </div>
        )
    }

    validateFullName() {
        let isNumberPattern = /\d/; // Without numeric chars
        let moreThanTwoChars = /.{2}/; // At least two chars
        if(isNumberPattern.test(this.state.fullNameRef.value)) {
            return false;
        }

        if(!moreThanTwoChars.test(this.state.fullNameRef.value)) {
            return false;
        }

        return true;
    }
}

export default FullNameInput;
