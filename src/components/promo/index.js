import { FcTodoList } from 'react-icons/fc';
import './style.css';

const Promo = () => {

    return (
        <section className='promo'>
            <div className='container'>
                <div className='promo__wrapper'>
                    <div className='promo__logo'>
                        <FcTodoList/>
                    </div>
                    <div className='promo__info'>
                        <h1 className='title'>Todo application</h1>
                        <div className='descr'>
                            This is a good feature for saving, editing and deleting tasks. It will help you to be productive.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;