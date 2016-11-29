/**
 * Created by liuyujing on 2016/11/27.
 */
(function () {

    $(".drag").draggable({stop:function (event,ui) {
        console.log(event,ui);
    }});

    $(".drop").droppable({drop:function (event,ui) {
        $(this).addClass("ui-state-highlight");
    },out:function () {
        $(this).removeClass("ui-state-highlight");
    }});

    $(".effect").click(function () {
        // $(this).addClass("change",1000,"easeInOutBounce",function () {
        //     alert("");
        // });

        $(this).animate({backgroundColor:"red"},1000);
    });

    $(".btn").button().click(function () {
        alert("");
    });


    $(".accordion").accordion({activate:function (event,ui) {
        console.log(ui.newHeader.text());
    }});

    $(".tabs").tabs({activate:function (event,ui) {
        console.log(ui.newPanel.text());
    }});

    $(".selectView").selectable({selected:function (event,ui) {
        console.log(ui);
    },stop:function () {
        $(".ui-selected").each(function () {
            console.log(this);
        });
    }});

    $(".sortView").sortable();
    $(".sortView").disableSelection();

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#search").autocomplete({source:availableTags});

    $(".date").datepicker();

    $(".alert").dialog();
})();