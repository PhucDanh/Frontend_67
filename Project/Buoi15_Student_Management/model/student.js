// function Student(id, name, type, math, physic, science, training) {
//     this.id = id;
//     this.name = name;
//     this.type = type;
//     this.math = math; 
//     this.physic = physic;
//     this.science = science;
//     this.training = training;

//     this.calcAverage = function() {
//         return (this.math + this.physic + this.science) / 3;
//         // return 9; 
//     }
// }

function Student(id, name, type, math, physics, chemistry, training) {
    this.maSinhVien = id;
    this.tenSinhVien = name;
    this.loaiSinhVien = type;
    this.diemToan = math;
    this.diemLy = physics;
    this.diemHoa = chemistry;
    this.diemRenLuyen = training;
  
    this.calcAverage = function () {
      return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    };
  }