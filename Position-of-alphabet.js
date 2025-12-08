function position(letter) {
  const code = letter.charCodeAt(0); 
  if (code >= 97 && code <= 122) {
    return `Position of alphabet: ${code - 96}`;
  }
  return null;
}
