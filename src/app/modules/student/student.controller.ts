import express, { request, Request, Response } from "express";
import { z } from "zod";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //validate using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    //validation using zod
    const zodparsedData = studentValidationSchema.parse(studentData);
    const result = await StudentServices.createStudentIntoDB(zodparsedData);

    res.status(200).json({
      success: true,
      message: "Student Created Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "all Students retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentID);
    res.status(200).json({
      success: true,
      message: "Single Student Retrived Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
