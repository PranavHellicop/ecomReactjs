import React, { useState } from 'react'
import { useFilterContext } from "../context/FilteredProduct"

const FilterProducts = () => {

  const { filterFunc, filterValue: { text, price,category,company }, allProducts, clearFilter } = useFilterContext()
  const [selected, setIsSelected] = useState(null)

  const onSelection = (id) => {
    setIsSelected(id)
  }

  const priceArray = allProducts.map((curEl) => curEl["price"])
  const minPrice = Math.min(...priceArray)
  const maxPrice = Math.max(...priceArray)

  const colorsArray= []
  allProducts.map((curEl)=>{
    curEl["colors"].map((el)=>colorsArray.includes(el) ? null:colorsArray.push(el))
  })


  const getFilters = (data, property) => {
    let newVal = data.map((curEl) => {
      return curEl[property]
    })
    return ["All", ...new Set(newVal)]
  }

  const categoryArray = getFilters(allProducts, "category")
  const companyArray = getFilters(allProducts, "company")



  return (
    <div className='flex flex-col space-y-6 bg-gray-100 w-full p-3'>
      <div>
        <input
          type="text"
          className='border border-black rounded-sm p-1'
          placeholder='search'
          name="text"
          value={text}
          onChange={filterFunc}
        />
      </div>
      <div>
        <h4 className='font-bold'>Category</h4>
        {categoryArray.map((curEl, index) => (
          <div key={index}>
            <button className={`cursor-pointer mb-1 hover:bg-green-300 p-1 m-1 ${(selected === curEl && category !=="All") ? "bg-green-300" : ""} `} name="category" value={curEl}
              onClick={(e) => {
                filterFunc(e)
                onSelection(curEl);
              }} >{curEl}</button>
          </div>
        ))}
      </div>
      <div>
        <h4 className='font-bold'>Company</h4>
        <select name="company" onChange={filterFunc} >
          {companyArray.map((curEl, index) => (
            <option value={curEl} key={index}>{curEl}</option>
          ))}
        </select>
      </div>
      <div>
        <h4 className='font-bold'>Price</h4>
        <div className='flex flex-col w-full items-center'>
          <p className='text-sm font-bold'>&#8377; {price}</p>
          <input className='w-[200px] bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600' type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={filterFunc}  />
        </div>
      </div>
      <div>
        <h4 className='font-bold'>Colors</h4>
        <div className='flex flex-row items-center space-x-2'>
          <button name='color' value="All" onClick={filterFunc}>All</button>
          {colorsArray.map((curEl,index)=>(
          <button className='w-5 h-5 rounded-full' key={index} name='color' value={curEl} onClick={filterFunc} style={{backgroundColor:`${curEl}`}}></button>
          ))}

        </div>
      </div>
      <div>
        <button className='bg-green-300 p-2 rounded hover:bg-green-500 transition-colors duration-500 ease-out' onClick={clearFilter}>Clear Filters</button>
      </div>
    </div>
  )
}

export default FilterProducts