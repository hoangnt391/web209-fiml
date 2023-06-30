import React from 'react'
import { useEffect, useState } from "react";
import { getAllFimls } from '../api/films';
import Film from './film';

type filmsProps = {}

const HomeFiml = (props: filmsProps) => {
    const [films, setFimls] = useState([]);
  // useEffect:
  // 1. Tham số thứ 2 = undefined
  // 2. Tham số thứ 2 = []
  // 3. Tham số thứ 2 phụ thuộc vào props hoặc state
  useEffect(() => {
    const getFilms = async () => {
      const data = await getAllFimls();
      setFimls(data), setFimls(data);
    };
    getFilms();
  }, []);
  // useEffect(() => {
  //   const getFilms = async () => {
  //     const data = await getAllFimls()
  //     setFimls(data)
  //   }
  //   getFilms()
  // }, [])
  return (
    <div>
        <div className="pt-4 grid grid-cols-3 gap-2">
          {/* Render dynamic - props*/}
          {films.map((item) => (
            <Film data={item} />
          ))}
        </div>
    </div>
  )
}

export default HomeFiml