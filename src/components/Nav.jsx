import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="flex justify-center text-white text-2xl items-center h-20 bg-zinc-700 list-none gap-10">
      <li><Link to='/'>Home </Link></li>
      <li><Link to='/task'>Edit Task</Link></li>
      <li><Link to='*'>Abute Us</Link></li>
    
    </div>
  );
};

export default Nav;
