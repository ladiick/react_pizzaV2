import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Categories from "../components/Categories"
import {useContext, useEffect, useState} from "react";

import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId,setSort,setCurrentPage} from "../components/redux/slices/filterSlice";
import axios from 'axios'
const Home = () => {

    const categoryId = useSelector(state => state.filter.categoryId)
    const sortType = useSelector(state => state.filter.sort.sortType)
    const currentPage = useSelector(state=> state.filter.currentPage)
    const dispatch = useDispatch();

    const onChangeCategory = (id)=>{
        dispatch(setCategoryId(id))
    }


    const { searchValue } = useContext(SearchContext);
    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [categoryId, setCategoryId] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [sortType, setSortType] = useState({
    //     name:'популярности',
    //     sort:'rating'
    // });
    const onChangePage=(number)=>{

        dispatch(setCurrentPage(number))
    }


    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        // fetch(`https://639b31b331877e43d6857379.mockapi.io/items?page=${currentPage}&limit=4${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType}&order=desc${search}`)
        //     .then(res => res.json())
        //     .then(json => {
        //         setItems(json)
        //         setIsLoading(false)
        //     })

        axios
            .get(`https://639b31b331877e43d6857379.mockapi.io/items?page=${currentPage}&limit=4${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType}&order=desc${search}`)
            .then(response => {
                setItems(response.data)
                setIsLoading(false)
            })

        window.scrollTo(0, 0)
    }, [categoryId,sortType,searchValue,currentPage]);

    const pizzaz = items.map(obj => <PizzaBlock key={obj.id} {...obj}  />)
    // поиск по статичному массиву без back-end
    //filter(obj=>{
    //         if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) return true
    //         return false
    //     })

    const skeletons = [...new Array(6)].map((_, Index) => <Skeleton
        key={Index}/>)
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId}
                            onChangeCategory={onChangeCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    isLoading ? skeletons : pizzaz
                }
            </div>

            <Pagination
            value={currentPage}
                onChangePage={onChangePage}/>

        </div>
    )
}

export default Home