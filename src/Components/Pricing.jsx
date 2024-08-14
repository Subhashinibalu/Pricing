import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const Pricing = () => {
  const [dark,setDark]=useState(true)//for darkmode light mode 

  useEffect(()=>{
    document.body.classList.toggle('dark', dark)
  },[dark])
    return (
        <>
        {/* button to change theme */}
        <button className="fixed top-0 right-0 p-4 dark:text-white text-black  text-xl font-bold hover:text-gray-300" onClick={()=>setDark(!dark)} aria-label="toggleTheme">
            {dark ? <FaSun /> : <FaMoon />}
        </button>
          
            <div className="flex justify-center items-center h-screen bg-white dark:bg-customblack ">
              {/* the box where the details are displayed */}
                <div className="w-full sm:w-3/5 text-black  dark:text-gray-100  p-8 rounded-lg border border-gray-700 bg-white dark:bg-customgray overflow-auto">
                    <h1 className="text-2xl font-semibold text-customblue mt-10">API Pricing</h1>
              
                    <p className="mt-1 mb-5">Our API pricing is based on the model used and the number of tokens processed. Here&apos;s a breakdown of the costs:</p>
            <div className="mb-8 border border-gray-700 border-collapse rounded-lg">
            <table className="w-full  table">
  <thead >
    <tr className="bg-customviolet" >
      <th className="p-4  text-white font-semibold tracking-wide text-left rounded-tl-lg">API</th>
      <th className="p-4  text-white font-semibold tracking-wide text-left">MODEL</th>
      <th className="p-4  text-white font-semibold tracking-wide text-left rounded-tr-lg">PRICE PER 1K TOKENS</th>
    </tr>
  </thead>
  <tbody className="" >
    <tr className="border-y border-gray-700" >
      <td className="p-4  text-left ">OpenAI</td>
      <td className="p-4 text-left">GPT-3.5</td>
      <td className="p-4 text-left">$0.002</td>
    </tr>
    <tr className="border-y border-gray-700">
      <td className="p-4 text-left">OpenAI</td>
      <td className="p-4 text-left">GPT-4</td>
      <td className="p-4 text-left">$0.03</td>
    </tr>
    <tr className="border-y border-gray-700">
      <td className="p-4 text-left">Together AI</td>
      <td className="p-4 text-left">Llama-2-70b</td>
      <td className="p-4 text-left">$0.0008</td>
    </tr>
    <tr className="border-y border-gray-700">
      <td className="p-4 text-left rounded-bl-lg">Together AI</td>
      <td className="p-4 text-left">Llama-2-13b</td>
      <td className="p-4 text-left rounded-br-lg">$0.0006</td>
    </tr>
  </tbody>
</table>
                </div>        
               
<h1 className="text-xl  font-semibold text-customblue">Token Estimation</h1>
<p className="mb-8">
On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
</p>
<h1  className="text-xl  font-semibold text-customblue">Billing</h1>
<p>
You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
</p>
                </div>

            </div>
        </>
    );
};

export default Pricing;



