import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student is created successfull',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Student created faild',
      data: error,
    });
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.allStudentIntoDB();
    res.status(200).json({
      success: true,
      message: 'All Student Data',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getOneStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await StudentServices.oneStudentIntoDB(id);
  res.status(200).json({
    success: true,
    message: 'Find your student data successfully',
    data: result,
  });
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getOneStudent,
};
