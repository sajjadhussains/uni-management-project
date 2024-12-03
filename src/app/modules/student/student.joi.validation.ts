import Joi from "joi";

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-z]+$/)
    .messages({
      "string.base": '"First Name" should be a string',
      "string.empty": '"First Name" is required',
      "string.max": '"First Name" cannot be more than 20 characters',
      "string.pattern.base": '"First Name" should start with a capital letter',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      "string.base": '"Last Name" should be a string',
      "string.empty": '"Last Name" is required',
      "string.pattern.base": '"Last Name" should only contain letters',
    }),
});

// Guardian Joi Validation
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.empty": '"Father Name" is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.empty": '"Father Occupation" is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    "string.empty": '"Father Contact Number" is required',
  }),
  motherName: Joi.string().required().messages({
    "string.empty": '"Mother Name" is required',
  }),
  motherOccupation: Joi.string().required().messages({
    "string.empty": '"Mother Occupation" is required',
  }),
  motherContactNo: Joi.string().required().messages({
    "string.empty": '"Mother Contact Number" is required',
  }),
});

// Local Guardian Joi Validation
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": '"Local Guardian Name" is required',
  }),
  occupation: Joi.string().required().messages({
    "string.empty": '"Local Guardian Occupation" is required',
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": '"Local Guardian Contact Number" is required',
  }),
  address: Joi.string().required().messages({
    "string.empty": '"Local Guardian Address" is required',
  }),
});

// Main Student Joi Validation
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.empty": '"Student ID" is required',
  }),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid("male", "female", "other").required().messages({
    "string.empty": '"Gender" is required',
    "any.only": '"Gender" must be either "male", "female", or "other"',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    "string.empty": '"Email" is required',
    "string.email": '"Email" must be a valid email address',
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": '"Contact Number" is required',
  }),
  emergencyContactno: Joi.string().required().messages({
    "string.empty": '"Emergency Contact Number" is required',
  }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional(),
  presentAddress: Joi.string().required().messages({
    "string.empty": '"Present Address" is required',
  }),
  permanentAddress: Joi.string().required().messages({
    "string.empty": '"Permanent Address" is required',
  }),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImage: Joi.string().optional(),
  isActive: Joi.string().valid("active", "block").default("active").messages({
    "any.only": '"Status" must be either "active" or "block"',
  }),
});

export default studentValidationSchema;
