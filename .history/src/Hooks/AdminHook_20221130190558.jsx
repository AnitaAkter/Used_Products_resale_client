import { useEffect, useState } from "react"

const AdminHooks = email =>{
    const [isAdmin , setIsAdmin] = useState(false);
    const [isAdminLoading,setisAdminLoading]= useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://server-assignment-12.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin)
                setisAdminLoading(false)
            })
        }
    },[email])
    return[isAdmin, isAdminLoading]
}

export default useAdmin