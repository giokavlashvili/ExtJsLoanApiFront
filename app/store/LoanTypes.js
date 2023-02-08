Ext.define('LoanApi.store.LoanTypes',{
    extend:'Ext.data.Store',
    alias:'store.LoanTypes',
    model:'LoanApi.model.LoanTypes',
    fields:['id','name'],
    proxy:{
        type:'ajax',
        url:'https://localhost:7233/api/v1/LoanType/GetLoanTypes',
        reader: {
            type: 'json'
        },
        headers: {
            Authorization: 'Bearer ' + window.localStorage.AccessToken
        }
    },
    autoLoad:true,
    storeId:'LoanTypeStore'
});