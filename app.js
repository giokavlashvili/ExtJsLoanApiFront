/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'LoanApi.Application',

    name: 'LoanApi',

    requires: [
        // This will automatically load all classes in the LoanApi namespace
        // so that application classes do not need to require each other.
        'LoanApi.*'
    ],

    // The name of the initial view to create.
    //mainView: 'LoanApi.view.main.Main'
});
