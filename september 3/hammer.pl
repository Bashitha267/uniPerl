print"Enter the neoclide 1:";
$str=<STDIN>;
chomp($str);
if($str!~/^[ATGC_]+$/i){
	die"Enter valid Neoclide";
}
print"Enter the neoclide 2:";
$str2=<STDIN>;
chomp($str2);
if($str2!~/^[ATGC_]+$/i){
	die"Enter valid Neoclide ";
}
print"Enter match value m:";
$m=<STDIN>;
chomp($m);
print"Enter missmatch value s:";
$s=<STDIN>;
chomp($s);
print"Enter gap penalty:";
$d=<STDIN>;
chomp($d);
$matches=0;
$missMatches=0;
$gaps=0;
if(length($str)==length($str2)){
	for($i=0;$i<length($str);$i++){
		# if(substr($str,$i,1) eq substr($str2,$i,1)){
			# $matches++;
		# }
		# elsif(substr($str,$i,1) eq "_" or substr($str2,$i,1) eq "_"){
			# $gaps++;
		# }
		# else{
			# $missMatches++;
		# }
		if(substr($str,$i,1) ne "_" and substr($str2,$i,1) ne "_"){
			if(substr($str,$i,1) eq substr($str2,$i,1)){
			$matches++;
		# }
		
		}
		else {
			$missMatches++;
			}
		
	}
	else{
		$gaps++;
	}
	
	
}
$F=$matches*$m-($missMatches*$s)-($gaps*$d);
	print"Matches:".$matches."Dismatches:".$missMatches."Gaps:".$gaps;
	print"Score:".$F;}
else{
	print"Lengths are not equal";
}

# print"Hamming_distance:".$count;