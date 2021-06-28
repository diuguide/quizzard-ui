/**
 * @Co-Author: Sean Taba
 */

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authState, logoutUserReducer } from "../../state-slices/auth/auth-slice";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  // bring authState into nav bar to show hide compenents

  const handleLogout = () => {
    dispatch(logoutUserReducer());
  }
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Link to="/" className="text-primary">
          Qwizzard
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!auth.isAuthenticated &&
              <>
                <Link id="navLink" className="text-light ml-2 mr-2" to="/login">
                  Login
                </Link>

                <Link id="navLink" className="text-light ml-2 mr-2" to="/register">
                  Register
                </Link>
              </>
            }
            {auth.isAuthenticated &&
              <>
                <Link id="navLink" className="text-light ml-2 mr-2" to="/study">
                  Study
                </Link>

                <Link id="navLink" className="text-light ml-2 mr-2" to="/update">
                  Update
                </Link>

                <Link id="navLink" className="text-light ml-2 mr-2" onClick={handleLogout} to="/">Logout</Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
