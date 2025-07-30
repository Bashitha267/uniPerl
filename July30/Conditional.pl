my @skills=("Perl","Python","Java","Unix","Shell");
if($skills[-1] eq "Shell"){
	print"This is true\n";
}
elsif($skills[0] eq "Perl"){
	print"Elseif statement is freee\n";
}
else{
	print"This is false";
}
$age=15;
unless($age==5){
	print"Age is wrong\n";
}
unless(scalar @skills==5){
	print"Size is not 5";
	
}else{
	print"Size is 5";
}