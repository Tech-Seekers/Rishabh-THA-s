function _keys(obj) 
 { 
   delete obj.rollno;
    return Object.keys(obj);
}
console.log(_keys({name : "David Rayy", sclass : "VI", rollno : 12}));
