import {Badge} from "@/components/ui/badge"
import Image from "next/image"
import event1 from "public/event1.webp"
import event2 from "public/event2.webp"
import event3 from "public/event3.webp"
import {Button} from "@/components/ui/button"
const Promotions = () => {
  return (
    <div className = "mt-20">
        <div className = "flex flex-col items-center">
            <Badge className = "text-blue-700 font-extrabold bg-white hover:bg-white">PROMOTIONS</Badge>
            <p className = "font-sans font-bold text-4xl text-zinc-800">Our Promotions Events</p>

        </div>
        <section className = "flex justify-around mt-10">
            {/*Left Side*/}
            <div className = "flex flex-col">
                <div className = "flex bg-gray-300 px-28 h-48 mb-4">
                    <div>
                        <h1>GET UP TO <span>60%</span></h1>
                        <p>For the summer season</p>
                    </div>
                    <Image className = "object-cover" src = {event1} alt = "event1Image"/>
                </div>
                <div className = "text-white bg-zinc-900 text-center h-48">
                    <div className = "mt-5">
                        <h1>GET <span>30%</span> Off</h1>
                        <p>USE PROMO CODE</p>
                    </div>
                    <Button>DINEWEEKEND SALE</Button>
                </div>
            </div>
            {/*Rigt Side*/}
            <div className = "flex">
                <div className = "bg-orange-100 mr-4">
                    <p className = "font-bold text-lg ml-3 mt-1">Flex Sweatshirt</p>
                    <span className = ""></span>
                    <Image className = "object-fill" src = {event2} alt = "event2Image"/>
                </div>
                <div className = "bg-gray-300">
                    <p className = "font-bold text-lg ml-3 mt-1">Flex Push Button Bomber</p>
                    <Image className = "" src = {event3} alt = "event3Image"/>
                </div>
            </div>
        </section>
    </div>
  )}

export default Promotions