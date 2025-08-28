use strict;
use warnings;
print"Enter the first DNA seqence: ";
my $seq1=<STDIN>;
chomp($seq1);
if($seq1 !~ /^[ATGC]+$/i){
	die "Invalid nucleotide! please enter only A,T,G or C.\n";
}
print"Enter the nucleotide to delete (A/T/D/C):";
my $del=<STDIN>;
chomp($del);
if($del!~ /^[AGTC]$/i){
	die "invalid nucleotide! please enter only A C T or G\n";
}
(my $new_seq1=$seq1)=~s/$del//gi;
print"Original Sequence 1: $seq1\n";
print"Modified 1:$new_seq1\n";

