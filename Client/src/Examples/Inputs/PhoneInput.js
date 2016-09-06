/**
 * Created by isattrash on 8/24/16.
 */
import React from 'react';
import InputValidator from '../../InputValidator/InputValidator';

class PhoneInput extends InputValidator {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'relative-pos form-group' + super.getValidationClass()}>
                <label htmlFor="phone-input">Phone Number:</label>
                <input type="text"
                       ref={node => this.state.phoneRef = node}
                       onChange={() => { super.onInputChange(this.state.phoneRef, this.validatePhone) }}
                       className="form-control" id="phone-input" />
                <i className="hidden fa fa-spin fa-spinner"></i>
            </div>
        )
    }

    validatePhone() {
        //Pattern: xxx-xxxxxxx || xxxxxxxxxx
        let phoneRegex = /^[0-9][0-9][0-9](-?)[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
        if(phoneRegex.test(this.state.phoneRef.value) && !this.state.valid) {
            return true;
        } else if (!phoneRegex.test(this.state.phoneRef.value) && this.state.valid) {
            return false;
        }
    }

}


export default PhoneInput;
