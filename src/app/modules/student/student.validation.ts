import { z } from "zod";

// Define the userName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First Name is required")
    .max(20, "First Name cannot exceed 20 characters"),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, "Last Name is required"),
});

// Define the guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's Name is required"),
  fatherOccupation: z.string().min(1, "Father's Occupation is required"),
  fatherContactNo: z.string().min(1, "Father's Contact Number is required"),
  motherName: z.string().min(1, "Mother's Name is required"),
  motherOccupation: z.string().min(1, "Mother's Occupation is required"),
  motherContactNo: z.string().min(1, "Mother's Contact Number is required"),
});

// Define the local guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local Guardian's Name is required"),
  occupation: z.string().min(1, "Local Guardian's Occupation is required"),
  contactNo: z.string().min(1, "Local Guardian's Contact Number is required"),
  address: z.string().min(1, "Local Guardian's Address is required"),
});

// Define the student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, "Student ID is required"),
  name: userNameValidationSchema,
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({
      message: "Gender must be 'male', 'female', or 'other'",
    }),
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email("Email must be a valid email address")
    .min(1, "Email is required"),
  contactNo: z.string().min(1, "Contact Number is required"),
  emergencyContactno: z.string().min(1, "Emergency Contact Number is required"),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().min(1, "Present Address is required"),
  permanentAddress: z.string().min(1, "Permanent Address is required"),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(["active", "block"]).default("active"),
});

export default studentValidationSchema;
