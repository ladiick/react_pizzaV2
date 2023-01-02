
import s from './Pagination.module.scss'
import ReactPaginate from "react-paginate";

const Pagination = ({ value,onChangePage })=>{

    return (

        <ReactPaginate
            className={s.pages}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={value - 1}
            renderOnZeroPageCount={null}
        />

    )

}

export default Pagination;

