// -----------------------------------------------------------------------------
// Pipeline contact classification.
// -----------------------------------------------------------------------------

//
// Columns
//

const initialData = {
   tasks: {
      "task-1": { id: "task-1", content: "John Doe" },
      "task-2": { id: "task-2", content: "Mary Jane" }
   },
   columns: {
      "column-1": {
         id: "column-1",
         title: "Not Contacted (0)",
         taskIds: ["task-1", "task-2"]
      },
      "column-2": {
         id: "column-2",
         title: "Contacted (0)",
         taskIds: []
      },
      "column-3": {
         id: "column-3",
         title: "Needs Follow Up (0)",
         taskIds: []
      },
      "column-4": {
         id: "column-4",
         title: "All Info Sent (0)",
         taskIds: []
      },
      "column-5": {
         id: "column-5",
         title: "Followed Up (0)",
         taskIds: []
      },
      "column-6": {
         id: "column-6",
         title: "Closed/Signed (0)",
         taskIds: []
      },
      "column-7": {
         id: "column-7",
         title: "Not Right Now (0)",
         taskIds: []
      }
   },
   // facilitate reordering of columns
   columnOrder: [
      "column-1",
      "column-2",
      "column-3",
      "column-4",
      "column-5",
      "column-6",
      "column-7"
   ]
};

export default initialData;
