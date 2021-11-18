import React, { useState } from "react";
import { connect } from "react-redux";
import { createNote,getNoteByID,updateNoteById } from "./../redux/actions/notesActionCreator";
import {toast} from "react-toastify"



const EditNotePage = ({ match,history,dispatchCreateNoteAction,dispachNoteByIdAction, }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

console.log(match)
  const handleOnSubmit=event=>{
      event.preventDefault()
      const data={title,content,description,category}
      dispatchCreateNoteAction(data,()=>{
                   toast.success("Note created Successfully!")
                   history.replace("/")
      },(message)=>toast.error(`Error:${message}`))
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Edit Note</h2>
        </div>
      </div>
      <div className="roe align-items-center">
        <div className="col-9">
          <form noValidate onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                placeholder="Content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                type="text"
                placeholder="Category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control"
              >
                <option value="">--Select--</option>
                <option value="GENERAL">General</option>
                <option value="IDPROOF">ID Proof</option>
                <option value="PROFESSIONAL">Professional</option>
              </select>
            </div>
            <div className="mt-5">
                <button type="submit" className="btn btn-primary" style={{marginRight:"5px"}}>
                    Save|<i className="fa fa-save"></i>
                </button>
                <button type="button" classNames="btn btn-secondary btn-lg" onClick={()=>history.replace("/notes")}>
                    Cancel|<i className="fas fa-times"></i>
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCreateNoteAction: (data, onSuccess, onError) =>
    dispatch(createNote(data, onSuccess, onError)),
 dispatchUpdateNoteAction:(noteId,data,onSuccess,onError)=>
    dispatch(updateNoteById(noteId,data,onSuccess,onError)),
dispachNoteByIdAction:(noteId,onSuccess)=>
    dispatch(getNoteByID(noteId,onSuccess))
});
export default connect(null,mapDispatchToProps)(EditNotePage);
