const assert = require('assert');
const CookieConsentManager = require('../src/cookieConsentManager');

describe('CookieConsentManager', () => {
    let cookieManager;

    beforeEach(() => {
        cookieManager = new CookieConsentManager();
    });

    it('should accept cookies', () => {
        cookieManager.acceptCookies('analytics');
        assert.deepStrictEqual(cookieManager.acceptedCookies, ['analytics']);
    });

    it('should revoke cookies', () => {
        cookieManager.acceptCookies('analytics');
        cookieManager.revokeCookies('analytics');
        assert.deepStrictEqual(cookieManager.acceptedCookies, []);
    });

    it('should check if consented to a cookie', () => {
        cookieManager.acceptCookies('analytics');
        assert.strictEqual(cookieManager.hasConsented('analytics'), true);
        assert.strictEqual(cookieManager.hasConsented('marketing'), false);
    });
});
