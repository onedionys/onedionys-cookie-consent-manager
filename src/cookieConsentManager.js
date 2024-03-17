class CookieConsentManager {
    constructor() {
        this.acceptedCookies = this.getAcceptedCookies();
    }

    getAcceptedCookies() {
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        return acceptedCookies ? JSON.parse(acceptedCookies) : [];
    }

    acceptCookies(cookieName) {
        if (!this.acceptedCookies.includes(cookieName)) {
            this.acceptedCookies.push(cookieName);
            localStorage.setItem('acceptedCookies', JSON.stringify(this.acceptedCookies));
        }
    }

    revokeCookies(cookieName) {
        const index = this.acceptedCookies.indexOf(cookieName);
        if (index !== -1) {
            this.acceptedCookies.splice(index, 1);
            localStorage.setItem('acceptedCookies', JSON.stringify(this.acceptedCookies));
        }
    }

    hasConsented(cookieName) {
        return this.acceptedCookies.includes(cookieName);
    }
}

module.exports = CookieConsentManager;
