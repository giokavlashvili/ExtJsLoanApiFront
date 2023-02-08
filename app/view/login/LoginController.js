Ext.define('LoanApi.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(btn) {
        var me = this;

        var win = btn.up('window'), form = win.down('form');

        let formValues = form.getForm().getValues();
        //console.log('User-----------------------------',formValues.username, formValues.password);
        let userName = formValues.username;
        let password = formValues.password;

        Ext.Ajax.request({
            url: 'https://localhost:7233/api/v1/Authenticate/Login',
            async: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            jsonData: {
                username :userName,
                password: password
            },
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);

                // Set the localStorage
                localStorage.setItem("AccessToken", obj.accessToken);
        
                // Remove Login Window
                me.getView().destroy();
        
                // Add the main view to the viewport
                Ext.create({
                    xtype: 'app-main'
                });
            },
       
            failure: function(response, opts) {
                let responseModel = Ext.decode( response.responseText );
                Ext.Msg.alert('Status', 'Request Failed: ' + responseModel['detail']);
                //console.log('server-side failure with status code ',  response);
            }
        });
    },

    onRegisterPageClick: function() {
        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'registerPage'
        });
    },

    onLoginPageClick: function(){
        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'login'
        });
    },

    onRegisterClick: function(btn){

        var me = this;

        var win = btn.up('window'), form = win.down('form');

        let formValues = form.getForm().getValues();

        Ext.Ajax.request({
            url: 'https://localhost:7233/api/v1/Authenticate/RegisterUser',
            async: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            jsonData: {
                userName :formValues.username,
                firstName: formValues.firstname,
                lastName: formValues.lastname,
                personalNumber:formValues.personalnumber,
                password: formValues.password,
                confirmPassword:formValues.confirmpassword
            },
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
        
                // Remove Login Window
                me.getView().destroy();
        
                // Add the main view to the viewport
                Ext.create({
                    xtype: 'login'
                });
            },
       
            failure: function(response, opts) {
                let responseModel = Ext.decode( response.responseText );
                //console.log(responseModel);
                Ext.Msg.alert('Status', 'Request Failed: ' + Object.keys(responseModel.errors)[0] + '  -  ' + responseModel.errors[Object.keys(responseModel.errors)[0]][0]);
                //console.log('server-side failure with status code ',  response);
            }
        });
    }
});