import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Categories from "../components/Categories"
import {useEffect, useState} from "react";
import sort from "../components/Sort";


const Home = ({searchValue}) => {

    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name:'популярности',
        sort:'rating'
    });

    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://639b31b331877e43d6857379.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}&order=desc${search}`)
            .then(res => res.json())
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId,sortType,searchValue]);

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
                            onClickCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType}
                      onClickSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    isLoading ? skeletons : pizzaz
                }
            </div>
        </div>
    )
}

export default Home