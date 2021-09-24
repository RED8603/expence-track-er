
let  oldData = {
    balance : 0,
    income : 0,
    expence : 0
}



export default function transationReducer(initialBalance = oldData, newBalance){


if (newBalance.type == "INCOME"){
    initialBalance.income += +newBalance.payload.income;
}
else if (newBalance.type == "EXPENCE"){
    initialBalance.expence += +newBalance.payload.expence;
}else if (newBalance.type == "DELETE_EXPENCE"){
    initialBalance.expence -= +newBalance.payload.expence;
}else if (newBalance.type == "DELETE_INCOME"){
    initialBalance.income -= +newBalance.payload.income;
}




initialBalance.balance =   oldData.income  +  oldData.expence ;


return initialBalance ;


}