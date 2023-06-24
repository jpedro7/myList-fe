export default function Page() {
  return (
    <div>
      <h1 className="text-center text-8xl mt-28 font-medium">Task management</h1>
      <div className="flex justify-center">
        <div className="bg-white rounded-full drop-shadow-lg leading-10 w-1/3 mt-12 text-start">
          <input type="text" placeholder="Add Task" className="px-5 w-11/12 bg-white rounded-full mr-3" />
          <button className="bg-black rounded-full leading-5 text-white w-5 drop-shadow">+</button>
        </div>
      </div>
      <div className="mt-12 w-1/2 mx-auto">
        <p className="font-light">Todo List</p>
        <div className="drop-shadow-lg w-full h-12 mt-3 bg-white rounded flex items-center">
          <input type="checkbox" className="h-6 w-6 my-auto mx-4" />
          <span className="font-semibold">Trabalho e reunião de projetos</span>
          <button className="bg-[#F0F0D0] text-[#E39E1A] border-2 border-[#E39E1A] rounded-md ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 p-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </button>
          <button className="bg-[#F2DCDC] text-[#D20A0A] border-2 border-[#D20A0A] rounded-md mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 p-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}