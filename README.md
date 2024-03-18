<h1 align="center">Welcome to One Dionys - Cookie Consent Manager! 👋 </h1>

<p align="center">A component to display notifications and manage user consent to the use of cookies in web applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-cookie-consent-manager?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-cookie-consent-manager?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-cookie-consent-manager?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-cookie-consent-manager?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-cookie-consent-manager.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-cookie-consent-manager?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-cookie-consent-manager?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const CookieConsentManager = require('./src/cookieConsentManager');

// Initialize CookieConsentManager
const cookieManager = new CookieConsentManager();

// Accept cookies
cookieManager.acceptCookies('analytics');

// Revoke cookies
cookieManager.revokeCookies('analytics');

// Check if consented to a cookie
const hasConsented = cookieManager.hasConsented('analytics');
console.log(hasConsented); // Output: true or false
```

#### Explanation

* This package provides a simple way to manage user consent for cookies in a web application. It allows accepting, revoking, and checking consent for specific cookies.

#### Return Value

* `acceptCookies(cookieName)`: Accepts the specified cookie.
* `revokeCookies(cookieName)`: Revokes consent for the specified cookie.
* `hasConsented(cookieName)`: Checks if consent has been given for the specified cookie. Returns true if consented, otherwise false.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Cookie Consent Manager is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Cookie Consent Manager? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
