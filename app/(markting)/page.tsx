import { Medal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
const MarkingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col justify-center items-center">

           
            <div className="flex text-xs md:text-xl md:p-6 bg-amber-100 rounded-full p-3 items-center text-amber-600 uppercase">
                <Medal className="h-6 w-6 mr-2"/>
                NO1 task management
            </div>
            <div className="text-3xl md:text-6xl font-bold my-4">
                Teskify helps team move
            </div>
            <div className="bg-gradient-to-r md:text-6xl text-3xl from-fuchsia-500 to-blue-500 p-2 px-4 rounded-md  text-white ">
                work forward
            </div>
            <div className="text-center text-slate-500 text-sm md:text-xl mt-4 max-w-xs md:max-w-2xl"> 
                Collaborate with your team and move work forward,manage tasks, track progress, and stay organized.From high-level overviews to detailed task details,Teskify has everything you need to stay on top of your projects.
            </div>
           
            <Button className="mt-6" size='lg' asChild>
                <Link href="/sign-up">
                    Get Taskify for free
                </Link>
            </Button>
            </div>
        </div>
    )
}
export default MarkingPage