import {Button} from "@/components/ui/button";
import Link from "next/link";
export const Footer = () => {
    return (
        <div className="bg-white fixed bottom-0 flex items-center h-14 px-4  w-full  border-t">
            <div className="flex justify-between mx-auto items-center w-full md:max-w-screen-xl">
            <section className="md:block hidden">
                logo
            </section>
            <section className="flex items-center justify-between w-full md:w-auto space-x-4">
                <div>
                <Button  size={'sm'} variant='ghost'>
                    Privacy Policy
                </Button>
                </div>
                <div>
                <Button size={'sm'} variant='ghost'>
                    Terms of Service
                </Button>
                </div>
            </section>  
            </div>
            
        </div>
    )
}