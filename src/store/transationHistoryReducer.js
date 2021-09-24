
let oldData =[ {
    discription : "",
    transationAmount : 0
} ]

export default function transationHistoryReducer(initialHistory = oldData , newHistory){


   if ( newHistory.type == 'NEW_HISTORY')   {

    oldData.push(newHistory.payload);

   } else if (newHistory.type == 'DELETE_HISTORY'){
             
    oldData.splice(newHistory.payload.index , 1);

   }


   return oldData;



}