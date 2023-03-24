# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Allow Facilities to add their own custom ids for Agents
We need to create an 'addCustomIdForAgent' function that can be called from the Facilities' accounts page to add a custom id to the Agent's record in our database. 
Acceptance Criteria:
- A field should be added to the Agents table to store custom ids.
- A new endpoint, addCustomIdForAgent, should be created to handle requests with the new custom id.
- When an Agent with a custom id is included in a list of Shifts, we'll use the custom id instead of our internal one to generate reports.
- The custom id should be unique per Facility.
- The custom id should be saved and returned when a Facility tries to add or update it again.
Effort: 20 min

2. Rebuild the report generation function
Since we're changing how we identify Agents, we need to rebuild the report generation function to include Facilities' custom ids in reports. 
Acceptance Criteria:
- The generateReport function should be updated to accept and use custom ids from Facilities.
- No other functionality should be impacted. The metadata about the Agent assigned to each Shift is still included, but now we use the custom id instead of the database id in the reports.
Effort: 10 min