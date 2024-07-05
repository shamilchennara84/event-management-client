export const passwordMinLength = 8;
export const userNameMinLength = 3;
export const userNameMaxLength = 20;
export const emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
export const passwordRegex = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{${passwordMinLength},}$`;
export const nameRegex = `^[a-zA-Z ]{${userNameMinLength},${userNameMaxLength}}$`;
