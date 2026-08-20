function launchBrowser(browserName){
    if (browserName === "Chrome"){
        console.log("launching ChromeBrowser");
    }else{
        console.log("launch other browser");

    }
    }

    function runTests(testType){
        switch(testType){
            case "smoke":
            console.log("Running Smoke Testing");
            break;

            case "sanity":
            console.log("Running Sanity Testing");
            break;

            case "regression":
            console.log("Running Regression Testing");
            break;

            default:
                console.log("Running Sanity Testing");

        }

    }

    launchBrowser("chrome"); // call the function
    runTests("regression");


