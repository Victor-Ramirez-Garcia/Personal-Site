$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();

    $("#form-submission").css({ display: "block" });

    $("#submit-header")
      .addClass("text-success fs-4 my-3")
      .text(`Form Submitted!`);
    $("#submit-name").text(`Name: ${e.target[0].value}`);
    $("#submit-email").text(`Email: ${e.target[1].value}`);
    $("#submit-date").text(`Date: ${e.target[2].value}`);
    $("#submit-pronouns").text(
      `Pronouns: ${$("input[name='pronouns']:checked").val()}`
    );
  });
  $("input[type='reset']").click(function () {
    $("#form-submission").css({ display: "none" });
  });
});
