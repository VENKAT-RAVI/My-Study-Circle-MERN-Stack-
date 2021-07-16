import react, { useState } from 'react';
import './AddLessonItem.scss';

class AddLessonItem extends react.Component {


  constructor() {
        super();
        this.state = {
            // instructor:false
        }
        // this.onChangeValue = this.onChangeValue.bind(this);
        // this.formSubmit = this.formSubmit(this);
    }

    render() {

    return (
        <section className="section-LessonItem-container">
            <div className="section-LessonItem-box">
                <div className="overlay">
                    {/* <button className="btn-text-add">Add Course</button> */}
                </div>


                <div className="flex-box1">
                </div>
                    <div>
                         <div className="editable-AddLesson">
                <form>
                    <label for="name" className="label-name">
                        <span className="content-name">LessonName</span>
                    </label>
                    <input type="text" name="username" defaultValue="{LessonName}" required></input>

                    <label for="desc" className="desc">
                        <span className="content-desc">Description</span>
                    </label>
                    <input type="text" name="desc" defaultValue="{description}" required></input>

                    <label for="category" className="category">
                        <span className="content-category">URL Link</span>
                    </label>
                    <input type="text" name="category" defaultValue="{URL Link}" required></input>

                    <br></br>
                    <br></br>
                    
                    <button className="btn-text-blue">Submit</button>

                </form>
            </div>
                    </div>

            </div>
        </section>
   )
    }
}
export default AddLessonItem;