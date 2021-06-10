 
//  From https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/ Sumit Ghosh
 function longestPalindrome(inputstr){
    let str= inputstr.toString();
    let maxLength=1;
    let start=0;
    let length=str.length;
    let lowerIndex;
    let upperIndex;
    // For Even Palindromes

    for (i=0;i<length;i++){
        lowerIndex=i-1;
        upperIndex=i;
        while(lowerIndex>= 0 && upperIndex<length && str.charAt(lowerIndex)===str.charAt(upperIndex)){
            if(upperIndex-lowerIndex+1>maxLength){
                start=lowerIndex;
                maxLength=upperIndex-lowerIndex+1;
            }
            lowerIndex--;
            upperIndex++;

        }

        // For Odd Palidromes
        lowerIndex=i-1;
        upperIndex=i+1;
        while(lowerIndex>= 0 && upperIndex<length && str.charAt(lowerIndex)===str.charAt(upperIndex)){
            if(upperIndex-lowerIndex+1>maxLength){
                start=lowerIndex;
                maxLength=upperIndex-lowerIndex+1;

            }
            lowerIndex--;
            upperIndex++;
        }
        
        //return maxLength;
        // console.log("The longest Palindromic substring is :"+str.substring(lowerIndex,upperIndex+1));
        // console.log("The length is :"+ maxLength);

    }

    console.log("The length is :"+ maxLength);
    console.log("The start is :"+ start);
    console.log("The longest Palindromic substring is :"+str.substring(start,start+maxLength));

    return 

 }

 longestPalindrome("abbaracecarxyzmalayalam123");

 