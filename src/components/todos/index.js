import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { addTodo, listTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';

import './style.css';
import Item from '../item';

const Todos = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const { request } = useFetch();
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        request("https://jsonplaceholder.typicode.com/todos")
            .then(data => dispatch(listTodo(data)))
            .catch(() => console.log('Error'));
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!text) {
            return setError('Something wrong');
        } else {
            setError('');
        }

        const newTodo = {
            id: uuidv4(),
            title: text,
            completed: false,
            userId: 1,
        }

        request("https://jsonplaceholder.typicode.com/todos", "POST", JSON.stringify(newTodo))
            .then(data => console.log(data, 'Success'))
            .then(dispatch(addTodo(newTodo)))
            .catch(() => console.log('Error'))

        setText('');
    }

    return (
        <section className='todos'>
            <div className='container'>
                <form className='todos__form' onSubmit={onSubmitHandler}>
                    {error ? <div style={{color: 'red', marginBottom: '20px'}}>{error}</div> : ''}
                    <div className='input'>
                        <input 
                            type="text" 
                            placeholder='Todo'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <button type="submit" className='btn'>Add</button>
                </form>
                <div className='todos__list'>
                    {todos.map((item, i) => (
                        <Item title={item.title} id={item.id} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Todos;