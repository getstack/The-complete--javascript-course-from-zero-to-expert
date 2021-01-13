// Problem Statment
// Find  BMI of Jhon and Mark
const massMark = 78 ;
const  heightMark = 1.69 ;
const massJhon = 92 ;
const  heightJhon = 1.95 ;  

const markBMI= massMark  / (heightMark * heightMark);
const jhonBMI = massJhon  / (heightJhon * heightJhon);
const  markhigherBMI = markBMI > jhonBMI ;

alert ( markhigherBMI); 
