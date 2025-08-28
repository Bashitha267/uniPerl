import strict;
import warnings;
print"Enter the first DNA sequence:";
my $seq1=<STDIN>;
chomp($seq1);
if($seq1!~/^[ACTG]+$/i){
	die "Invalid nucleoride!"
}
print"Enter the nucleotide to change:";
my $seq2=<STDIN>;
chomp($seq2);
if($seq2!~/^[AGTC]$/i){
	die "Invalid nucleoride!"
}
print"Enter the replace nucleotide:";
my $seq3=<STDIN>;
chomp($seq3);
if($seq3!~/^[AGTC]$/i){
	die "Invalid nucleoride!"
}
(my $new_seq=$seq1)=~s/$seq2/$seq3/gi;
print"Original Sequence 1: $seq1\n";
print"Modified 1:$new_seq\n";

