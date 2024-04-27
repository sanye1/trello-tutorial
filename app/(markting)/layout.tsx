import {Navbar} from "./_components/navbar"
import {Footer} from "./_components/footer"
const MarkingLayout = ({ children }:{children:React.ReactNode}) => {
    return (
       
            <div className="bg-slate-100 h-full">
                <Navbar />
                {/* navbar */}
                <main className="h-full pt-40 pb-40">
                {children}
                </main>
                <Footer />
                {/* footer */}
                </div>
      
        
    )
}
export default MarkingLayout