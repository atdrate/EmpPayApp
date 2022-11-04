let empPayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage=() =>{
   return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  //if(empPayrollList.length==0) return;
  let innerHtml=`${headerHtml}`;
  //let empPayrollList=createEmployeePayrollJSON(); 
  //let empPayrollData=createEmployeePayrollJSON();
  
  for(const empPayrollData of empPayrollList){
    innerHtml= `${innerHtml}
  <tr>
    <td><img class="profile" alt=""
        src="${empPayrollData._profilePic}"></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${stringifyDate(empPayrollData._startDate)}</td>
  <td>
      <img name="${empPayrollData._id}" onclick="remove(this)"  alt="delete"
      src="DeleteLogo.jpg">
      <img name="${empPayrollData._id}" alt="edit" onclick="update(this)"
      src="EditLogo.jpg">
  </td>
  </tr>
    `;
  }
  document.querySelector('#table-display').innerHTML =innerHtml;
}
const createEmployeePayrollJSON = () => {
  let employeePayRollListLocal =[
    {
      _name:'Narayan mahadevan',
      _gender:'Male',
      _department:[
        'Engineer',
        'Finance'
      ],
      _salary:'500000',
      _startDate:'29 Nov 2019',
      _note:'',
      _id:new Date().getTime(),
      _profilePic:'Profile3.jpg'
    },
    {
      _name:'Bill gates',
      _gender:'Female',
      _department:[
        'HR',
        'Finance'
      ],
      _salary:'700000',
      _startDate:'1 Dec 2019',
      _note:'',
      _id:new Date().getTime()+1,
      _profilePic:'Profile4.jpg'
    }
  ];

  return employeePayRollListLocal;
}   
const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
    deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}
const remove = node => {
  let empPayrollData = empPayrollList.find(empData => empData._id == node.id)
  if(!empPayrollData) return;
  const index=empPayrollList
                   .map(empData=>empData._id)
                   .indexOf(empPayrollData._id);
  empPayrollList.splice(index,1)
  localStorage.setItem('EmoloyeePayrollList',JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent=empPayrollList.length;
  createInnerHtml();
}