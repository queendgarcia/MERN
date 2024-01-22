import React from "react";

export const addStudentToStore = (newStudent) => {
  return {
    type: "ADD_STUDENT",
    payload: newStudent
  }
}

