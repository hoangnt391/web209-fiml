import { useEffect, useState } from "react"
import { getAllFimls } from "./api/films"
import Film from "./components/film"

function App() {
  const [films, setFimls]= useState([]) 
   // useEffect: 
  // 1. Tham số thứ 2 = undefined
  // 2. Tham số thứ 2 = []
  // 3. Tham số thứ 2 phụ thuộc vào props hoặc state
  useEffect(()=>{
   const getFilms = async () => {
    const data = await getAllFimls()
        setFimls(data),
        setFimls(data)
      }
      getFilms()
  },[])
  // useEffect(() => {
  //   const getFilms = async () => {
  //     const data = await getAllFimls()
  //     setFimls(data)
  //   }
  //   getFilms()
  // }, [])
  return <div>
    <header>
      <img className="w-[80px]" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Netflix_logo.png" alt="" />
    </header>
    <div className="pt-4 grid grid-cols-3 gap-2">
      {/* Render dynamic - props*/}
      {films.map((item) => <Film data={item} />)}
    </div>
  </div>
}

export default App
