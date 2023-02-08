/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('LoanApi.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('AccessToken');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    onCreateLoanClick: function(btn)
    {
        var me = this;

        var win = btn.up('window'), form = win.down('form');

        let formValues = form.getForm().getValues();

        Ext.Ajax.request({
            url: 'https://localhost:7233/api/v1/LoanApplication/CreateApplication',
            async: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + window.localStorage.AccessToken },
            jsonData: {
                LoanTypeId :formValues.LoanTypeId,
                Amount: formValues.Amount,
                CurrencyId: formValues.CurrencyId,
                PeriodPerMonth:formValues.PeriodPerMonth
            },
            success: function(response, opts) {
                // var obj = Ext.decode(response.responseText);
                // console.dir(obj);
        
                // Remove Window
                btn.up('window').close();

                //Update grid data
                Ext.getCmp('loanlist'). getStore(). reload();
            },
       
            failure: function(response, opts) {
                let responseModel = Ext.decode( response.responseText );
                console.log(responseModel);
                Ext.Msg.alert('Status', 'Request Failed: ' + Object.keys(responseModel.errors)[0] + '  -  ' + responseModel.errors[Object.keys(responseModel.errors)[0]][0]);
                //console.log('server-side failure with status code ',  response);
            }
        });
    },
    onUpdateLoanPopupWindowShow: function(win) {
        var view = this.getView(),
            vm = view.getViewModel(),
            rec = view.recordRef;
        //console.log(rec);
        //vm.set('simpson', rec);
        Ext.getCmp('Amount').setValue(rec.data.amount);
        Ext.getCmp('CurrencyId').setValue(rec.data.currency);
        Ext.getCmp('LoanId').setValue(rec.data.id);
        Ext.getCmp('LoanTypeId').setValue(rec.data.loanType);
        Ext.getCmp('PeriodPerMonth').setValue(rec.data.periodPerMonth);
    },
    onUpdateLoanStatusPopupWindowShow: function(win) {
        var userGrid = Ext.getCmp('loanlist');
        if (userGrid.getSelectionModel().hasSelection()) {
            var row = userGrid.getSelectionModel().getSelection()[0];
            
            Ext.getCmp('LoanStatus').setValue(row.data.status);
            Ext.getCmp('UpdateLoanId').setValue(row.data.id);
         }
    },
    onUpdateLoanClick: function(btn)
    {
        var me = this;

        var win = btn.up('window'), form = win.down('form');

        let formValues = form.getForm().getValues();

        var cstore = Ext.data.StoreManager.lookup('CurrenciesStore');
        var ltstore = Ext.data.StoreManager.lookup('LoanTypeStore');

        let currencyStoreRec = cstore.findRecord('name', formValues.CurrencyId);
        let loanTypeStoreRec = ltstore.findRecord('name', formValues.LoanTypeId);

         //debugger;
        Ext.Ajax.request({
            url: 'https://localhost:7233/api/v1/LoanApplication/UpdateApplication',
            async: true,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + window.localStorage.AccessToken },
            jsonData: {
                LoanTypeId : Number.isInteger(formValues.LoanTypeId) ? formValues.LoanTypeId : loanTypeStoreRec.data.id,
                Amount: formValues.Amount,
                CurrencyId: Number.isInteger(formValues.CurrencyId) ? formValues.CurrencyId : currencyStoreRec.data.id,
                PeriodPerMonth:formValues.PeriodPerMonth,
                Id:formValues.LoanId
            },
            success: function(response, opts) {
                // Remove Window
                btn.up('window').close();

                //Update grid data
                Ext.getCmp('loanlist'). getStore(). reload();
            },
       
            failure: function(response, opts) {
                //debugger;
                if(response.responseText)
                {
                    let responseModel = Ext.decode( response.responseText );
                    console.log(responseModel);
                    Ext.Msg.alert('Status', 'Request Failed: ' + Object.keys(responseModel.errors)[0] + '  -  ' + responseModel.errors[Object.keys(responseModel.errors)[0]][0]);
                }
                else
                Ext.Msg.alert('Status', 'Request Failed: ' + response.status);
            }
        });
    },
    onUpdateLoanStatusClick: function(btn)
    {
        var me = this;

        var win = btn.up('window'), form = win.down('form');

        let formValues = form.getForm().getValues();

        var userGrid = Ext.getCmp('loanlist');
        if (userGrid.getSelectionModel().hasSelection()) {
            var row = userGrid.getSelectionModel().getSelection()[0];
            
         }
 

         debugger;
        Ext.Ajax.request({
            url: 'https://localhost:7233/api/v1/LoanApplication/UpdateApplicationStatus',
            async: true,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + window.localStorage.AccessToken },
            jsonData: {
                status : formValues.LoanStatus,
                Id:row.data.id
            },
            success: function(response, opts) {
                // Remove Window
                btn.up('window').close();

                //Update grid data
                Ext.getCmp('loanlist'). getStore(). reload();
            },
       
            failure: function(response, opts) {
                //debugger;
                if(response.responseText)
                {
                    let responseModel = Ext.decode( response.responseText );
                    console.log(responseModel);
                    Ext.Msg.alert('Status', 'Request Failed: ' + Object.keys(responseModel.errors)[0] + '  -  ' + responseModel.errors[Object.keys(responseModel.errors)[0]][0]);
                }
                else
                Ext.Msg.alert('Status', 'Request Failed: ' + response.status);
            }
        });
    }
});
