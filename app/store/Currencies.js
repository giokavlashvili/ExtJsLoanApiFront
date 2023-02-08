Ext.define('LoanApi.store.Currencies',{
    extend:'Ext.data.Store',
    alias:'store.Currencies',
    model:'LoanApi.model.Currencies',
    fields:['id','name'],
    storeId:'CurrenciesStore',
    proxy:{
        type:'ajax',
        url:'https://localhost:7233/api/v1/Currency/GetCurrencies',
        reader: {
            type: 'json'
        },
        headers: {
            Authorization: 'Bearer ' + window.localStorage.AccessToken
        }
    },
    autoLoad:true,
    storeId:'CurrenciesStore'
});