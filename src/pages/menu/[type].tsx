import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Menu () {
    const router = useRouter();
    const { type } = router.query;

    useEffect(() => {
        console.log('type', type);
    },[router])

    return (
        <div></div>
    )
}