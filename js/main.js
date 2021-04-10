$(document).ready(function() {

  // Write header and footer
  $(document).find("#navbar").load("navbar.html", function() {
    console.log("Navbar loaded");
  });

  $("#footer").load("footer.html", function() {
    console.log("Footer loaded");
  })

  // Write the teams to the page ---------------------------------------------
  function teamWriter(fileName) {

    $.getJSON(fileName, function(data) {

      var template = $("#all-teams").html();
      var html = Mustache.to_html(template, data);
      $("#teams").html(html);

    });

  }

  teamWriter("JSON/teams.json");

  // Calculate the totals -----------------------------------------------------

  $(document).on("change", "input[type='number']", function() {
    var currentInnovation = parseInt($(this).parents().eq(2).find(".input-innovation").val());
    var currentImpact = parseInt($(this).parents().eq(2).find(".input-impact").val());
    var currentTechnicalMerit = parseInt($(this).parents().eq(2).find(".input-technical-merit").val());
    var currentUsability = parseInt($(this).parents().eq(2).find(".input-usability").val());
    var currentPresentation = parseInt($(this).parents().eq(2).find(".input-presentation").val());
    // Calculate total
    var currentTotal = ((currentInnovation * 3) + (currentImpact * 3) + (currentTechnicalMerit * 1.5) + (currentUsability * 1.5) + (currentPresentation));
    // Set total to integer, non-decimal
    currentTotal = currentTotal.toFixed(0);
    // Write the total to the current field
    $(this).parents().eq(2).find(".total-score").text(currentTotal);
    // Write the total to data-ranking attribute
    console.log(currentTotal);
    $(this).parents().eq(4).attr("data-ranking", currentTotal);

  });



  // Populate the description modals ------------------------------------------
  $(document).on("click", ".category-description", function() {
    var clickedOnDescription = $(this).data("description");

    switch (clickedOnDescription) {
      case "presentation":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Presentation");
        $("#description-text").text("Through the final presentation, the team should clearly communicate the final value of the project. The final presentation of the product to the judges should be professional, well-structured, and meaningful. The team may also wish to describe their process and developmental hurdles and how they overcame them.");

        "Sunday";
        break;
      case "technical merit":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Technical Merit");
        $("#description-text").text("The application was technically challenging to construct, requiring strong programming skills from the team. The team made wise choices in selecting conventional but creative components and libraries to construct the app. The the complexity and elegance of the back-end matches the front-end.");


        "Monday";
        break;
      case "usability":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Usability");
        $("#description-text").text("Usability represents ease-of-use in engaging with content and services. The project should exemplify the highest standards of intuitive and elegant User Experience Design (UX). The project should easily, pleasantly, safely, and elegantly help users to connect with others and build community.");


        "Tuesday";
        break;
      case "impact":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Impact");
        $("#description-text").text("The proposed solution should have a significant impact on the challenges in using technology to promote community. For example, solutions could change the way users organize, communicate, schedule, or manage our personal, academic, or work lives.");


        "Wednesday";
        break;
      case "innovation":

        // Open the modal
        $("#description-modal").modal("show");
        $("#description-title").text("Innovation");
        $("#description-text").text("The project should take a unique, interesting, and creative approach to solving the problem(s) identified by this year's theme. This criterion looks at novel or cutting edge methods for user interaction, data manipulation and presentation, and use of new technology.");


        "Thursday";
        break;
    }

  });

  // Instructions section ----------------------------------------------------

  // instructions button
  $("#instructions-button").on("click", function() {
    $("#instructions").stop().slideToggle();
  });

  // $("#instructions-button").hover(function() {
  //   $("#instructions-button-text").stop().fadeToggle();
  // });


  // Sort based on ranking ----------------------------------------------------
  function rankByScore() {

    $("#teams li").sort(sort_ranking).appendTo('#teams');

    function sort_ranking(a, b) {
      return ($(b).data('ranking')) > ($(a).data('ranking')) ? 1 : -1;
    }

  }

  $(document).on("click", "#rank-by-score", rankByScore);

  // Sort based on original order -------------------------------------------
  function sortByOrder() {

    $("#teams li").sort(sort_order).appendTo('#teams');

    function sort_order(a, b) {
      return ($(b).data('order')) < ($(a).data('order')) ? 1 : -1;
    }

  }

  $(document).on("click", "#sort-by-order", sortByOrder);


  // Create an array --------------------------------------------------------
  //   var teamsArray = [];
  //
  //   $.getJSON("JSON/teams.json", function(data) {
  // console.log(data.teams.length);
  //     for (let i = 0; i < data.teams.length; i++) {
  //       teamsArray[i] = [];
  //       for (let j = 0; j < 3; j++) {
  //
  //         teamsArray[i][j] = data.teams[1].number;
  //         teamsArray[i][j] = data.teams[2].name;
  //         teamsArray[i][j] = data.teams[3].project;
  //
  //       }
  //     }
  //
  //     console.log(teamsArray);
  //   });



});
