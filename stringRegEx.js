function trimInputString(str){
    var remChar= /[^A-Za-z0-9]/g;
    var lowerString=str.replace(remChar,"");
    return lowerString;


}
trimInputString("hHeLLlllooo1235!!!!jjjkkk_@@KKKK99900");