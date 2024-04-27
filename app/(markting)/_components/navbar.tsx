import {Button} from "@/components/ui/button";
import Link from "next/link";
export const Navbar = () => {
    return (
        <div className="bg-white fixed top-0 flex items-center h-14 px-4  w-full shadow-sm border-b">
            <div className="flex justify-between mx-auto items-center w-full md:max-w-screen-xl">
            <section className="md:block hidden">
                logo
            </section>
            <section className="flex items-center justify-between w-full md:w-auto space-x-4">
                <div>
                <Button asChild size={'sm'} variant='outline'>
                    <Link href='/sign-in'>
                        sign in
                    </Link>
                </Button>
                </div>
                <div>
                <Button size={'sm'} asChild>
                <Link href='/sign-up'>
                    Get Task for Free
                </Link>
                </Button>
                </div>
            </section>  
            </div>
            
        </div>
    )
}