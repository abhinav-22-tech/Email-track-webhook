function doGet(e) {
 // Store a reference for the tracking spreadsheet
 var trackingSpSheet = SpreadsheetApp.openById("Enter your Spreadsheet ID")
 // Store a reference for the Logs sheet
 var outputSheet = trackingSpSheet.getSheetByName("Logs")
// Get the number of the last row in the Logs sheet with no content
 var lastRow = outputSheet.getLastRow()+1
 
// Set the value of the last row to the current date and the email info
 outputSheet.getRange(lastRow, 1,1,3).setValues([[new Date(),e.parameters.esubject,e.parameters.eto]])
// Return a string version of e to comply with the web app requirement
return ContentService.createTextOutput(JSON.stringify(e)) 
}