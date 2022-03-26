var inputQuantity1; var inputQuantity2; var inputQuantity3; var inputQuantity4; var inputQuantity5;
var totalPriceItem1; var totalPriceItem2; var totalPriceItem3; var totalPriceItem4; var totalPriceItem5;
var totalPriceBeforDonation; var totalPriceAfterDonation;

//functions for storing inputed quatity value and calculating final cost
function item1(){
    var regex4 = /^[+]?[0-9]+$/;            //checking for positive numeric value only
    inputQuantity1 = document.getElementById('quantityItem1').value;
    var correctInput1 = regex4.test(inputQuantity1);
    if(!correctInput1){
        document.getElementById('error6').innerHTML = "Please enter positive numeric value only";
    }
    else{
        inputQuantity1 = parseInt(inputQuantity1);
        totalPriceItem1 = inputQuantity1*5;
    }
}  

function item2(){
    var regex5 = /^[+]?[0-9]+$/; 
    inputQuantity2 = document.getElementById('quantityItem2').value;
    var correctInput2 = regex5.test(inputQuantity2);
    if(!correctInput2){
        document.getElementById('error7').innerHTML = "Please enter postive numeric values only";
    }
    else{
        inputQuantity2 = parseInt(inputQuantity2);
        totalPriceItem2 = inputQuantity2*20;
    }
}

function item3(){
    var regex6 = /^[+]?[0-9]+$/;
    inputQuantity3 = document.getElementById('quantityItem3').value;
    var correctInput3 = regex6.test(inputQuantity3);
    if(!correctInput3){
        document.getElementById('error8').innerHTML = "Please enter positive numeric values only";
    }
    else{
        inputQuantity3 = parseInt(inputQuantity3);
        totalPriceItem3 = inputQuantity3*2;
    }
}

function item4(){
    var regex7 = /^[+]?[0-9]+$/;
    inputQuantity4 = document.getElementById('quantityItem4').value;
    var correctInput4 = regex7.test(inputQuantity4);
    if(!correctInput4){
        document.getElementById('error9').innerHTML = "Please enter positive numeric values only";
    }
    else{
        inputQuantity4 = parseInt(inputQuantity4);
        totalPriceItem4 = inputQuantity4*10;
    }
}

function item5(){
    var regex8 = /^[+]?[0-9]+$/;
    inputQuantity5 = document.getElementById('quantityItem5').value;
    var correctInput5 = regex8.test(inputQuantity5);
    if(!correctInput5){
        document.getElementById('error10').innerHTML = "Please enter positive numeric values only";
    }
    else{
        inputQuantity5 = parseInt(inputQuantity5);
        totalPriceItem5 = inputQuantity5*3;
    }
}  

function userDetails(){
    //validating user name
    var userName = document.getElementById('userName').value
    if(userName==""){
        document.getElementById('error1').innerHTML = "Please enter your name";
    }

    //validating user email
    var regex1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;  //validating correct email format
    var userEmail = document.getElementById('userEmail').value;
    var correctEmail = regex1.test(userEmail);
    if(!correctEmail){
        document.getElementById('error2').innerHTML = "Please enter correct Email Address";
    }
 
    //validating credit card number
    var regex2 = /^(?:4[0-9]{3}\-\d{4}\-\d{4}\-\d{4})$/ ;
    var creditNumber = document.getElementById('userCreditNumber').value;
    var correctCreditNum = regex2.test(creditNumber);
    if(!correctCreditNum){
        document.getElementById('error3').innerHTML = "Please enter in format: 4xxx-xxxx-xxxx-xxxx";
    }
    if(correctCreditNum){
        var last4Num = creditNumber.substr(15,18);
    } 
  
    //validating credit card expiry month
    var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var expiryMonth = document.getElementById('expiryMonth').value;
    expiryMonth = expiryMonth.toUpperCase();

    if(month.indexOf(expiryMonth)==-1){
        document.getElementById('error4').innerHTML = "Please enter month in format: MMM";
    }
  
    //validating credit card expiry year
    var regex3 = /^(20[0-9]\d|2090)$/;            //fixing the limit to year 2090 as credit cards do not have very long expiration dates
    var creditYear = document.getElementById('userCreditExpiry').value;
    var correctCreditYear = regex3.test(creditYear);
    if(!correctCreditYear){
        document.getElementById('error5').innerHTML = "Please enter year in format: 20XX";
    }

    //adding total costs
    if(inputQuantity1!=null){
        totalPriceBeforDonation = totalPriceItem1;
    }
    else{
        totalPriceBeforDonation = 0;
    }
    if(inputQuantity2!=null){
        totalPriceBeforDonation+= totalPriceItem2;
    }
    else{
        totalPriceBeforDonation+=0;
    }
    if(inputQuantity3!=null){
        totalPriceBeforDonation+=totalPriceItem3;
    }
    else{
        totalPriceBeforDonation+=0;
    }
    if(inputQuantity4!=null){
        totalPriceBeforDonation+=totalPriceItem4;
    }
    else{
        totalPriceBeforDonation+=0;
    }
    if(inputQuantity5!=null){
        totalPriceBeforDonation+=totalPriceItem5;
    }
    else{
        totalPriceBeforDonation+=0;
    }
    totalPriceAfterDonation = totalPriceBeforDonation + 10;  //adding $10 donation amount to total cost


    //asking user to buy at least one item
    var condition = inputQuantity1==null&&inputQuantity2==null&&inputQuantity3==null&&inputQuantity4==null&&inputQuantity5==null;
    if(condition){
        document.getElementById('impMsg').innerHTML = "It is mandatory to buy at least one item";
    }
    

    //printing reciept
    if(userName!="" && correctEmail && correctCreditNum && correctCreditYear && month.indexOf(expiryMonth)!=-1 &&!condition){
       document.getElementById('heading3').innerHTML = "Thank you for your purchase!";
       document.getElementById('myForm').innerHTML = '<center><table border = "1"><tr><td><b>Name</b></td><td>' + userName+ '</td></tr> <tr><td><b>Email</b></td><td>' + userEmail + '</td></tr> <tr><td><b>Credit Card</b><td>xxxx-xxxx-xxxx-' + last4Num + '</td></tr> </table></center>';

       var table = '<table border = "1">';
       table += '<tr><th>Item</th>' +  '<th>Quantity</th>' + '<th>Unit Price</th>' + '<th>Total Price</th></tr>';
       if(inputQuantity1!=null){ 
           table += '<tr><td>Water Bottles</td>' + '<td>' + inputQuantity1 + '</td> <td>$5</td> <td> $' + totalPriceItem1+ '</td></tr>'      
        }

        if(inputQuantity2!=null){
                table += '<tr><td>Caps</td>' + '<td>' + inputQuantity2 + '</td> <td>$20</td> <td>$'+totalPriceItem2 + '</td></tr>';
            }
        
        if(inputQuantity3!=null){
            table += '<tr><td>Pens</td>' + '<td>' + inputQuantity3 + '</td> <td>$2</td> <td>$'+totalPriceItem3+'</td></tr>';
        }

        if(inputQuantity4!=null){
            table += '<tr><td>Candy Bags</td>' + '<td>' + inputQuantity4 + '</td> <td>$10</td> <td>$'+totalPriceItem4+'</td></tr>';
        }

        if(inputQuantity5!=null){
            table += '<tr><td>Cup Cakes</td>' + '<td>' + inputQuantity5 + '</td> <td>$3</td> <td>$'+totalPriceItem5+'</td></tr>';
        }

        table += '<tr><td>Donation</td><td colspan = "2">Minimum</td><td>$10</td></tr>';
        table += '<tr><td colspan = "3"><b>Total</b></td> <td><b>$'+totalPriceAfterDonation+'</b></td></tr>';
        document.getElementById('table2').innerHTML = table; 

        
    }
    
    

}     