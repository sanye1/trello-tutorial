import Image from "next/image"
import Link from "next/link"
const Logo = () => {
    return (
        <Link href="/">
            <div>
            <Image  src={"/logo.svg"} alt="Logo" height={30} width={30}  />
            </div>
            <p className="text-lg">Taskify</p>
        </Link>
    )
}
export default Logo