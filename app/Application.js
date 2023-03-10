/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('LoanApi.Application', {
    extend: 'Ext.app.Application',

    name: 'LoanApi',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    init: function() {
        // Ext.Ajax.on('beforerequest', function (conn , options , eOpts) {
        //     var token = window.localStorage.AccessToken;
        //     if (!token) return;
        //     options.headers = options.headers ? {} :
        //     options.headers.Authorization = 'bearer ' + token
        // });
    },

    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("AccessToken");

        // This ternary operator determines the value of the AccessToken key.
        // If AccessToken is empty, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
