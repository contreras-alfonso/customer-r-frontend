const backendRoute = import.meta.env.VITE_BACKEND_ROUTE

const addCustomer = async (objCustomer) => {
    const url = `${backendRoute}/add`;
    const response = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(objCustomer),
    })
    return await response.json();
    
}

const getAllCustomers = async (pag) => {
    const url = `${backendRoute}/getAll/${pag}`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'Application/json',
        },
    })
    return await response.json();
}

const getCustomer = async (nameOrDni) => {
    const url = `${backendRoute}/search/${nameOrDni}`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'Application/json',
        },
    })
    return await response.json();
   
}

const loginCustomer = async (objCustomer) => {
    const url = `${backendRoute}/login`;
    const response = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(objCustomer),
    })
    return await response.json();
}


export{
    addCustomer,
    getAllCustomers,
    getCustomer,
    loginCustomer
}