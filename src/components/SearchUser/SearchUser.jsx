import React from "react";
import style from './SearchUser.module.css'

function SearchUser (props){

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 0; i < pagesCount; i++){
        pages.push(i+1);
    }

    return <div className={style.container}>
        <div className={style.pageNumbers}>
            {
                pages.map( p =>
                    <span className={props.currentPage === p && style.selectedPage }
                          onClick={() => {props.onPageChange(p)}}> {p} </span>
                )
            }
        </div>
        {
            props.users.map( el => <div key={el.id} className={style.item}>
                <div className={style.usersAvatar}>
                    <div>
                        <img  src={el.photos.small == null ? "https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" : el.photos.small}/>
                    </div>
                </div>
                <div className={style.users}>
                <span className={style.info}>
                    <div>{el.name}</div>
                    <div style={{fontSize: "8pt", padding: "5px 0px"}}>Status: {el.status}</div>
                </span>
                    <span className={style.location}>
                    <div>From City</div>
                    <div>Country</div>
                </span>
                    <div className={style.sub}>
                        {el.followed ? <button onClick={() => {props.unsubscribeUser(el.id)}}> Subscribe </button>
                            : <button onClick={() => {props.subscribeUser(el.id)}}> Unsubscribe </button> }
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default SearchUser;