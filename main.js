const decisionMaking = () => {

// Get the data 

    const reply = document.querySelector('#reply')
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    let decisionStatements = '';
    

// Randomized decision statements

    switch (randomNumber) {
        case 1:
            decisionStatements ="Now it's the time to make a change!";
            break;
            case 2: 
            decisionStatements = "Now it's time to take a step back and live in the moment.";
            break;
            case 3: 
            decisionStatements = "Don't worry! You are doing amazing!";
            break;
            case 4: 
            decisionStatements = "Relax! Remember to give yourself time.";
            break;
            case 5: 
            decisionStatements = "Just keep going and you will figure it out!";
            break;
            case 6: 
            decisionStatements = "You already know what's right for you.";
            break;
            case 7: 
            decisionStatements = "Look at the stars and you'll know the real answer.";
            break;
            case 8: 
            decisionStatements = "Just follow your intuition.";
            break;
            case 9: 
            decisionStatements = "You're on the right path! Just keep going!";
            break;
            case 10: 
            decisionStatements = "Listen to your heart and you'll know.";
            break;
            default: 
            decisionStatements = "Please enter a new question!";
            break;
        }
    
        // The result with user question and decision statement 
        const userName = document.querySelector('#userName').value
        const userQuestion = document.querySelector('#userQuestion').value

        let text;

        userQuestion == '' ? text = `Please ask me a question!`: text = `Hello ${userName}! You asked: ${userQuestion} ${decisionStatements}`
        
        reply.textContent = text;

        return false;
        
    }
    
    // Resetting to try again
    const resetForm = () => {  
        document.querySelector('#formbox').reset();
      }   