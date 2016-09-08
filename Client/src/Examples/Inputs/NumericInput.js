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
            <div className={'relative-pos form-group' + super.getValidationClass()}>
                <label htmlFor="numeric-input">Number:</label>
                <input type="number"
                       ref={node => this.numericInputRef = node}
                       onChange={() => { super.onInputChange(this.numericInputRef, this.validateNumericInput) }}
                       className="form-control"
                       id="numeric-input" />
                <i className="hidden fa fa-spin fa-spinner"></i>
            </div>
        )
    }

    validateNumericInput() {
        let numericPattern = /^\d*$/;
        if(numericPattern.test(this.numericInputRef.value)) {
            return true;
        } else {
            return false;
        }
    }

}

export default NumericInput;