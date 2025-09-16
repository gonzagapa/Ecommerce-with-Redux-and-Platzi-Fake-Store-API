import type { UnknownAction } from "@reduxjs/toolkit"
import type { Dispatch } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../app"
import { changeCategoryFilter } from "../store/productSlice"

type ButtonProps = {
    text:string
    id:string
    dispatch:Dispatch<UnknownAction>
}

export  function ButtonFilter({text, id, dispatch}:ButtonProps) {
  const {categorySlug} =useSelector((s:RootState)=>s.product); 
  
      const handleClick = ()=> {
          dispatch(changeCategoryFilter(id))
      }
  
      return (<button 
          onClick={handleClick}
          className={`cursor-pointer p-2 capitalize text-font-light font-semibold  dark:text-baby
          ${categorySlug === id ? 'border-highlight border-l-2' : ''}`} 
          id={id}>{text}
          </button>)
}
