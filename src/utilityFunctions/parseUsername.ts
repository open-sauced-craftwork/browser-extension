const parseUsername: Function = (username: string) => {
    var start: number = -1;
    var end: number = -1;
  
    for (let i = 0; i < username.length; i++) {
      if (username.charAt(i) != " " && username.charAt(i) != "\n") {
        if (start == -1) start = i;
        end = i;
      } else if (start != -1) {
        break;
      }
    }
  
    if (start == -1) return null;
    else return username.substring(start, end + 1);
}

export default parseUsername;