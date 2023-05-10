 
         function Registration(NewCID,pageC_id,UserCId)  {
            var error = false;
            var NameFull = $("#NameFull").val(); 
            var Mobile = $("#Mobile").val(); 
            var Company = $("#Company").val(); 
            var country = $("#country").val();  
            var Message = $("#Message").val(); 
            var strplace = $("#strplace").val();
            var NewID = NewCID;
            var CatIDvar = pageC_id; 
            var UserCIDvar = UserCId;
            var emailCompare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
            var email = $('input#emailcour').val().toLowerCase(); // get the value of the input field
            if (email == "" || email == " " || !emailCompare.test(email)) {
                $('#err-email').show(500);
                $('#err-email').delay(4000);
                $('#err-email').animate({
                    height: 'toggle'
                }, 500, function () {
                    // Animation complete.
                });
                error = true; // change the error state to true
            }
            if(NameFull=="" || NameFull==" ") {
                $('#err-name').show(500);
                $('#err-name').delay(4000);
                $('#err-name').animate({
                    height: 'toggle'
                }, 500, function () {
                    // Animation complete.
                });
                error = true;
            } 
            if(error == false) {
                var DATA ='&email=' + email +'&NameFull=' + NameFull +'&Mobile=' + Mobile +'&Company=' + Company +'&country=' + country +'&Message=' + Message +'&NewID=' + NewID +'&CatIDvar=' + CatIDvar+ '&UserCIDvar=' + UserCIDvar+ '&strplace=' + strplace ;

                $.ajax({
                    type: "get",
                    url: "/templates/inct/Addons/News/views/Registration.vbhtml",
                    data: DATA,
                    cache: false,
                    success: function (data) {
                        $("#successSend").show();
                        $("#NameFull").val(''); 
                        $("#emailcour").val(''); 
                        $("#Mobile").val(''); 
                        $("#Company").val(''); 
                        $("#country").val('');  
                        $("#Message").val(''); 
                        $("#strplace").val('');
                    }
                });
            }
            return false;
       
    } 