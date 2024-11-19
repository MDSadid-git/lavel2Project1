import { Schema, model, connect } from 'mongoose';
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContcatNo: number;
  motherName: string;
  motherOccupation: string;
  motherContcatNo: number;
};
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: number;
  emergencyContacNo: number;
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanetAddress: string;
  guardian: Guardian;
  profileImage?: string;
  isActive: 'active' | 'inActive';
};
