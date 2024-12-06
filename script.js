// All Elements
const addWord = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const translateWord = document.getElementById("translation");
const generateBtn = document.getElementById("generate");
const guessBtn = document.getElementById("guessBtn");
const inputBox = document.getElementById("inputBox");
const wordBox = document.getElementById("word");
const guessBox = document.getElementById("guessBox");
const dutchInput = document.getElementById("dutchInput");
const englishInput = document.getElementById("englishInput");



// Vocabulary Bank Class
class VocabBank {
    constructor(dutch, english) {
        this.dutch = dutch;
        this.english = english;
    }
}

// Array/Objects to store translations
const translations = [
new VocabBank("Water Slang", "Water Hose"),
new VocabBank("Graven", "Digging"),
new VocabBank("Zeil", "Sail"),
new VocabBank("Rand", "Edge"),
new VocabBank("Kruiwagen", "Wheelbarrow"),
new VocabBank("Nette", "Neat"),
new VocabBank("Kattenbox", "Litterbox"),
new VocabBank("Vermoid", "Beautify"),
new VocabBank("Gierig", "Stingy"),
new VocabBank("Zuinig", "Frugal"),
new VocabBank("Plichtsgetrouw", "Dutiful"),
new VocabBank("Slaafs", "Slaves"),
new VocabBank("Nederig", "Humble"),
new VocabBank("Naald", "Nail"),
new VocabBank("Overigens", "Incidentally"),
new VocabBank("Beloon", "Reward"),
new VocabBank("Veroordeeld", "Condemned"),
new VocabBank("Vermoeiend", "Tiring"),
new VocabBank("Ik heb mijn voorkeuer", "It is my preference"),
new VocabBank("Littekens", "Scars"),
new VocabBank("Omgeving", "Environment"),
new VocabBank("Ontroerende", "Emotional"),
new VocabBank("Nauwelijks", "Barely"),
new VocabBank("Onzin", "Nonsense"),
new VocabBank("Onomkeerbaar", "Irreversible"),
new VocabBank("Zwerven", "Wandering"),
new VocabBank("Uitbundige", "Flashy"),
new VocabBank("Inschenken", "Pour"),
new VocabBank("Besteden", "Spend"),
new VocabBank("Uitstel", "Delay"),
new VocabBank("Takken", "Branches"),
new VocabBank("Zagen", "Sawing"),
new VocabBank("Besproeien", "Spray"),
new VocabBank("Aardbevingen", "Earthquake"),
new VocabBank("Vaat", "Dishes"),
new VocabBank("Aanpak", "Approach"),
new VocabBank("Vaat", "Dishes"),
new VocabBank("het gras maaien", "Mow the grass"), 
new VocabBank("Mede", "Also"), 
new VocabBank("Leiding", "Leader"), 
new VocabBank("Afdwingen", "Enforce"),
new VocabBank("Onderdrukking", "Oppression"),
new VocabBank("Opvatting", "Idea"),
new VocabBank("Geruime Tijd", "For some time"),
new VocabBank("Inrichting", "Funishing"),
new VocabBank("Opeisen", "Demand"),
new VocabBank("Dankzij", "Thankfully"),
new VocabBank("Voortijdig", "Prematurely"),
new VocabBank("Inzetten", "Insert"),
new VocabBank("Onderhouden", "Maintenance"),
new VocabBank("Kring", "Group of People"),
new VocabBank("Aanstelling","Appointment"),
new VocabBank("Stelvarken", "Hedgehogs"),
new VocabBank("Blaadjes", "Leaves"),
new VocabBank("Prei", "Leek"), 
new VocabBank("Schort", "Apron"), 
new VocabBank("Gezeemd", "Polish"),
new VocabBank("Trekker", "Tractor"),                                 
];
let currentWord = ""; // Track the current Dutch word

// Function to Generate a Random Dutch Word
function generate() {
    const randomIndex = Math.floor(Math.random()* translations.length);
    currentWord = translations[randomIndex].dutch; // Set the current Dutch word
    wordBox.textContent = currentWord; // Display it in the wordBox
}

// Function to Check the Guess
function guess() {
    const userGuess = guessBox.value.trim(); // Get user input
    const correctTranslation = translations.find(item => item.dutch === currentWord).english; // Find the correct translation

    if (userGuess.toLowerCase() === correctTranslation.toLowerCase()) {
        alert("Correct!");
    } else {
        alert(`Incorrect! The correct translation is "${correctTranslation}".`);
    }

    // Clear the input for the next guess
    guessBox.value = "";
}

// Function to Add a New Word
function addNewWord() {
    const dutchWord = dutchInput.value.trim(); // Get Dutch input
    const englishWord = englishInput.value.trim(); // Get English input

    if (dutchWord && englishWord) {
        // Add the new word to the translations array
        translations.push(new VocabBank(dutchWord, englishWord));
        alert(`Added: ${dutchWord} -> ${englishWord}`);
        
        // Clear the input fields
        dutchInput.value = "";
        englishInput.value = "";
    } else {
        alert("Please enter both a Dutch word and its English translation.");
    }
}

// Function to Delete a Word

function deleteWord() {
    const dutchWord = dutchInput.value.trim(); // Get Dutch input
    const englishWord = englishInput.value.trim(); // Get English input

    if (dutchWord && englishWord) {
        translations.pop(new VocabBank(dutchWord, englishWord));
        alert(`Deleted: ${dutchWord} -> ${englishWord}`);
        
        // Clear the input fields
        dutchInput.value = "";
        englishInput.value = "";
    } else {
        alert("Please enter both a Dutch word and its English translation.");
    }
}

// Event Listeners
generateBtn.addEventListener("click", generate);
guessBtn.addEventListener("click", guess);
addWord.addEventListener("click", addNewWord);
deleteBtn.addEventListener("click", deleteWord);
document.addEventListener("DOMContentLoaded", generate);

