import { useEffect, useState } from "react"

const AdminHooks = email => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdminLoading, setisAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://sales-ex-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin)
                    setisAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default AdminHooks