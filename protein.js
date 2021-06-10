// Our cells go through a process called protein synthesis to translate the instructions in DNA into an amino acid chain, or polypeptide.
// Your job is to replicate this!
// Given DNA  "TACAGCTCGCTATGAATC"
// A -> U
// G -> C
// C -> G```
// Also, you will split it into groups of three, or _codons_.
// DNA becomes mRNA strand `"AUG UCG AGC GAU ACU UAG"`
// Next turn into amino acid chain using : 
// Ala GCU, GCC, GCA, GCG 
// Leu UUA, UUG, CUU, CUC, CUA, CUG 
// Arg CGU, CGC, CGA, CGG, AGA, AGG 
// Lys AAA, AAG Asn AAU, AAC 
// Met AUG Asp GAU, GAC 
// Phe UUU, UUC 
// Cys UGU, UGC 
// Pro CCU, CCC, CCA, CCG
// Gln CAA, CAG 
// Ser UCU, UCC, UCA, UCG, AGU, AGC Glu GAA, GAG 
// Thr ACU, ACC, ACA, ACG 
// Gly GGU, GGC, GGA, GGG 
// Trp UGG 
// His CAU, CAC 
// Tyr UAU, UAC 
// Ile AUU, AUC, AUA 
// Val GUU, GUC, GUA, GUG 
// Stop UAG, UGA, UAA
// so our strand will become "Met Ser Ser Thr Asp Stop"
// Any additional sets of bases that aren't in a group of three aren't included. For example:
// "AUG C" would become "Met"


function addHello(x) {
    return x + ' Hello';
}

function changeValue(val1) {
    console.log(val1);
    return val1 == 'A' ? 'U'
        : val1 == 'G' ? 'C'
            : val1 == 'C' ? 'G'
                : val1;
}

function proteinSynthesis(dna) {
    var dnaArray = dna.toUpperCase().split('');

    var mRNA = dnaArray.map(val => {

        return val == "A" ? "U"
            : val == "G" ? "C"
                : val == "C" ? "G"
                    : val;

    });
    console.log(dnaArray);
    console.log(mRNA);

}
proteinSynthesis("TACAGCTCGCTATGAATC");

//   if (val=="A"){
//     val.replace('A','U');
// }
// else if(val=="G"){
//     val.replace('G','C');
// }
// else if (val=="C"){
//     val.replace('C','G');
// }