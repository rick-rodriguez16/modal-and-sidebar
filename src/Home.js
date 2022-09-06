// you can import properties using useContext from context.js this way:
// 
import { FaBars } from 'react-icons/fa';

//   import React, {useContext} from 'react';
//   import { AppContext } from './context';
//
// and then destructure within the Home function using:
//
//   const { openSidebar, openModal } = useContext(AppContext);

// or you can use your custom hook in context.js
import { useGlobalContext } from './context';

const Home = () => {
    
    const {openSidebar, openModal} = useGlobalContext();    
    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar}>
                <FaBars />
            </button>
            <button className='btn' onClick={openModal}>
                show modal
            </button>
        </main>
    );
}

export default Home;
