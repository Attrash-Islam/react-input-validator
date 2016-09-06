/**
 * Created by isattrash on 8/24/16.
 */
import React from 'react';
import ContactUs from './ContactUs';

const ContactUsContainer = React.createClass({
    submitContactForm: function (contactObj) {
        console.dir(contactObj);
    },
    render: function () {
        return (
            <ContactUs onFormSubmit={this.submitContactForm} />
        )
    }
});

export default ContactUsContainer;
