Ext.define('LoanApi.view.login.Register', {
    extend: 'Ext.window.Window',
    xtype: 'registerPage',

    requires: [
        'LoanApi.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Register Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'username',
                allowBlank: false,
                required: true,
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                },
                errorTarget: 'under',
                validators: function (value) {
                    return /^[a-zA-Z]{6,}$/.test(value) ? true : 'User name must contain at least 5 characters';
                }
            }, 
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false,
                required: true,
                validators: function (value) {
                    return /^[a-zA-Z]{6,}$/.test(value) ? true : 'Your password must contain at least 6 characters';
                },
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                },
                errorTarget: 'under'
            },
            {
                xtype: 'textfield',
                name: 'confirmpassword',
                inputType: 'password',
                fieldLabel: 'Confirm Password',
                allowBlank: false,
                required: true,
                validators: function (value) {
                    return /^[a-zA-Z]{6,}$/.test(value) ? true : 'Your password must contain at least 6 characters';
                },
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                },
                errorTarget: 'under'
            },
            {
                xtype: 'textfield',
                name: 'firstname',
                fieldLabel: 'firstname',
                allowBlank: false,
                required: true,
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                }
            }, 
            {
                xtype: 'textfield',
                name: 'lastname',
                fieldLabel: 'lastname',
                allowBlank: false,
                required: true,
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                }
            },
            {
                xtype: 'textfield',
                name: 'personalnumber',
                fieldLabel: 'Personal Number',
                allowBlank: false,
                required: true,
                validators: function (value) {
                    return /^[0-9]{11,}$/.test(value) ? true : 'Your password must contain 11 characters';
                },
                errorTip: {
                    anchor: true,
                    align: 'l-r?'
                },
                errorTarget: 'under'
            }
        ],
        buttons: [{
            text: 'Register',
            formBind: true,
            listeners: {
                click: 'onRegisterClick'
            }
        },{
            text: 'Login Page',
            formBind: false,
            listeners: {
                click: 'onLoginPageClick'
            }
        }]
    }
});