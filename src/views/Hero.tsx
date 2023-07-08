import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import picture from "/public/picture.webp"
import b1 from "/public/Featured1.webp"
import b2 from "/public/Featured2.webp"
import b3 from "/public/Featured3.webp"
import b4 from "/public/Featured4.webp"
const Hero = () => {
    return(
        <div className = "text-black flex px-10 gap-28 mt-8">
            {/*Left Side*/}
            <div>
                <Badge className = "text-lg font-bold px-3 py-3 rounded-lg bg-blue-200 hover:bg-blue-200 text-blue-700 mt-8"> 
                    Sale 70%
                </Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5 text-zinc-800">
                    An Industrial Take on <br/> Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-4">
                    Anyone can beat you but no one can beat your <br/> outfit as long as you wear Dine outfits.
                </p>
                <div>
                    <Button className = "bg-zinc-800 text-white mt-4 hover:bg-zinc-800">
                        <ShoppingCart className = "mr-2"/>
                        Start Shopping
                    </Button>
                </div>
                <div className = "flex justify-between mt-40">
                    <Image src = {b1} alt = "BAZAAR"/>
                    <Image src = {b2} alt = "BUSTLE"/>
                    <Image src = {b3} alt = "VERSACE"/>
                    <Image src = {b4} alt = "INSTYLE"/>
                </div>
            </div>
            {/*Right Side*/}
            <div className = "rounded-full bg-red-100 ml-5">
                <Image src = {picture} alt = "picture"/>
            </div>
        </div>
    )
}
export default Hero 