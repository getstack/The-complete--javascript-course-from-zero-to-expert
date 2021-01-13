const massMark = 78 ;
const  heightMark = 1.69 ;
const massJhon = 92 ;
const  heightJhon = 1.95 ;  

const markBMI= massMark  / (heightMark * heightMark);
const jhonBMI = massJhon  / (heightJhon * heightJhon);

if (markBMI > jhonBMI){

    alert (`MarkBMI ${markBMI} is higher than jhonBMI ${jhonBMI}     `)


}  else {

    
 alert (`jhonBMI ${jhonBMI} is higher than MarkBMI ${markBMI} `)


}


