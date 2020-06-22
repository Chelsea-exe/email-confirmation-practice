// $(document).ready(function() {
//     $('.alert').alert()
//     function ValidateEmail(inputText) {
//         var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (inputText.value.match(mailFormat))
//         {
//             $('.alert-success').alert()
//             document.form1.text1.focus();
//             return true;
//         }
//         else {
//             $('.alert-danger').alert()
//             document.form1.text1.focus();
//             return false;
//         }
//     // }
//     $('#email-btn').onclick(function() {
//         var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (inputText.value.match(mailFormat))
//         {
//             $('.alert-success').alert()
//             document.form1.text1.focus();
//             return true;
//         }
//         else {
//             $('.alert-danger').alert()
//             document.form1.text1.focus();
//             return false;
//         }
//     })

// });
function validateEmail(inputText)
{
    var mailformat = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    if (inputText.value.match(mailformat))
    {
        alert("You have entered your email address, thank you");
        document.emailForm.emailText.focus();
        return true;
    }
    else
    {
        alert("You have an invalid email address");
        document.emailForm.emailText.focus();
        return false;
    }
}