let items = [
  {
    "id": 510,
    "student_name": "Student_151",
    "faculty": "BCA",
    "semester": 2,
    "email": "student_151_bca2075@lict.edu.np",
    "phone": "98447075579",
    "reg_no": "5-2-7480-2018"
  },
  {
    "id": 597,
    "student_name": "Student_158",
    "faculty": "BCA",
    "semester": 7,
    "email": "student_158_bca2075@lict.edu.np",
    "phone": "98305622558",
    "reg_no": "5-2-3529-2018"
  }
]


let mapped = items.map(item => item.student_name)
console.log(mapped);