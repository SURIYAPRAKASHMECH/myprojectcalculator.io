let outputscreen = document.getElementById("input");
function cl()
{
        outputscreen.value = "";
}
function del()
{
        outputscreen.value = outputscreen.value.slice(0,-1)
}
function dis(num)
{
    outputscreen.value += num;
}
function solve()
{
    try
    {
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err)
    {
        alert("Invaild format of data");
    } 
}  