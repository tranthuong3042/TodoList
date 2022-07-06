import { Button } from "react-bootstrap";
import "./AddTask.css";
import Search from "../../assets/Image/Search.png"

function AddTask() {
  return (
    <div className="container">
      <div classNameName="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary">Apply</button>
      </div>
    </div>
    </div>
  );
}

export default AddTask;
