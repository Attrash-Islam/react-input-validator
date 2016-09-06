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
            <div className={'form-group' + super.getValidationClass()}>
                <label htmlFor="phone-input">رقم الهاتف</label>
                <input type="text"
                       ref={node => this.state.phoneRef = node}
                       onChange={() => { super.onInputChange(this.state.phoneRef, this.validatePhone) }}
                       className="form-control" id="phone-input" />
            </div>
        )
    }

    validatePhone() {
        let phoneRegex = /^[0-9][0-9][0-9](-?)[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
        if(phoneRegex.test(this.state.phoneRef.value) && !this.state.valid) {
            return true;
        } else if (!phoneRegex.test(this.state.phoneRef.value) && this.state.valid) {
            return false;
        }
    }

}


export default PhoneInput;
