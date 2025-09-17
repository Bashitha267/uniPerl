sub getMax {
    my ($up, $side, $dg) = @_; 
	
    $up   =  $up   < 0 ? 0: $up;
    $side =  $side < 0 ? 0: $side;
    $dg   =  $dg   < 0 ? 0: $dg;
    my $max = $up;   

    if ($side > $max) {
        $max = $side;
    }
    if ($dg > $max) {
        $max = $dg;
    }

    return $max;
}
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
$str="AATTC";
$str2="ATC";
$m=1;
$miss=-1;
$gap=-2;
$rows=length($str2)+1;
$cols=length($str)+1;
@matrix;
for($i=0;$i<$rows;$i++){
	$matrix[$i][0]=0;
}
for($i=0;$i<$cols;$i++){
	$matrix[0][$i]=0;
}



for($i=1;$i<$rows;$i++){
	for($j=1;$j<$cols;$j++){
		$side=$matrix[$i][$j-1]+$gap;
		$up=$matrix[$i-1][$j]+$gap;
		if(substr($str,$j-1,1)eq substr($str2,$i-1,1)){
			$dg=$matrix[$i-1][$j-1]+$m;
		}
		else {
			$dg=$matrix[$i-1][$j-1]+$miss;
		}
		$matrix[$i][$j]=getMax($side,$up,$dg);
	}
}


for($i=0;$i<$rows;$i++){
	for($j=0;$j<$cols;$j++){
	print $matrix[$i][$j]."\t";
	}
	print"\n";
	print"\n";
	
}

