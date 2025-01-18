import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "@~#?-_+$£%^&!"

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  } , [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-center text-white mb-5' >Password Generator</h1>
      <div className='flex rounded-lg shadow mb-4 overflow-hidden'>
        <input
        type='text' 
        value={password}
        placeholder='Password'
        className='outline-none py-1 px-3 w-full'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyToClipboard}
        className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400' 
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex  items-center gap-x-1'>
        <input
        type='range'
        value={length}
        min={8}
        max={80}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex  items-center gap-x-1'>
      <input
        type='checkbox'
        defaultChecked={numAllowed}
        className='cursor-pointer'
        onChange={()=>{setNumAllowed((prev)=> !prev);
        }}
        />
        <label>Numbers</label>
      </div>
      <div className='flex  items-center gap-x-1'>
      <input
        type='checkbox'
        defaultChecked={charAllowed}
        className='cursor-pointer'
        onChange={()=>{setcharAllowed((prev)=> !prev);
        }}
        />
        <label>Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App