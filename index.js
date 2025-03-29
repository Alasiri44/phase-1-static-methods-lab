class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);                                                                                                                                                                                                                                                                                                                                                              
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(text){
    const exceptions = new Set(["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]);
    
    return text.replace(/(?:^|\.\s+)(\w+)|\b(\w+)\b/g, (match, firstInSentence, normalWord) => {
        if (firstInSentence) {
            return firstInSentence.charAt(0).toUpperCase() + firstInSentence.slice(1).toLowerCase();
        }
        return exceptions.has(normalWord.toLowerCase()) 
            ? normalWord.toLowerCase() 
            : normalWord.charAt(0).toUpperCase() + normalWord.slice(1).toLowerCase();
    });
  }
}