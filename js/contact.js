
function showThxMessage() {
    document.googleForm.submit();
    document.getElementById('form').style.display = 'none';
    document.getElementById('thxMessage').style.display = 'block';
    $("#id_button").on("click", function () {
        $(this).parent("form").get(0).reportValidity();
    });
}