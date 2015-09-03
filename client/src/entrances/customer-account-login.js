import LoginButton from '../components/customer/loginButton';

let buttonElem = document.querySelector('[data-customer-login-button]');
let component = LoginButton.init(buttonElem);
LoginButton.addEventsListeners(component);
