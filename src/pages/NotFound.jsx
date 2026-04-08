import { Link } from "react-router-dom";
import "../styles/pages/not-found.css";

function NotFound() {
  return (
    <div className='not-found'>
      <p className='not-found__code'>404</p>
      <h1 className='not-found__heading'>Page not found.</h1>
      <p className='not-found__copy'>
        Whatever you were looking for, it&apos;s not here.
      </p>
      <Link to='/' className='not-found__link'>
        Go home →
      </Link>
    </div>
  );
}

export default NotFound;
