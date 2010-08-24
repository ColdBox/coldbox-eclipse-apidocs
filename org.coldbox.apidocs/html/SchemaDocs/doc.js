function viewDocumentation(compDesc, compName, docTextArray) {
  var width = 400;
  var height = 200;
  var locX = 100;
  var locY = 200;

  /* Generate content */
  var actualText = "<html>";
  actualText += "<head><title>";
  actualText += compDesc;
  if (compName != '') {
     actualText += ": " + compName;
  }
  actualText += "</title></head>";
  actualText += "<body bgcolor=\"#FFFFEE\">";
  // Title
  actualText += "<p style=\"font-family: Arial, sans-serif; font-size: 12pt; font-weight: bold; letter-spacing:1px;\">";
  actualText += compDesc;
  if (compName != '') {
     actualText += ": <span style=\"color:#006699\">" + compName + "</span>";
  }
  actualText += "</p>";
  // Documentation
  var idx;
  for (idx = 0; idx < docTextArray.length; idx++) {
     actualText += "<p style=\"font-family: Arial, sans-serif; font-size: 10pt;\">" + docTextArray[idx] + "</p>";
  }
  // Link to close window
  actualText += "<a href=\"javascript:void(0)\" onclick=\"window.close();\" style=\"font-family: Arial, sans-serif; font-size: 8pt;\">Close</a>";
  actualText += "</body></html>";

  /* Display window */
  windowCount++;
  var docWindow = window.open("", "documentation"+windowCount, "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable,alwaysRaised,dependent,titlebar=no,width="+width+",height="+height+",screenX="+locX+",left="+locX+",screenY="+locY+",top="+locY);
  docWindow.document.write(actualText);
} 