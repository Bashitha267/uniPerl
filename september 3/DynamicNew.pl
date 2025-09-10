#needleman–Wunsch style dynamic programming matrix.
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
$m=1;
$miss=-1;
$gap=-2;
# $str="AGCCT";
# $str2="ACGC";
$rows=length($str2)+1;
$cols=length($str)+1;
@matrix;
for($i=0;$i<$cols;$i++){
    $matrix[0][$i]=$gap*$i;
}
for($i=0;$i<$rows;$i++){
    $matrix[$i][0]=$gap*$i;
}

for($i=1;$i<$rows;$i++){
	for($j=1;$j<$cols;$j++){
        $up=$matrix[$i-1][$j]+$gap;
        $side=$matrix[$i][$j-1]+$gap;
        $dg=0;
        if(substr($str,$j-1,1) eq substr($str2,$i-1,1)){
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
$align1="";
$align2="";
$i=$rows-1;
$j=$cols-1;
while($i>0||$j>0){
	$score=$matrix[$i][$j];
	$base1=substr($str,$i-1,1);
	$base2=substr($str2,$j-1,1);
	
	
	if($score==$matrix[$i-1][$j-1]+($base1 eq $base2 ? $m : $miss)){
		$align1=$base1.$align1;
		$align2=$base2.$align2;
		$i--,$j--;
		next;
		
	}
	if($score==$matrix[$i-1][$j]+$gap){
		$align1="_".$align1;
		$align2=$base2.$align2;
		$i--;
		next;
	}
	if($score==$matrix[$i][$j-1]){
		$align1=$base1.$align1;
		$align2="_".$align2;
		$j--;
		next;
		
	}
}
print($align1."\n");
print($align2);
