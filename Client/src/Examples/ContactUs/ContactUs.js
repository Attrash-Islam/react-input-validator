import React from 'react';
import FullNameInput from '../Inputs/FullNameInput';
import PhoneInput from '../Inputs/PhoneInput';
import EmailInput from '../Inputs/EmailInput';
require('./contactus.scss');

const ContactUs = React.createClass({
    sendValues: function() {
        this.props.onFormSubmit({
            name: this.nameVal,
            phone: this.phoneVal,
            email: this.emailVal,
            city: this.cityVal,
            subject: this.subjectVal,
            msg: this.contentVal
        });
    },
    render: function() {
        return (
            <form id="contactus-form">
                <FullNameInput onInputChange={val => {this.nameVal = val}} />
                <PhoneInput onInputChange={val => {this.phoneVal = val}} />
                <EmailInput onInputChange={val => {this.emailVal = val}} />
                <button type="button" className="btn btn-default"
                        onClick={() => { this.sendValues() }}>
                    إرسال
                </button>
            </form>
        )
    }
});

export default ContactUs;
