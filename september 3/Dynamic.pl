# print"Enter the neoclide 1:";
# $str=<STDIN>;
# chomp($str);
# if($str!~/^[ATGC_]+$/i){
	# die"Enter valid Neoclide";
# }
# print"Enter the neoclide 2:";
# $str2=<STDIN>;
# chomp($str2);
# if($str2!~/^[ATGC_]+$/i){
	# die"Enter valid Neoclide ";
# }
# print"Enter match value m:";
# $m=<STDIN>;
# chomp($m);
# print"Enter missmatch value s:";
# $s=<STDIN>;
# chomp($s);
# print"Enter gap penalty:";
# $d=<STDIN>;
# chomp($d);
$m=1;
$miss=-1;
$gap=-2;
$str="AGCCT";
$str2="ACGC";
$rows=length($str)+1;
$cols=length($str2)+1;
@matrix;
# $arr[0][0]=0;
$value=0;
for($j=0;$j<$cols;$j++){
		$matrix[0][$j]=$value;
		$value=$value-2;
	}
$value=0;
for($j=0;$j<$rows;$j++){
		$matrix[$j][0]=$value;
		$value=$value-2;
	}

for($i=1;$i<$rows;$i++){
	for($j=1;$j<$cols;$j++){
	if(substr($str2,$i-1,1) eq substr($str ,$j-1,1)){
		$vl=$matrix[$i-1][$j-1]+$m;
		}
	else{
		$vl=$matrix[$i-1][$j-1]+$miss;
	}
	$up=$matrix[$i-1][$j]+$gap;
	$left=$matrix[$i][$j-1]+$gap;
		@getmax=($vl,$up,$left);
		 @sorted = sort @getmax;
		$max = $sorted[-1];
		$matrix[$i][$j]=$max;
	
	
	
	}
	
	
}
	
	


for($i=0;$i<$rows;$i++){
	for($j=0;$j<$cols;$j++){
	print $matrix[$i][$j]."\t";
	}
	print"\n";
	print"\n";
	
}

