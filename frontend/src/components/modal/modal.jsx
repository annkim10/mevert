import React from "react"
import { closeModal } from "../../actions/modal_actions"
import { connect } from "react-redux"
import LoginContainer from "../session/login_container"
import SignupContainer from "../session/signup_container"
import AddEvent from '../calendar/add_event';
import EditEvent from '../calendar/edit_event';

function Modal({modal, closeModal}) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginContainer />;
      break;
    case 'signup':
      component = <SignupContainer />;
      break;
    case 'addEvent':
      component = <AddEvent />;
      break;  
    case 'editEvent':
      component = <EditEvent />;
      break;  
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
   
}


const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);