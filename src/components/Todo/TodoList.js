import { Button } from "react-bootstrap";
import "./TodoList.css";
import Search from "../../assets/Image/Search.png";
import Group from "../../assets/Image/Group.png";
import Edit from "../../assets/Image/Action_ Edit.png";
import Delete from "../../assets/Image/Action_ Delete.png";
import Add from "../../assets/Image/Add.png";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Remove from "../../assets/Image/remove-2 1.png";
function TodoList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="Content row">
        <div className=" boxItem col-lg-4">
          <div className="header">
            <h2>Todo List</h2>
          </div>
          <div className="button">
            <div className="wrap">
              <div className="search">
                <Button className="btnSearch"><img src={Search}></img></Button>
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Search"
                />
              </div>
            </div>

            <Button variant="primary" onClick={handleShow}>
              <img src={Add}></img>Add New
            </Button>
          </div>
          <div className="button1">
            <Button>Show all</Button>
            <Button>Active tasks</Button>
            <Button>Completed tasks</Button>
          </div>
          <div className="checkBoxClass">
            <div className="boxTask">
              <div className="itemTask1">
                <form action="">
                  <input
                    type="radio"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Task1</label>
                </form>
              </div>
              <div className="itemTask2">
                <a href="">
                  <img src={Group}></img>
                </a>
                <a href="">
                  <img src={Edit}></img>
                </a>
                <a href="">
                  <img src={Delete}></img>
                </a>
              </div>
            </div>

            <div className="boxTask">
              <div className="itemTask1">
                <form action="">
                  <input
                    type="radio"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Task1</label>
                </form>
              </div>
              <div className="itemTask2">
                <a href="">
                  <img src={Group}></img>
                </a>
                <a href="">
                  <img src={Edit}></img>
                </a>
                <a href="">
                  <img src={Delete}></img>
                </a>
              </div>
            </div>

            <div className="boxTask">
              <div className="itemTask1">
                <form action="">
                  <input
                    type="radio"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Task1</label>
                </form>
              </div>
              <div className="itemTask2">
                <a href="">
                  <img src={Group}></img>
                </a>
                <a href="">
                  <img src={Edit}></img>
                </a>
                <a href="">
                  <img src={Delete}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div >
        <Modal id="idModal" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add task</Modal.Title>
            <img src={Remove}></img>
          </Modal.Header>
          <Modal.Body>
            <form className="formList">
              <div class=" form-group">
                <label for="formGroupInput">Member</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupInput"
                  placeholder="Nguyen Van A"
                />
              </div>
              <div class="form-group">
                <label for="formGroupInput">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupInput"
                  placeholder="Task 1"
                />
              </div>
              <div class="form-group">
                <label for="formGroupInput">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupInput"
                  placeholder="Task 1 ....."
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
export default TodoList;
