import react, { useState } from 'react';
import './AddNewLesson.scss';
import EditCourse from './EditCourse'

function AddLesson() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="section-newLesson-container">
            <div className="section-newLesson-box">
                <div className="overlay">
                    <button className="btn-text-add">Add Lesson</button>
                    <div className="section-newLesson-image">

                    </div>
                    <h1 className="section-newLesson-image-caption">New Course</h1>
                </div>


                <div className="flex-box">
                    <div className="section-newLesson-editable">
                        <p className="para">Course Name</p>
                        <p className="para">Description</p>
                        <p className="para">category</p>
                    </div>

                    <div className="section-newLesson-editableOptions">
                        <button className="btn-text-green" onClick={() => setIsOpen(!isOpen)}>Edit</button>
                        <button className="btn-text-red">Delete</button>
                    </div>
                </div>
                {isOpen && (
                    <div>
                        <EditCourse />
                    </div>
                )}

            </div>
        </section>
    )
}
export default AddLesson;