import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import select from '../../utils/select';
import { addTodo, delTodo, getListTodo } from "./redux/action";
import toJs from '../../hoc/ToJS';

const ToDoListPage = (props) => {
    const [title, setTitle] = useState(undefined);

    useEffect(() => {
        props.getListTodo("son");
        setTitle('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.success])

    return (
        <div>
            <div className="header">
                <h2>My To Do List</h2>
                <div className="wrapper">
                    <input className="input-add" type="text" placeholder="Title..." value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}></input>
                    <span className="button-add" onClick={() => {
                        const payload = {
                            name: "son",
                            title: title
                        }
                        props.addTodo(payload)
                    }}>Add</span>
                </div>
            </div >
            <ul>
                {props.listTodo.map((item, index) => {
                    return (
                        <li key={`li ${index}`} onClick={(e) => {
                            e.target.classList.toggle('checked')
                        }}>{item.title} <span className="close" onClick={() => {
                            const payload = {
                                name: "son",
                                id: item.id
                            }
                            props.delTodo(payload)
                        }}>x</span></li>
                    )
                })}
            </ul>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        listTodo: select(state, 'respPageReducer', 'listTodo'),
        success: select(state, 'respPageReducer', 'success'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getListTodo: (paramrs) => dispatch(getListTodo(paramrs)),
        addTodo: (paramrs) => dispatch(addTodo(paramrs)),
        delTodo: (paramrs) => dispatch(delTodo(paramrs)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(toJs(ToDoListPage));