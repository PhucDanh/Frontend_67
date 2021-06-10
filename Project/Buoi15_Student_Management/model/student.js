function Student(id, name, type, math, physic, science, training) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.math = math; 
    this.physic = physic;
    this.science = science;
    this.training = training;

    this.calcAverage = function() {
        return (this.math + this.physic + this.science) / 3;
        // return 9;
    }
}