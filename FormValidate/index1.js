function data()
{
    var a = document.getElementById('n1').value;
    var b = document.getElementById('n2').value;
    var c = document.getElementById('n3').value;
    var d = document.getElementById('n4').value;

    if(a=="" || b=="" ||c=="" ||d=="")
    {
        alert("All Fields are mandatory");
        return false;
    }
    else if(b.length < 10 || b.length>10)
    {
        alert(" number should be of 10 digit : Please enter valid number");
        return false;
    }
    else if(isNaN(b))
    {
        alert("Only Numbers are allowed !! Please enter valid number");
        return false;
    }
    else if(c !== d)
        {
            alert(" Enter same password ");
            return false;
        }
    else if(c.length < 5 || c.length > 5)
    {
        alert("Password Should be of 5 digit Only");
        return false;
    }
    else
    {
        return true;
    }
}