$(function(){
    $('#check').on('click',function(){
        console.log('名前:' + $('[name="username"]').val());
        console.log('性別:' + $('[name="gender"]:checked').val());
        console.log('血液型:' + $('[name="blood"]').val());
         $('[name="hobby"]:checked').each(function(){
             console.log('趣味:'+ $(this).val());
         });
    });
    //名前が入力されたら
    $('[name="username"]').on('input',function(){
        let input = $(this).val();
        if(input){
            $('#check').prop('disabled',false);
        }
        else{
            $('#check').prop('disabled',true);
        }
    });
    //趣味のチェックボックスが変更されたら
    $('[name="hobby"]').on('change', function() {
        if($('[name="hobby"]:checked').length > 3){
            $(this).prop('checked',false);
            alert('3つまでしか選択できません');
        }
    });
});