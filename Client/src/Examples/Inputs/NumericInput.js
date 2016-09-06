/**
 * Created by isattrash on 8/30/16.
 */

import React from 'react';
import InputValidator from '../../InputValidator/InputValidator';

class NumericInput extends InputValidator {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'form-group' + super.getValidationClass()}>
                <label htmlFor="numeric-input">رقم الهوية</label>
                <input type="number"
                       ref={node => this.state.numericInputRef = node}
                       onChange={() => { super.onInputChange(this.state.numericInputRef, this.validateNumericInput) }}
                       className="form-control"
                       id="numeric-input" />
            </div>
        )
    }

    validateNumericInput() {
        let numericPattern = /^\d*$/;
        if(numericPattern.test(this.state.numericInputRef.value)) {
            return true;
        } else {
            return false;
        }
    }

}

export default NumericInput;