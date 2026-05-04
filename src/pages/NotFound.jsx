import { Link } from "react-router-dom";
import "../styles/pages/not-found.css";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function NotFound() {
  useDocumentTitle("404 — Jess Wilson");
  return (
    <div className='not-found'>
      <p className='not-found__code'>404</p>
      <h1 className='not-found__heading'>You found the void.</h1>
      <p className='not-found__copy'>
        Impressive. But this page doesn&apos;t exist — at least not yet.
      </p>
      <Link to='/' className='not-found__link'>
        Take me somewhere real →
      </Link>
    </div>
  );
}

export default NotFound;
