import {connect} from "react-redux";
import {addStudentToStore} from "../../../State/Student/studentAction";
import StudentComponent from "./StudentComponent";

let mapStateToProps = (state) => {
  return { 
    student: state.StudentReducer.Student
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {dispatch(addStudentToStore(student))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);