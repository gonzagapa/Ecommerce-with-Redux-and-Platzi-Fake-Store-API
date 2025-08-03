

export function LoginPage() {
  return (
    <main className="dark:bg-slate-800 border-2 rounded-lg border-baby
    min-w-sm p-3">
        <h2 className="text-center text-5xl mb-5 text-highlight font-bold">Login</h2>
        <form action="">
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="email" 
            className="capitalize font-semibold text-xl">email addres:</label>
            <input type="email" name="email" id="email" 
            className="bg-slate-900 rounded-lg p-2 outline-slate-300"/>
        </div>
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="password"
            className="capitalize font-semibold text-xl">password:</label>
            <input type="password" name="password" id="password" 
            className="bg-slate-900 rounded-lg p-2 outline-slate-300"/>
        </div>
            <button type="submit" className="bg-highlight text-white w-[200px]
            rounded-lg text-center p-2 cursor-pointer hover:bg-highlight/85 mx-auto block">Login</button>
        </form>
        
    </main>
  )
}
