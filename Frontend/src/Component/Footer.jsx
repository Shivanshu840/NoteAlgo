import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <div className="container-fluid border-top text-dark py-3  mt-auto">
      <div className="row">
        <div className="col-3 ">
          <p>&copy; 2024 NotesAlgo. All Rights Reserved.</p>
        </div>
        <div className="col text-center">
          <a href="#" style={{ textDecoration: 'none' }}>Help Centre</a>
        </div>
        <div className="col text-center">
          <a href="#" style={{ textDecoration: 'none' }}>Jobs</a>
        </div>
        <div className="col text-center">
          <a href="#" style={{ textDecoration: 'none' }}>Assessment</a>
        </div>
        <div className="col text-center">
          <a href="#" style={{ textDecoration: 'none' }}>Students</a>
        </div>
        <div className="col text-center">
          <a href="#" style={{ textDecoration: 'none' }}>Terms</a>
        </div>
        <div className="col text-center">
          <a href="#" style={{ textDecoration: 'none' }}>Privacy Policy</a>
        </div>
        <div className="col text-center">
          <a href="#"style={{ textDecoration: 'none' }}> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;