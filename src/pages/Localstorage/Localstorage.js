const getdata=()=>{
    const getfromlocalstorage=localStorage.getItem("read")

    if(getfromlocalstorage){
        const parsedata=JSON.parse(getfromlocalstorage)
        return parsedata;
    }
    else{
        return [];
    }
}

const setdata=(id)=>{
    const usestoragedata=getdata();
    if(usestoragedata.includes(Number(id))){
        alert("App is already installed")
        

    }
    else{
        usestoragedata.push(id);
        const stringfydata=JSON.stringify(usestoragedata);
        localStorage.setItem("read",stringfydata)
    }

    

}

const remove=(id)=>{
    const storedata=getdata()
    const updatedata=storedata.filter(data=> data!=Number(id))
    localStorage.setItem("read",JSON.stringify(updatedata))

    console.log(updatedata)
}

export {getdata,setdata,remove}