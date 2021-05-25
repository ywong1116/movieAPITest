$(document).ready(function () {

    // $("#search").on("click", function(){
    //     var searchTerm = $("#searchTerm").val();
    //     var url = "https://www.omdbapi.com/?apikey=2aa69155&s=" + searchTerm;
    //     $.ajax( {
    //         url: url,
    //         dataType: "json",
    //         type: "get",
    //         success: function(data) {
    //             if (data['Response'] != "False") {
    //                 var output = "<table>"
    //                 output += "<tr><td>" + "Title" + "</td><td>" + "Year" + "</td><td>" + "Poster" + "</td></tr>";
    //                 $(data["Search"]).each(function(index, value){
    //                     output += "<tr><td>" + value["Title"] + "</td><td>" + value["Year"] + "</td><td><img src=" +value["Poster"]  + "/></td></tr>";
    //                 })
    //                 output += "</table>";
    //                 $("#update").html(output);
    //             }
    //             else {
    //                 var output = "<h2>Could not display results</h2>";
    //                 $("#update").html(output);
    //             }
    //         }
    //     })

        $("#search").on("click", function(){
            var searchTerm = $("#searchTerm").val();
            var url = "http://api.themoviedb.org/3/search/movie?api_key=1ba2bd48a8994892a3ee591fb4ea65cd&query=" + searchTerm;
            $.ajax( {
                url: url,
                dataType: "json",
                type: "get",
                success: function(data) {
                        var output = "<table>"
                        output += "<tr><td>" + "Title" + "</td><td>" + "Year" + "</td><td>" + "Description" + "</td><td>" + "Poster" + "</td></tr>";
                        $(data["results"]).each(function(index, value){
                            output += "<tr><td>" + value["title"] + "</td><td>" + value["release_date"] +"</td><td>" + value["overview"] + "</td><td><img src=" +"'http://image.tmdb.org/t/p/w500" +value["poster_path"]  + "'/></td></tr>";
                        })
                        output += "</table>";
                        $("#update").html(output);
                },
                error: function() {
                    var output = "<h2>Could not display results</h2>";
                        $("#update").html(output);
                }
            })
        // $.getJSON(url, function(data) {
        //         if($(data["Response"]) != "False") {
          
        //         var output = "<table>"
        //         output += "<tr><td>" + "Title" + "</td><td>" + "Year" + "</td><td>" + "Poster" + "</td></tr>";
        //         $(data["Search"]).each(function(index, value){
        //             output += "<tr><td>" + value["Title"] + "</td><td>" + value["Year"] + "</td><td><img src=" +value["Poster"]  + "/></td></tr>";
        //         })
        //         output += "</table>";
        //         $("#update").html(output);
                          
        //     }
        //     else {
        //         var output = "<h1>Could not display results</h1>";
        //     }
            
        // })
    })
    
});