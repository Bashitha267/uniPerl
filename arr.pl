@colors=("#0000","#1111","green","Red");
print"@colors[2..4]\n";

@marks=(23,34,56,88,87,46);
splice(@marks,2,3,97..100);
print"@marks\n";

splice(@colors,1,2,"Blue","Yellow");
print"@colors\n";

@last=splice(@marks,-3);
print"@marks\n";

$languages="Java=Perl=Python=Ruby=JavaScript";
@language=split("=",$languages);
print"Languages:@language\n";
$newLanguases=join("|",@language);
print"$newLanguases\n";
@language=sort(@language);
print"@language\n";

@arr1=(1..4);
# @arr2=(5..8);
# @arr=(@arr1,@arr2);
# print"@arr\n";


#add elements to beginning of an array
unshift(@arr1,0);
print"@arr1\n";

#remove first element
shift(@arr1);
print"@arr1\n";

#remove last element
pop(@arr1);
print"@arr1\n";

#add element to last of array
push(@arr1,5);
print"@arr1\n";