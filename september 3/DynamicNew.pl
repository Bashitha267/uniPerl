#eedleman–Wunsch style dynamic programming matrix.
sub getMax {
    my ($up, $side, $dg) = @_; 
    my $max = $up;   

    if ($side > $max) {
        $max = $side;
    }
    if ($dg > $max) {
        $max = $dg;
    }

    return $max;
}

$m=1;
$miss=-1;
$gap=-2;
$str="AGCCT";
$str2="ACGC";
$rows=length($str2)+1;
$cols=length($str)+1;
@matrix;
for($i=0;$i<$cols;$i++){
    $matrix[0][$i]=-2*$i;
}
for($i=0;$i<$rows;$i++){
    $matrix[$i][0]=-2*$i;
}

for($i=1;$i<$rows;$i++){
	for($j=1;$j<$cols;$j++){
        $up=$matrix[$i-1][$j]+$gap;
        $side=$matrix[$i][$j-1]+$gap;
        $dg=0;
        if(substr($str,$i-1,1) eq substr($str2,$j-1,1)){
            $dg=$matrix[$i-1][$j-1]+$m;
        }else{
            $dg=$matrix[$i-1][$j-1]+$miss;
        }
        $value=getMax($up,$side,$dg);
        $matrix[$i][$j]=$value;

	}
	
	
}
for($i=0;$i<$rows;$i++){
	for($j=0;$j<$cols;$j++){
	print $matrix[$i][$j]."\t";
	}
	print"\n";
	print"\n";
	
}
