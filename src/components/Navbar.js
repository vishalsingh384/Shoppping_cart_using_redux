import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    //useSelector -> A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
    const amount=useSelector((store)=>store.cart.amount);
    return (
        <nav>
            <div className='nav-center'>
                <h3>Shopping Cart</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;