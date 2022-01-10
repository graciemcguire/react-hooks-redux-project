import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";
import styles from "./Habit.module.css";

export function HabitForm () {
  const [ formData, setFormData ] = useState( {
    title: "",
  } )

  const dispatch = useDispatch()

  function handleChange ( event ) {
    setFormData( {
      ...formData,
      [ event.target.name ]: event.target.value,
    } )
  }

  function handleSubmit ( event ) {
    event.preventDefault()

    const habit = { ...formData, id: uuid() }
    console.log(habit);

    dispatch( addHabit( habit ) )

    setFormData( {
      title: ""
    } )
  }
  
    return (
      <div className="container">
        <h1>habit form</h1>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">
                      habit
                    </label>
                    <div className="col-md-5">
                      <textarea
                        className={styles.textbox}
                        id="title"
                        name="title"
                        value={formData.content}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className={styles.button}>
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }