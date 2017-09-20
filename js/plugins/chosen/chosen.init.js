
$(function(){
    var config = {
        ".chosen-select": {'search_contains': true},
        ".chosen-select-deselect": {
            allow_single_deselect: !0
        },
        ".chosen-select-no-single": {
            disable_search_threshold: 10
        },
        ".chosen-select-no-results": {
            no_results_text: "Oops, nothing found!"
        },
        ".chosen-select-width": {
            width: "95%"
        }
    };
    //for (var selector in config) $(selector).chosen(config[selector]);
    for (var selector in config) $(selector).chosen(config[selector]);
  //  console.log("执行chosen");
})