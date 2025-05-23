import React, { useState} from 'react'
import { Plus, Minus } from "lucide-react"

function Counter(props) {

  const [num, setNum] = useState(1);

  return (
    <>
      <div className="col-12 p-2 d-flex justify-content-between align-items-center border border-black border-1 rounded rounded-1">
          <Plus color='#000' size={16} strokeWidth={1.25} onClick={() => setNum(num <= 9 ? num + 1 : num)} />
          <span>{num}</span>
          <Minus color='#000' size={16} strokeWidth={1.25} onClick={() => setNum(num >= 1 ? num - 1 : num)} />
      </div>
    </>
  )
}

export default Counter