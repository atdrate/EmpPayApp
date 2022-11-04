class EmployeePayRollData
{
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id=id;
    }
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        let nameregex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameregex.test(name))
        {
            this._name=name;
        }
        else throw "Name is incorrect"
        
    }
    get profilePic()
    {
        return this._profilePic;
    }
    set profilePic(profilePic)
    {
        this._profilePic=profilePic;
    }
    get gender()
    {
        return this._gender;
    }
    set gender(gender)
    {
        this._gender=gender;
    }
    get department()
    {
        return this._department;
    }
    set department(department)
    {
        this._department=department;
    }
    get salary()
    {
        return this._salary;
    }
    set salary(salary)
    {
        this._salary=salary;
    }
    get note()
    {
        return this._note;
    }
    set note(note)
    {
        this._note=note;
    }
    get startDate()
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        // let now = new Date();
        // if(startDate(startDate));
        // if(startDate>now) throw 'Start Date is a future date!';
        // var diff=Math.abs(now.getTime() - startDate.getTime());
        // if(diff/(1000*60*60*24)>30)
        // throw 'Start date is beyond 30 day!';
        this._startDate=startDate;
    }
    toString()
    {
        // const options={year:'numeric',month:'short',day:'numeric'};
        // const newDate=!this.startDate ?"undefined":
        //             this.startDate.toLocaleDateString('en-GB',options);
      return "id: "+this.id+", name "+this.name
      +", gender "+this.gender+", profilePic "+this.profilePic+", department "+
     this.department+", salary "+this.salary+", startDate "+this.startDate+", note "+this.note;  
    }
}