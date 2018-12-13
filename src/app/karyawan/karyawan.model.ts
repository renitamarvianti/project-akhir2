export class Karyawan
{
    public imagePath:string;
    public name:string;
    public position:string;
    public address:string;
    public notelp:string;
    public salary:string;
    

    constructor(imagePath:string,name:string,position:string,address:string,notelp:string,salary:string)
    {
        this.imagePath=imagePath;
        this.name=name;
        this.position=position;
        this.address=address;
        this.notelp=notelp;
        this.salary=salary;
        
    }

}