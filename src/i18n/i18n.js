import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    vi: {
        translation: {
            "navbar-new cars": process.env.REACT_APP_NAVBAR_VI_NEWCARS,
            "navbar-used cars": process.env.REACT_APP_NAVBAR_VI_USEDCARS,
            "navbar-reviews": process.env.REACT_APP_NAVBAR_VI_REVIEWS,
            "navbar-new": process.env.REACT_APP_NAVBAR_VI_NEW,
            "navbar-search": process.env.REACT_APP_NAVBAR_VI_SEARCH,
            "login-sign in": process.env.REACT_APP_LOGIN_VI_SIGNIN,
            "login-account": process.env.REACT_APP_LOGIN_VI_ACCOUNT,
            "login-username": process.env.REACT_APP_LOGIN_VI_USERNAME,
            "login-password": process.env.REACT_APP_LOGIN_VI_PASSWORD,
            "login-forgot": process.env.REACT_APP_LOGIN_VI_FORGOT,
            "login-login": process.env.REACT_APP_LOGIN_VI_LOGIN,
            "login-hello": process.env.REACT_APP_LOGIN_VI_HELLO,
            "login-instruct": process.env.REACT_APP_LOGIN_VI_INSTRUCT,
            "login-signup": process.env.REACT_APP_LOGIN_VI_SIGNUP,
            "register-create": process.env.REACT_APP_REGISTER_VI_CREATEACCOUNT,
            "register-account": process.env.REACT_APP_REGISTER_VI_ACCOUNT,
            "register-username": process.env.REACT_APP_REGISTER_VI_USERNAME,
            "register-password": process.env.REACT_APP_REGISTER_VI_PASSWORD,
            "register-confirm": process.env.REACT_APP_REGISTER_VI_CONFIRMPASSWORD,
            "register-signup": process.env.REACT_APP_REGISTER_VI_SIGNUP,
            "register-welcome": process.env.REACT_APP_REGISTER_VI_WELCOMEBACK,
            "register-instruct": process.env.REACT_APP_REGISTER_VI_INSTRUCT,
            "register-sign in": process.env.REACT_APP_REGISTER_VI_SIGNIN
        }
    },
    en: {
        translation: {
            "navbar-new cars": process.env.REACT_APP_NAVBAR_EN_NEWCARS,
            "navbar-used cars": process.env.REACT_APP_NAVBAR_EN_USEDCARS,
            "navbar-reviews": process.env.REACT_APP_NAVBAR_EN_REVIEWS,
            "navbar-new": process.env.REACT_APP_NAVBAR_EN_NEW,
            "navbar-search": process.env.REACT_APP_NAVBAR_EN_SEARCH,
            "login-sign in": process.env.REACT_APP_LOGIN_EN_SIGNIN,
            "login-account": process.env.REACT_APP_LOGIN_EN_ACCOUNT,
            "login-username": process.env.REACT_APP_LOGIN_EN_USERNAME,
            "login-password": process.env.REACT_APP_LOGIN_EN_PASSWORD,
            "login-forgot": process.env.REACT_APP_LOGIN_EN_FORGOT,
            "login-login": process.env.REACT_APP_LOGIN_EN_LOGIN,
            "login-hello": process.env.REACT_APP_LOGIN_EN_HELLO,
            "login-instruct": process.env.REACT_APP_LOGIN_EN_INSTRUCT,
            "login-signup": process.env.REACT_APP_LOGIN_EN_SIGNUP,
            "register-create": process.env.REACT_APP_REGISTER_EN_CREATEACCOUNT,
            "register-account": process.env.REACT_APP_REGISTER_EN_ACCOUNT,
            "register-username": process.env.REACT_APP_REGISTER_EN_USERNAME,
            "register-password": process.env.REACT_APP_REGISTER_EN_PASSWORD,
            "register-confirm": process.env.REACT_APP_REGISTER_EN_CONFIRMPASSWORD,
            "register-signup": process.env.REACT_APP_REGISTER_EN_SIGNUP,
            "register-welcome": process.env.REACT_APP_REGISTER_EN_WELCOMEBACK,
            "register-instruct": process.env.REACT_APP_REGISTER_EN_INSTRUCT,
            "register-sign in": process.env.REACT_APP_REGISTER_EN_SIGNIN
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })