/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        let name = new RegExp('^[a-zA-Z-]{2}[a-zA-Z- ]+$');

        if (name.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits. It may or may not include parentheses, spaces,
     * and dashes.
     */
    phone: function (input) {
        let phone = new RegExp('^[0-9- ()]{1,15}$');
        // ^[0-9- ()]{1,15}$

        if (phone.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        let email = new RegExp('^[a-zA-Z][a-zA-Z0-9_]+\\.?([a-zA-Z_]+)?@[a-zA-Z]+\\.[a-z]{2,3}\\.?([a-z]{2})?$');

        if (email.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },


    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by one of {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        let address = new RegExp('^[0-9]{1,4} [a-zA-Z ]* (Ave|Park|St|Lane|Blvd)$');

        if (address.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        let username = new RegExp('^[a-zA-Z][a-zA-Z0-9]{1,15}$');

        if (username.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
        let url = new RegExp('^https?:\/\/[a-z]+\\.(com|org)\/?([a-z]+)?\/?([a-z]+)?\\.?(html)?$');

        if (url.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },


    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
        let ipaddr = new RegExp('^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$');

        if (ipaddr.test(input) === true) {
            return true;
        } else {
            return false;
        }
    },
};

