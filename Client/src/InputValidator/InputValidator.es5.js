'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by isattrash on 8/25/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputValidator = function (_React$Component) {
    _inherits(InputValidator, _React$Component);

    function InputValidator(props) {
        _classCallCheck(this, InputValidator);

        var _this = _possibleConstructorReturn(this, (InputValidator.__proto__ || Object.getPrototypeOf(InputValidator)).call(this, props));

        _this.state = {
            valid: true,
            inputDirty: false,
            loading: false
        };
        return _this;
    }

    _createClass(InputValidator, [{
        key: 'checkDirtyStatus',
        value: function checkDirtyStatus() {
            if (!this.state.inputDirty) {
                this.setState({
                    inputDirty: true
                });
            }
        }
    }, {
        key: 'setLoader',
        value: function setLoader() {
            this.setState({
                loading: true
            });
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(ref, validateFn) {
            var _this2 = this;

            if (!this.state.loading) {
                this.setLoader();
            }
            this.checkDirtyStatus();
            clearTimeout(this.vaildationTimer);
            if (this.props.onInputChange) {
                this.props.onInputChange(ref);
            } else {
                throw 'onInputChange property is required! This function is responsible to \n                    trigger the validation process, mainly: linked with \'change\' or \'click\' events';
            }
            var isValid = validateFn.apply(this, []);
            if (isValid) {
                this.setState({
                    valid: true,
                    loading: false
                });
            } else {
                this.vaildationTimer = setTimeout(function () {
                    _this2.setState({
                        valid: false,
                        loading: false
                    });
                }, 1000);
            }
        }
    }, {
        key: 'getValidationClass',
        value: function getValidationClass() {
            var className = '';
            if (this.state.valid) className += ' sn-valid';else className += ' sn-not-valid';
            if (this.state.inputDirty) className += ' sn-dirty';
            if (this.props.required) className += ' sn-required';
            if (this.state.loading) className += ' sn-loading';

            return className;
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return InputValidator;
}(_react2.default.Component);

exports.default = InputValidator;