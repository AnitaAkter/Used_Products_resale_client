import { useEffect, useState } from "react"

const SellerHooks = email => {
    const [isSeller, setisSeller] = useState(tryu);
    const [isSellerLoading, setisSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setisSeller(data.isSeller)
                    setisSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default SellerHooks