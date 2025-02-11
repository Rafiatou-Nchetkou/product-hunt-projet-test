import { NavLink } from 'react-router-dom';

function MainNavigation (){
    return (
        <div className="headMidle">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} end>Launches</NavLink>
                    </li>
                    <li>
                        <NavLink to="/detailProduct" className={({ isActive }) => isActive ? 'active' : undefined}>Details of Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newProduct" className={({ isActive }) => isActive ? 'active' : undefined}> Add New Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/commynity" className={({ isActive }) => isActive ? 'active' : undefined}>Community</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;