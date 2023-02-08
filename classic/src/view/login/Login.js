Ext.define('LoanApi.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'LoanApi.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false,
            required: true,
            errorTip: {
                anchor: true,
                align: 'l-r?'
            },
            errorTarget: 'under'
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            required: true,
            errorTip: {
                anchor: true,
                align: 'l-r?'
            },
            errorTarget: 'under'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        },
        {
            text: 'Register Page',
            formBind: false,
            listeners: {
                click: 'onRegisterPageClick'
            }
        }]
    }
});