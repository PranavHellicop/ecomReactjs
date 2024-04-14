const FilterReducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                sortedProducts:[...action.payload],
                allProducts:[...action.payload]

            }

        case "GET_SORT_VALUE":

            // const selectNode = document.getElementById("sort")
            // console.log(selectNode.options[selectNode.options.selectedIndex].value);
            // const sortValue = selectNode.options[selectNode.selectedIndex].value

            return {
                ...state,
                sortingValue: action.payload
            }
        case "SORTING_VALUES":
            
            const compFunc = (a, b) => {
                if (state?.sortingValue === "ascending") return a.price - b.price
                if (state?.sortingValue === "descending") return b.price - a.price
                if (state?.sortingValue === "alphabetical") return a.name.localeCompare(b.name)
                if (state?.sortingValue === "revalphabetical") return b.name.localeCompare(a.name)
            }

            const tempSortProduct = state.sortedProducts.toSorted(compFunc)
            // console.log("Sortedproduct order",sortedProduct);
            

            return {
                ...state,
                sortedProducts: tempSortProduct
            }

        case "FILTER_VALUE":
            const {name,value} = action.payload
         
            return {
                ...state,
                filterValue:{...state.filterValue,[name]:value}
            }

        case "FILTER_PRODUCTS":
            
            let pdtList = [...state.allProducts]
            if(state.filterValue.text){
                pdtList = pdtList.filter((item)=>item.name.toLowerCase().includes(state.filterValue.text.toLowerCase()))
            }
            if(state.filterValue.category !="All"){
                pdtList = pdtList.filter((item)=>item.category.toLowerCase()===state.filterValue.category.toLowerCase())
                
            }
            if(state.filterValue.company !="All"){
                pdtList = pdtList.filter((item)=>item.company.toLowerCase()===state.filterValue.company.toLowerCase())
            }
            if(state.filterValue.price){
                pdtList = pdtList.filter((item)=>item.price>=state.filterValue.price)
            }
            if(state.filterValue.color !="All"){
                pdtList = pdtList.filter((item)=>item.colors.includes(state.filterValue.color))
            }
            
            return {
                ...state,
                sortedProducts:pdtList
            }

        case "CLEAR_FILTERS":
                return {
                    ...state,
                    filterValue:{
                        text: "",
                        category:"All",
                        company:"All",
                        price:12599,
                        color:"All"
                    }
                }
            


        default:
            break;
    }
}


export default FilterReducer