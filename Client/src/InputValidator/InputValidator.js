/**
 * Created by isattrash on 8/25/16.
 */
import React from 'react';

class InputValidator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valid: true,
            inputDirty: false,
            loading: false
        }
    }

    checkDirtyStatus() {
        if(!this.state.inputDirty) {
            this.setState({
                inputDirty: true
            });
        }
    }

    setLoader() {
        this.setState({
            loading: true
        });
    }

    onInputChange(ref, validateFn) {
        if(!this.state.loading) {
            this.setLoader();
        }
        this.checkDirtyStatus();
        clearTimeout(this.vaildationTimer);
        if(this.props.onInputChange) {
            this.props.onInputChange(ref);
        }
        var isValid = validateFn.apply(this, []);
        if(isValid) {
            this.setState({
                valid: true,
                loading: false
            });
        } else {
            this.vaildationTimer = setTimeout(() => {
                this.setState({
                    valid: false,
                    loading: false
                });
            }, 1000);
        }
    }

    getValidationClass() {
        let className = '';
        if(this.state.valid)
            className+= ' sn-valid';
        else
            className += ' sn-not-valid';
        if(this.state.inputDirty)
            className += ' sn-dirty';
        if(this.props.required)
            className += ' sn-required';
        if(this.state.loading)
            className += ' sn-loading';

        return className;
    }

    render() {
        return null;
    }

}

export default InputValidator;