import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return(
        <div className={s.root}>
            <h1>Ничего не найдено</h1>
            <p>К сожалению данная страница не найдена</p>
        </div>
    )
}

export default NotFoundBlock