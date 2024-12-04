import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); //built-in static method
  if (await Student.isUserExists(studentData.id)) {
    throw new Error("User Already Exists");
  }
  const student = new Student(studentData); //built in instance method

  const result = await student.save();
  return result;
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error("User Already Exists!!!");
  // }
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (studentID: string) => {
  const result = await Student.findOne({ id: studentID });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
