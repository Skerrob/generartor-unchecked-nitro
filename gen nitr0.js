// Liczba kodów do wygenerowania
const numCodes = 5000;

// Długość pojedynczego kodu
const codeLength = 16;

// Znaki, które będą używane do generowania kodów
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Funkcja generująca losowe kody
function generateRandomCodes(numCodes, codeLength) {
  const codes = [];
  for (let i = 0; i < numCodes; i++) {
    let code = '';
    for (let j = 0; j < codeLength; j++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset[randomIndex];
    }
    codes.push(`https://discord.gift/${code}`);
  }
  return codes;
}

// Generowanie kodów
const randomCodes = generateRandomCodes(numCodes, codeLength);

// Wyświetlenie kodów w konsoli lub zapis do pliku (w Node.js)
console.log(randomCodes.join('\n'));

