/**
 * Created by isattrash on 8/24/16.
 */
import React from 'react';
import InputValidator from '../../InputValidator/InputValidator';

class EmailInput extends InputValidator {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'relative-pos form-group' + super.getValidationClass()}>
                <label htmlFor="email-input">Email:</label>
                <input type="text"
                       ref={node => this.emailRef = node}
                       onChange={() => { super.onInputChange(this.emailRef, this.validateEmail) }}
                       className="form-control" id="email-input" />
                <i className="fa fa-spin fa-spinner hidden"></i>
            </div>
        )
    }

    validateEmail() {
        //Pattern: Email pattern
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRegex.test(this.emailRef.value)) {
            return true;
        } else if (!emailRegex.test(this.emailRef.value)) {
            return false;
        }
    }
}


export default EmailInput;
