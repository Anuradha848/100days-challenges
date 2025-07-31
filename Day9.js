//Day9 of 100days challenge
//Remove Duplicate E-Mails
function removeDuplicate(email){
    let Id=0;
    for(let i=1;i<email.length;i++){
        if(email[i]!==email[Id]){
            Id++;
            email[Id]=email[i];
        }
    }
    return email.slice(0,Id+1);
}
console.log(removeDuplicate(["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]));

//Playlist Duration Matcher
function Playlist(songs,duration){
    let left=0;
    let right=songs.length-1;
    while(left<right){
       const sum=songs[left]+songs[right];
       if(sum===duration){
        return [songs[left],songs[right]];
       }else if(sum<duration){
        left++;
       }else{
        right--;
       }
    }
    return songs;
}
console.log(Playlist([3,5,8,2,7,4],10));