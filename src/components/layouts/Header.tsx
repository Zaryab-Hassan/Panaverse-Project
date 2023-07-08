import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import {ShoppingCart} from "lucide-react"
const Header =  () => {
    return(
        <div className = "flex justify-around items-center bg-white text-black mt-6">
            <Image src = {logo} alt = "logo"/>
            <ul className = "flex gap-x-10">
                <li className = "text-lg">
                    <Link href = "/">
                        Female
                    </Link>
                    </li>
                <li className = "text-lg">
                <Link href = "/">
                        Male
                    </Link>
                </li>
                <li className = "text-lg">
                <Link href = "/">
                        Kids
                    </Link>
                </li>
                <li className = "text-lg">
                <Link href = "/">
                        All Products
                    </Link>
                </li>
            </ul>
            <div className = "h-10 w-10 rounded-full bg-blue-200">
                <ShoppingCart className = "mt-2 ml-1.5"></ShoppingCart>
            </div>
        </div>
    )
}
export default Header