import { useEffect, useState } from "react"
import { PropsChildren } from "../utils/interfaces"

const SmoothContainer: React.FC<PropsChildren> = ({ children }) => {
   const [op, setOp] = useState("0")

  useEffect(() => {
   setTimeout(() => setOp("1"), 500)
  }, [])
  
   return (
    <div 
      style={{transition: "all 1s", opacity: op}} 
      className="w-1/2 py-5 flex flex-col gap-28"
    >
      { children }
    </div>
  )
}

export default SmoothContainer