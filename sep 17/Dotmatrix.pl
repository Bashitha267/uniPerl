$str="AATTC";
$str2="ATC";
$m=1;
$miss=-1;
$gap=-2;
$rows=length($str2)+1;
$cols=length($str)+1;
@matrix;
for($i=1;$i<$rows;$i++){
	for($j=1;$j<$cols;$j++){
		if(substr($str,$j-1,1) eq substr($str2,$i-1,1)){
			$matrix[$i][$j]="*"
		}
	
	
}

}
print "\t";
for($i=0;$i<$cols;$i++){
	print substr($str,$i,1)."\t";
}

	print"\n"; 
for($i=0;$i<$rows;$i++){
	print substr($str2,$i,1);
	for($j=0;$j<$cols;$j++){
	
	print $matrix[$i][$j]."\t";
	
	}
	print"\n"; 
	
	
}
