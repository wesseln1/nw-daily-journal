const journalEntries = [
    {
        date: "10/22/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok",
    },

    {
        date: "10/24/2018",
        concept: "Funtions and Logic",
        entry: "Today we discussed funtions and logic. We went over how to write functions as well as the logic in a functions. Functions can also include for loops and forEach loops.",
        mood: "Happy, Happy, Happy!"
    },

    {
        date: "10/29/2018",
        concept: "Using and fetching data",
        etry: "We got to see how to use and call an API for larager amaounts of data. We also got to learn how to make a fecth to the API.",
        mood: "Wonderful"
    }
    
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object) */
let journalEntry = journalEntries
const makeJournalEntryComponent = function(journalEntry) {
    const createEntry =
    `<p>${journalEntry.date}</p>
     <p>${journalEntry.concept}</p>
     <p>${journalEntry.entry}</p>
     <p>${journalEntry.mood}</p>`
    // Create your own HTML structure for a journal entry for real
return createEntry 
}
const container = document.querySelector(".journal_entry");


// const h1 = (title, style) => {
//     return `<h1 class="${style}">${journalEntry}</h1>`
// }

console.log(makeJournalEntryComponent(journalEntry[1]));
container.innerHTML = makeJournalEntryComponent(journalEntry[1])