import { Schema, model, connect } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';
const studentNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const studentGuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContcatNo: { type: Number, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContcatNo: { type: Number, required: true },
});
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: studentNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String },
  contactNo: { type: Number },
  emergencyContacNo: { type: Number },
  bloogGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanetAddress: { type: String, required: true },
  guardian: studentGuardianSchema,
  profileImage: { type: String },
  isActive: ['active', 'inActive'],
});

const Student = model<Student>('Student', studentSchema);
