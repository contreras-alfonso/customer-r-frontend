const isNumber = (valor) => /^[0-9]+$/.test(valor);

const isEmail = (valor) => {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(valor);
};

const isFormValid = (
  dni,
  names,
  lastnames,
  birthdate,
  phone,
  email,
  bank,
  otherBank,
  accountNumber,
  password
) => {
    //dni
    if(dni==="") return {status:false,msg:'DNI is required.'}
    if(dni.trim().length !== 8) return {status:false,msg:'DNI must have 8 digits.'}
    if(!isNumber(dni.trim())) return {status:false,msg:'DNI must be a number.'}
    //names
    if(names==="") return {status:false,msg:'Names are required.'}
    //lastnames
    if(lastnames==="") return {status:false,msg:'Lastnames are required.'}
    //birthdate
    if(birthdate==="") return {status:false,msg:'Birthdate is required.'}
    //phone
    if(phone==="") return {status:false,msg:'Phone number is required.'}
    // if(phone.trim().length !== 9) return {status:false,msg:'Phone number must have 8 digits.'}
    if(!isNumber(phone.trim())) return {status:false,msg:'Phone number must be a number.'}
    //email
    if(email==="") return {status:false,msg:'Email is required.'}
    if(!isEmail(email.trim())) return {status:false,msg:'Please enter a valid email.'}
    //bank
    if(bank==="" && otherBank==="" ) return {status:false,msg:'Bank is required.'}
    //verify banks
    if(bank!=="" && otherBank !== "") return {status:false,msg:'You can only select or write one bank for the customer.'}
    //acountNumber
    if(accountNumber==="") return {status:false,msg:'Account or cci number is required.'}
    if(!isNumber(accountNumber.trim())) return {status:false,msg:'Account or cci number must be a number.'}
    //password
    if(password==="") return {status:false,msg:'Password is required.'}

    return {status:true,msg:''}
    
};

export {
    isFormValid,
    isEmail,
}