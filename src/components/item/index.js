import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions';
import useFetch from '../../hooks/useFetch';

const Item = ({ title, id }) => {
    const [todoUpdate, setTodoUpdate] = useState('');
    const [activeModal, setActiveModal] = useState(false);

    const { request } = useFetch();
    const dispatch = useDispatch();

    const onDelete = useCallback((id) => {
        request(`https://jsonplaceholder.typicode.com/todos/${id}`, "DELETE")
            .then(res => console.log(res, "Deleted"))
            .then(dispatch(deleteTodo(id)))
            .catch(err => console.log(err));
    }, [request]);

    const updatedTodo = (id) => {
        setActiveModal(true);

        request(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                setTodoUpdate(res.title);
            })
            .catch(err => console.log(err));
    }

    const onSumbitUpdate = (e) => {
        e.preventDefault();

        request(`https://jsonplaceholder.typicode.com/todos/${id}`, "PATCH", JSON.stringify({
            title: todoUpdate,
        }))
            .then(res => dispatch(updateTodo(res)))
            .then(() => {
                setTodoUpdate('');
                setActiveModal(false);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='todos__item'>
                <h4>{title}</h4>
                <button className='btn delete' onClick={() => onDelete(id)}>Delete</button>
                <button className='btn edit' onClick={() => updatedTodo(id)}>Edit</button>
            </div>
            <div className={`modal-window ${activeModal ? 'modal-window-active' : ''}`}>
                <div className='mw__wrapper'>
                    <button className='close' onClick={() => setActiveModal(false)}>&times;</button>
                    <form className='mw__form' onSubmit={(e) => onSumbitUpdate(e)}>
                        <div className='input'>
                            <input 
                                type="text" 
                                placeholder='Todo edit'
                                name='todo'
                                value={todoUpdate}
                                onChange={(e) => setTodoUpdate(e.target.value)}
                            />
                        </div>
                        <button type="submit" className='btn save'>Save</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Item;