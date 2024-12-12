let Data='';

function StoreData(data)
{
     Data=data;
}

function GetData()
{
    return Data;
}


let loggedIn=false;

function SetLogin(val)
{
    loggedIn=val;
}

function GetLogin()
{
    return loggedIn;
}


export {StoreData,GetData,SetLogin,GetLogin};