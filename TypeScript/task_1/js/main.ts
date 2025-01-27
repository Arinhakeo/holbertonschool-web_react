interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  const student1 = new StudentClass("Alice", "Smith");
  
  console.log(teacher3);
  console.log(director1);
  console.log(printTeacher("John", "Doe"));
  console.log(student1.workOnHomework());
  console.log(student1.displayName());