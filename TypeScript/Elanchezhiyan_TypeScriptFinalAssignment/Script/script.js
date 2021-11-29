var UserDetailsAutoIncremented = 1000;
var CourseDetailsAutoIncremented = 100;
var UserDetails = /** @class */ (function () {
    function UserDetails(name, age, mobileNo) {
        UserDetailsAutoIncremented++;
        this.UserId = "U" + (UserDetailsAutoIncremented).toString();
        this.UserName = name;
        this.UserAge = age;
        this.UserPhoneNumber = mobileNo;
    }
    return UserDetails;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(courseName, days) {
        CourseDetailsAutoIncremented++;
        this.CourseId = "C" + (CourseDetailsAutoIncremented).toString();
        this.CourseName = courseName;
        this.RequiredDays = days;
    }
    return CourseDetails;
}());
var User = new Array();
var Course = new Array();
function UserRegistration() {
    var UserName = document.getElementById('name').value;
    var UserAge = document.getElementById('age').value;
    var UserPhoneNumber = document.getElementById('phoneNo').value;
    var index = User.length;
    if ((UserName != "") && (UserAge != "") && (UserPhoneNumber != "")) {
        User.push(new UserDetails(UserName, +UserAge, +UserPhoneNumber));
        var UserId1 = User[index].UserId;
        alert("Successfully created and the Registration number is" + UserId1);
        document.getElementById('name').style.display = "none";
        document.getElementById('age').style.display = "none";
        document.getElementById('phoneNo').style.display = "none";
        //userReg.style.font="";
    }
    else {
        alert("MUST FILL ALL THE DETAILS");
    }
}
function Login() {
    document.getElementById('mainDiv').style.display = "none";
    document.getElementById('optionDiv').style.display = 'block';
}
function AvailableCourse() {
    document.getElementById('mainDiv').style.display = "none";
    document.getElementById('optionDiv').style.display = 'none';
    document.getElementById('courseDiv').style.display = 'block';
    alert("Enroll this Course");
}
function EnrolledCourse() {
    document.getElementById('optionDiv').style.display = 'none';
    for (var index = 0; index < Course.length; index++) {
        document.getElementById('selectedCourses').innerHTML;
    }
}
function Enroll() {
    var seloption = document.getElementById('courses').value;
    var days = document.getElementById('totalDays').value;
    if ((seloption != "") && (days != "")) {
        Course.push(new CourseDetails(seloption, +days));
        alert("Enrolled Successfully and the CourseId is");
        document.getElementById('optionDiv').style.display = "block";
        document.getElementById('courseDiv').style.display = 'none';
    }
    else {
        alert("Please Enter your Details");
    }
}
