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