/**
 * Created by isattrash on 8/30/16.
 */

import React from 'react';
import InputValidator from '../../InputValidator/InputValidator';

class IdCardInput extends InputValidator {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'relative-pos form-group' + super.getValidationClass()}>
                <label htmlFor="id-card-input">Id Card:</label>
                <input type="text"
                       ref={node => this.idCardInputRef = node}
                       onChange={() => { super.onInputChange(this.idCardInputRef, this.validateIdCard) }}
                       className="form-control"
                       id="id-card-input" />
                <i className="hidden fa fa-spin fa-spinner"></i>
            </div>
        )
    }

    validateIdCard() {
        let idCardPattern = /^[0-9]{9}$/; //Pattern: 9 digits
        if(idCardPattern.test(this.idCardInputRef.value)) {
            return true;
        } else {
            return false;
        }
    }

}

export default IdCardInput;