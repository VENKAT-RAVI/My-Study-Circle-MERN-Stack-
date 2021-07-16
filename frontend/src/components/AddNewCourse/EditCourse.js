import react from 'react';

class EditCourse extends react.Component {

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
            <div className="editable-course">
                <form>
                    <label for="name" className="label-name">
                        <span className="content-name">CourseName</span>
                    </label>
                    <input type="text" name="username" defaultValue="{coursename}" required></input>

                    <label for="desc" className="desc">
                        <span className="content-desc">Description</span>
                    </label>
                    <input type="text" name="desc" defaultValue="{description}" required></input>

                    <label for="category" className="category">
                        <span className="content-category">category</span>
                    </label>
                    <input type="text" name="category" defaultValue="{category}" required></input>

                    <br></br>
                    <br></br>
                    
                    <button className="btn-text-blue">Update</button>

                </form>
            </div>
        )
    }
}

export default EditCourse;