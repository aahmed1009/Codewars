function remove(s){
    //coding and coding....
  if(s[s.length-1] == '!'){
  return s.split('').slice(0,s.split('').length-1).join('');
  } else {
  return s;
    }
  }