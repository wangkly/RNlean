// Generate four random hex digits. 
exports.S4=()=> { 
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
 }; 
 // Generate a pseudo-GUID by concatenating random hexadecimal. 
 exports.guid = () => { 
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()); 
 }; 